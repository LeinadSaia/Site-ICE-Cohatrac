#!/bin/bash
# ==============================================================================
# Script de Instalação do Serviço Systemd (Auto-start no Boot do Linux)
# Execute com privilégios sudo: sudo bash scripts/install-service.sh
# ==============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
CURRENT_USER="${SUDO_USER:-$USER}"
NODE_PATH="$(which node 2>/dev/null || echo '/usr/bin/node')"
NPM_PATH="$(which npm 2>/dev/null || echo '/usr/bin/npm')"

# Se o usuário usa NVM, localiza o caminho correto
if [ -d "/home/$CURRENT_USER/.nvm/versions/node" ]; then
    LATEST_NVM_NODE=$(ls -d /home/$CURRENT_USER/.nvm/versions/node/* 2>/dev/null | sort -V | tail -n 1)
    if [ -n "$LATEST_NVM_NODE" ]; then
        NODE_PATH="$LATEST_NVM_NODE/bin/node"
        NPM_PATH="$LATEST_NVM_NODE/bin/npm"
    fi
fi

SERVICE_FILE="/etc/systemd/system/ice-cohatrac.service"

echo "=== Configurando serviço systemd para inicialização automática no Linux ==="
echo "Diretório do projeto: $ROOT_DIR"
echo "Usuário do serviço: $CURRENT_USER"
echo "Executável Node/NPM: $NPM_PATH"

cat <<EOF | sudo tee "$SERVICE_FILE" > /dev/null
[Unit]
Description=Servico Web Next.js - Igreja Crista Evangelica em Cohatrac (ICE Cohatrac)
Documentation=https://github.com/LeinadSaia/Site-ICE-Cohatrac
After=network.target

[Service]
Type=simple
User=$CURRENT_USER
WorkingDirectory=$ROOT_DIR
Environment=NODE_ENV=production
Environment=PORT=3000
Environment=PATH=$(dirname "$NPM_PATH"):/usr/local/bin:/usr/bin:/bin
ExecStart=$NPM_PATH run start
Restart=always
RestartSec=5s
StandardOutput=journal
StandardError=journal
SyslogIdentifier=ice-cohatrac

[Install]
WantedBy=multi-user.target
EOF

echo "=== Recarregando systemd e ativando o serviço no boot ==="
sudo systemctl daemon-reload
sudo systemctl enable ice-cohatrac.service
sudo systemctl restart ice-cohatrac.service

echo "=========================================================="
echo "✔ Serviço ice-cohatrac instalado e rodando com sucesso!"
echo "O site agora inicializa automaticamente junto com o Linux."
echo "Para verificar o status: sudo systemctl status ice-cohatrac"
echo "Para ver logs em tempo real: sudo journalctl -u ice-cohatrac -f"
echo "=========================================================="
