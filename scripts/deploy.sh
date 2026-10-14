#!/bin/bash
# ==============================================================================
# Script de Deploy e Atualização Contínua — ICE Cohatrac
# Execução: bash scripts/deploy.sh
# ==============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$ROOT_DIR"

echo "=== [1/4] Baixando atualizações do GitHub ==="
git pull origin main

echo "=== [2/4] Atualizando dependências de produção ==="
if [ -f "$HOME/.nvm/nvm.sh" ]; then
    source "$HOME/.nvm/nvm.sh"
fi
npm install

echo "=== [3/4] Gerando build otimizado de produção do Next.js ==="
npm run build

echo "=== [4/4] Reiniciando aplicação ==="
if systemctl list-unit-files | grep -q "ice-cohatrac.service"; then
    echo "Reiniciando serviço systemd..."
    sudo systemctl restart ice-cohatrac.service
elif command -v pm2 &> /dev/null; then
    echo "Reiniciando via PM2..."
    pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js
else
    echo "Serviço systemd não detectado. Inicie com: npm run start"
fi

echo "=========================================================="
echo "✔ Deploy finalizado com sucesso! Site atualizado."
echo "=========================================================="
