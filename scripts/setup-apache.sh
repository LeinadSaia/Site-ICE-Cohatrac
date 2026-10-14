#!/bin/bash
# ==============================================================================
# Script de Configuração do Apache para ICE Cohatrac
# Execute com privilégios sudo: sudo bash scripts/setup-apache.sh
# ==============================================================================

set -e

echo "=== [1/4] Habilitando módulos necessários no Apache ==="
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_wstunnel
sudo a2enmod rewrite
sudo a2enmod headers
sudo a2enmod deflate

echo "=== [2/4] Copiando configuração do VirtualHost ==="
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

sudo cp "$ROOT_DIR/deploy/apache-ice-cohatrac.conf" /etc/apache2/sites-available/ice-cohatrac.conf

echo "=== [3/4] Ativando o site no Apache ==="
sudo a2ensite ice-cohatrac.conf

echo "=== [4/4] Testando sintaxe e recarregando Apache ==="
sudo apache2ctl configtest
sudo systemctl reload apache2

echo "=========================================================="
echo "✔ Apache configurado com sucesso para o Site ICE Cohatrac!"
echo "As requisições na porta 80 agora serão direcionadas para o Next.js (porta 3000)."
echo "Para ativar SSL gratuito (HTTPS), execute: sudo certbot --apache"
echo "=========================================================="
