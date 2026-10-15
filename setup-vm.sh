#!/usr/bin/env bash
# ==============================================================================
# ⛪ ICE Cohatrac — Script de Deploy e Configuração Completa na VM Linux
# ==============================================================================
# Este script automatiza 100% da configuração do servidor na VM:
#  1. Detecta o ambiente Linux (Ubuntu, Debian, etc.)
#  2. Valida ou instala Node.js (LTS 20/22) e Apache2
#  3. Habilita módulos do Apache (proxy, proxy_http, proxy_wstunnel, rewrite, headers, deflate)
#  4. Pergunta interativamente o domínio/IP, porta interna e SSL (com defaults prontos)
#  5. Compila a aplicação Next.js (npm install & npm run build)
#  6. Cria e ativa o serviço Systemd com auto-start no boot do servidor
#  7. Configura o VirtualHost do Apache com Reverse Proxy e WebSockets
#  8. Opcionalmente instala Certificado SSL HTTPS gratuito (Let's Encrypt / Certbot)
#  9. Executa teste de integridade e coloca o site no ar imediatamente!
# ==============================================================================
# Execução recomendada na VM:
#   sudo bash setup-vm.sh
# ==============================================================================

set -e

# Cores para terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Identificação de caminhos e usuário
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$SCRIPT_DIR"
ACTUAL_USER="${SUDO_USER:-$USER}"
USER_HOME=$(getent passwd "$ACTUAL_USER" | cut -d: -f6)

clear 2>/dev/null || true
echo -e "${BLUE}${BOLD}"
echo "================================================================================"
echo "    ⛪ ICE COHATRAC — ASSISTENTE DE DEPLOY E CONFIGURAÇÃO NA VM LINUX         "
echo "================================================================================"
echo -e "${NC}"

# 1. Verificação de privilégios de root
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}[ERRO] Este script precisa ser executado com privilégios de superusuário (root/sudo).${NC}"
    echo -e "Por favor, execute: ${YELLOW}sudo bash $0${NC}\n"
    exit 1
fi

echo -e "${CYAN}➜ Diretório do Projeto:${NC} $ROOT_DIR"
echo -e "${CYAN}➜ Usuário do Serviço:${NC}   $ACTUAL_USER"
echo ""

# 2. Perguntas Interativas
echo -e "${YELLOW}${BOLD}--- [1/6] Configurações de Rede e Domínio ---${NC}"

# Detectar IP público ou local padrão
SERVER_IP=$(hostname -I 2>/dev/null | awk '{print $1}' || echo "127.0.0.1")

echo -e "Informe o domínio ou subdomínio que apontará para este servidor."
echo -e "Exemplos: ${CYAN}icecohatrac.com.br${NC} ou pressione Enter para usar o IP ${CYAN}${SERVER_IP}${NC}"
read -rp "Domínio ou IP do Servidor [padrão: $SERVER_IP]: " INPUT_DOMAIN
DOMAIN="${INPUT_DOMAIN:-$SERVER_IP}"

read -rp "Porta interna do Next.js [padrão: 3000]: " INPUT_PORT
PORT="${INPUT_PORT:-3000}"

echo ""
echo -e "${YELLOW}${BOLD}--- [2/6] Configuração de Certificado SSL / HTTPS ---${NC}"
ENABLE_SSL="N"
SSL_EMAIL=""

# Se o domínio não for IP puro, oferece Certbot
if [[ ! "$DOMAIN" =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]] && [ "$DOMAIN" != "localhost" ]; then
    read -rp "Deseja gerar certificado SSL (HTTPS gratuito com Let's Encrypt)? (s/N) [padrão: N]: " INPUT_SSL
    if [[ "$INPUT_SSL" =~ ^[sSyY]$ ]]; then
        ENABLE_SSL="S"
        read -rp "Email para notificações de expiração do SSL: " SSL_EMAIL
    fi
else
    echo -e "${CYAN}ℹ Domínio identificado como endereço IP (${DOMAIN}). SSL Certbot é aplicável apenas a domínios FQDN.${NC}"
fi

echo ""
echo -e "${GREEN}${BOLD}✔ Configurações selecionadas:${NC}"
echo -e "  • Domínio/Acesso: ${BOLD}$DOMAIN${NC}"
echo -e "  • Porta Interna:  ${BOLD}$PORT${NC}"
echo -e "  • SSL (HTTPS):    ${BOLD}$ENABLE_SSL${NC}"
echo ""
read -rp "Pressione [ENTER] para iniciar a instalação e deploy na VM..." DUMMY
echo ""

# 3. Verificação de Pacotes Essenciais do Sistema
echo -e "${BLUE}${BOLD}--- [3/6] Verificando e Instalando Dependências do Sistema ---${NC}"

export DEBIAN_FRONTEND=noninteractive

if command -v apt-get &> /dev/null; then
    echo "➜ Atualizando lista de pacotes (apt update)..."
    apt-get update -qq
    
    # Apache2
    if ! command -v apache2 &> /dev/null; then
        echo "➜ Instalando servidor Apache2..."
        apt-get install -y -qq apache2 curl git build-essential
    else
        echo -e "${GREEN}✔ Apache2 já instalado.${NC}"
    fi

    # Certbot se solicitado
    if [ "$ENABLE_SSL" = "S" ]; then
        echo "➜ Instalando Certbot e plugin Apache..."
        apt-get install -y -qq certbot python3-certbot-apache
    fi
fi

# Detectar ou Carregar Node.js
NODE_BIN=""
NPM_BIN=""

# Verifica NVM no diretório do usuário
if [ -f "$USER_HOME/.nvm/nvm.sh" ]; then
    # shellcheck disable=SC1090
    export NVM_DIR="$USER_HOME/.nvm"
    # shellcheck disable=SC1091
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

if command -v node &> /dev/null; then
    NODE_BIN="$(which node)"
    NPM_BIN="$(which npm)"
fi

# Se não encontrar node no root, procura no nvm do usuário real
if [ -z "$NODE_BIN" ] && [ -d "$USER_HOME/.nvm/versions/node" ]; then
    LATEST_NVM_DIR=$(find "$USER_HOME/.nvm/versions/node" -maxdepth 1 -mindepth 1 | sort -V | tail -n 1)
    if [ -n "$LATEST_NVM_DIR" ]; then
        NODE_BIN="$LATEST_NVM_DIR/bin/node"
        NPM_BIN="$LATEST_NVM_DIR/bin/npm"
    fi
fi

# Se ainda assim não encontrar, instala via NodeSource (LTS 20)
if [ -z "$NODE_BIN" ]; then
    echo "➜ Node.js não detectado. Instalando Node.js LTS 20 via NodeSource..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y -qq nodejs
    NODE_BIN="$(which node)"
    NPM_BIN="$(which npm)"
fi

echo -e "${GREEN}✔ Node.js detectado:${NC} $NODE_BIN ($("$NODE_BIN" -v))"
echo -e "${GREEN}✔ NPM detectado:${NC}     $NPM_BIN ($("$NPM_BIN" -v))"

# 4. Habilitar Módulos do Apache
echo ""
echo -e "${BLUE}${BOLD}--- [4/6] Configurando Módulos e VirtualHost do Apache ---${NC}"
echo "➜ Ativando módulos proxy, proxy_http, proxy_wstunnel, rewrite, headers, deflate..."
a2enmod proxy > /dev/null 2>&1 || true
a2enmod proxy_http > /dev/null 2>&1 || true
a2enmod proxy_wstunnel > /dev/null 2>&1 || true
a2enmod rewrite > /dev/null 2>&1 || true
a2enmod headers > /dev/null 2>&1 || true
a2enmod deflate > /dev/null 2>&1 || true
a2enmod ssl > /dev/null 2>&1 || true

# Criar arquivo VirtualHost customizado
APACHE_CONF="/etc/apache2/sites-available/ice-cohatrac.conf"
echo "➜ Escrevendo configuração em $APACHE_CONF..."

cat <<EOF > "$APACHE_CONF"
# ==============================================================================
# VirtualHost Apache 2.4 — Igreja Cristã Evangélica em Cohatrac (ICE Cohatrac)
# Gerado automaticamente pelo setup-vm.sh
# ==============================================================================

<VirtualHost *:80>
    ServerName ${DOMAIN}
EOF

if [ "$DOMAIN" != "$SERVER_IP" ] && [ "$DOMAIN" != "localhost" ]; then
cat <<EOF >> "$APACHE_CONF"
    ServerAlias www.${DOMAIN}
EOF
fi

cat <<EOF >> "$APACHE_CONF"
    ServerAdmin contato@${DOMAIN}

    ProxyPreserveHost On
    ProxyRequests Off

    # Suporte a WebSockets (Next.js HMR e conexões dinâmicas)
    RewriteEngine On
    RewriteCond %{HTTP:Upgrade} websocket [NC]
    RewriteCond %{HTTP:Connection} upgrade [NC]
    RewriteRule ^/?(.*) "ws://127.0.0.1:${PORT}/\$1" [P,L]

    # Encaminhamento para a aplicação Next.js
    ProxyPass / http://127.0.0.1:${PORT}/
    ProxyPassReverse / http://127.0.0.1:${PORT}/

    # Cabeçalhos de Segurança e Identificação
    RequestHeader set X-Forwarded-Proto "http"
    RequestHeader set X-Forwarded-Port "80"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"

    # Compressão Gzip
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
    </IfModule>

    ErrorLog \${APACHE_LOG_DIR}/ice-cohatrac_error.log
    CustomLog \${APACHE_LOG_DIR}/ice-cohatrac_access.log combined
</VirtualHost>
EOF

# Habilitar o novo site no Apache
echo "➜ Ativando site no Apache..."
a2ensite ice-cohatrac.conf > /dev/null

# Desativar site padrão 000-default para evitar conflitos na porta 80
if [ -f "/etc/apache2/sites-enabled/000-default.conf" ]; then
    echo "➜ Desativando 000-default.conf padrão do Apache..."
    a2dissite 000-default.conf > /dev/null 2>&1 || true
fi

# Validar sintaxe
apache2ctl configtest
systemctl restart apache2
echo -e "${GREEN}✔ Apache configurado e reiniciado com sucesso!${NC}"

# 5. Compilação da Aplicação Next.js
echo ""
echo -e "${BLUE}${BOLD}--- [5/6] Instalando Dependências e Compilando Next.js ---${NC}"
cd "$ROOT_DIR"

# Ajustar permissões da pasta para o usuário real
chown -R "$ACTUAL_USER":"$ACTUAL_USER" "$ROOT_DIR"

echo "➜ Instalando dependências (npm install)..."
sudo -u "$ACTUAL_USER" PATH="$(dirname "$NODE_BIN"):$PATH" "$NPM_BIN" install

echo "➜ Gerando build de produção otimizado (npm run build)..."
sudo -u "$ACTUAL_USER" PATH="$(dirname "$NODE_BIN"):$PATH" "$NPM_BIN" run build

# 6. Configurar Serviço Systemd
echo ""
echo -e "${BLUE}${BOLD}--- [6/6] Configurando e Iniciando o Serviço Systemd ---${NC}"

SYSTEMD_FILE="/etc/systemd/system/ice-cohatrac.service"
echo "➜ Criando unit systemd em $SYSTEMD_FILE..."

cat <<EOF > "$SYSTEMD_FILE"
[Unit]
Description=Servico Web Next.js - Igreja Crista Evangelica em Cohatrac (ICE Cohatrac)
Documentation=https://github.com/LeinadSaia/Site-ICE-Cohatrac
After=network.target

[Service]
Type=simple
User=${ACTUAL_USER}
WorkingDirectory=${ROOT_DIR}
Environment=NODE_ENV=production
Environment=PORT=${PORT}
Environment=PATH=$(dirname "$NODE_BIN"):/usr/local/bin:/usr/bin:/bin
ExecStart=${NPM_BIN} run start
Restart=always
RestartSec=5s
StandardOutput=journal
StandardError=journal
SyslogIdentifier=ice-cohatrac

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable ice-cohatrac.service
systemctl restart ice-cohatrac.service

# Aguardar 3 segundos para teste de saúde local
echo "➜ Aguardando inicialização do serviço..."
sleep 3

if curl -s "http://127.0.0.1:${PORT}" > /dev/null 2>&1; then
    echo -e "${GREEN}✔ Aplicação respondendo perfeitamente na porta ${PORT}!${NC}"
else
    echo -e "${YELLOW}ℹ O serviço está subindo. Status do systemd:${NC}"
    systemctl status ice-cohatrac.service --no-pager -l || true
fi

# 7. Execução do Certbot (se solicitado)
if [ "$ENABLE_SSL" = "S" ]; then
    echo ""
    echo -e "${BLUE}${BOLD}--- Configurando Certificado SSL com Certbot ---${NC}"
    CERT_CMD="certbot --apache -d ${DOMAIN}"
    if [ "$DOMAIN" != "$SERVER_IP" ] && [ "$DOMAIN" != "localhost" ]; then
        CERT_CMD="${CERT_CMD} -d www.${DOMAIN}"
    fi
    CERT_CMD="${CERT_CMD} --non-interactive --agree-tos"
    if [ -n "$SSL_EMAIL" ]; then
        CERT_CMD="${CERT_CMD} -m ${SSL_EMAIL}"
    else
        CERT_CMD="${CERT_CMD} --register-unsafely-without-email"
    fi
    CERT_CMD="${CERT_CMD} --redirect"

    echo "➜ Executando Certbot: $CERT_CMD"
    $CERT_CMD || echo -e "${YELLOW}Aviso: Não foi possível obter o SSL agora. Verifique se o domínio $DOMAIN já está apontando para o IP desta VM e tente novamente depois com: sudo certbot --apache${NC}"
fi

# Banner Final de Sucesso
echo ""
echo -e "${GREEN}${BOLD}================================================================================"
echo "    🎉 DEPLOY CONCLUÍDO COM SUCESSO! O SITE DA ICE COHATRAC ESTÁ NO AR!         "
echo "================================================================================${NC}"
echo ""
if [ "$ENABLE_SSL" = "S" ]; then
    echo -e "🌐 ${BOLD}Endereço Seguro (HTTPS):${NC} https://${DOMAIN}"
fi
echo -e "🌐 ${BOLD}Endereço Web (HTTP):${NC}    http://${DOMAIN}"
echo -e "⚙️  ${BOLD}Porta Interna:${NC}           127.0.0.1:${PORT}"
echo ""
echo -e "${CYAN}${BOLD}Comandos úteis para gerenciar o site na VM:${NC}"
echo -e "  • Ver status do serviço:     ${YELLOW}sudo systemctl status ice-cohatrac${NC}"
echo -e "  • Ver logs da aplicação:     ${YELLOW}sudo journalctl -u ice-cohatrac -f${NC}"
echo -e "  • Reiniciar a aplicação:     ${YELLOW}sudo systemctl restart ice-cohatrac${NC}"
echo -e "  • Recarregar o Apache:       ${YELLOW}sudo systemctl reload apache2${NC}"
echo -e "  • Atualizar o site no ar:    ${YELLOW}bash scripts/deploy.sh${NC}"
echo ""
echo -e "${PURPLE}Soli Deo Gloria — Igreja Cristã Evangélica em Cohatrac${NC}"
echo ""
