#!/usr/bin/env bash
# ==============================================================================
# Script de Atualização Rápida (Deploy Contínuo) — ICE Cohatrac
# Execução: bash deploy.sh
# ==============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$SCRIPT_DIR"

cd "$ROOT_DIR"

echo "=========================================================="
echo "    ⛪ ICE COHATRAC — ATUALIZAÇÃO RÁPIDA (DEPLOY)         "
echo "=========================================================="
echo ""

# Se a aplicação ainda não foi configurada na VM, orienta o usuário
if ! systemctl list-unit-files 2>/dev/null | grep -q "ice-cohatrac.service" && [ ! -f "/etc/apache2/sites-available/ice-cohatrac.conf" ]; then
    echo "ℹ Primeira vez nesta VM? Para configuração completa do Apache e inicialização automática, execute:"
    echo "  sudo bash setup-vm.sh"
    echo ""
fi

echo "=== [1/4] Baixando atualizações do GitHub ==="
git pull origin main || echo "Aviso: git pull não pôde ser executado ou já está atualizado."

echo ""
echo "=== [2/4] Atualizando dependências de produção ==="
if [ -f "$HOME/.nvm/nvm.sh" ]; then
    # shellcheck disable=SC1090
    source "$HOME/.nvm/nvm.sh"
fi
npm install

echo ""
echo "=== [3/4] Gerando build otimizado de produção do Next.js ==="
npm run build

echo ""
echo "=== [4/4] Reiniciando aplicação ==="
if systemctl list-unit-files 2>/dev/null | grep -q "ice-cohatrac.service"; then
    echo "Reiniciando serviço systemd ice-cohatrac..."
    sudo systemctl restart ice-cohatrac.service
elif command -v pm2 &> /dev/null; then
    echo "Reiniciando via PM2..."
    pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js
else
    echo "Serviço em segundo plano não detectado. Você pode rodar com: npm run start"
fi

echo ""
echo "=========================================================="
echo "✔ Atualização concluída com sucesso! Site no ar."
echo "=========================================================="
