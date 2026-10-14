# Plano de Correção, Alinhamento Institucional e Refinamento — ICE Cohatrac

Este documento registra todas as correções estruturais, ajustes de liderança e programações oficiais aplicadas ao portal da **Igreja Cristã Evangélica em Cohatrac (ICE Cohatrac)**, atendendo rigorosamente às orientações pastorais enviadas por áudio.

---

## 1. Diretrizes Visuais & Princípio Construtivo

- **Arquitetura 100% Flexbox:**
  - Todas as seções e cartões migrados para Flexbox fluido (`display: flex; flex-wrap: wrap; align-items: stretch; gap: ...`), garantindo adaptação natural a telas de smartphones (320px–480px), tablets e monitores ultrawide sem quebras de layout.
- **Eliminação de Estética Genérica / Degradês Artificiais:**
  - Cores sóbrias e reverentes: Azul Marinho Nobre (`#0B1D33`), Azul Real Vibrante (`#1E5C9A`), Dourado Nobre (`#C6922C`) e fundo claro de leitura (`#F8FAFC`).
  - Total proibição de imagens geradas por inteligência artificial. Utilização exclusiva de placeholders SVG elegantes e vetoriais prontos para os arquivos reais em `/public/assets/img/`.
- **Micro-interações e Animações Elegantes:**
  - Efeito suave de elevação em cards ao hover (`translateY(-4px)`), indicador de transmissão ao vivo com anel pulsante (`pulse-dot`), transições de cópia com toast interativo e menu mobile responsivo.

---

## 2. Matriz de Correções de Conteúdo & Entidades

| Elemento / Seção | Estado Anterior (Removido/Corrigido) | Estado Atual Oficial (Aprovado) |
| :--- | :--- | :--- |
| **Identificação da Igreja** | "Templo Sede" | **ICE Cohatrac** (Igreja Cristã Evangélica em Cohatrac em todas as referências) |
| **Selo Institucional** | "Filiada à AICEB" | **"Desde 2002 no Cohatrac"** |
| **Ministério Pastoral** | Menção a "Evangelista Daniel" e Pr. Mário Rubens | **Pr. Madson Oliveira** (Pastor Titular)<br>**Pr. Júnior Vieira** (Pastor Auxiliar)<br>**Pr. Cícero Balduíno** (Pastor) |
| **Governo da Igreja** | Nomes avulsos | **Conselho de Presbíteros** & **Junta Diaconal (Diaconato)** |
| **Ministério Infantil** | "Cordeirinhos" | **MCC — Ministério Crescer com Cristo** (Domingos na EBD e no Culto) |
| **Adolescentes** | Misturado com Jovens | **Cadetes a Jato** (Sextas-feiras às 19h30) |
| **Mulheres** | Genérico | **DELOM — Departamento Local de Mulheres** (Sextas às 19h30) |
| **Homens** | Famílias/Ministério misturado | **Clube dos Homens** (Sextas às 19h30) |
| **Mocidade / Jovens** | Semanal genérico | **Rede de Jovens** (Sábados às 17h00 • **Quinzenal**) |
| **Culto de Terça** | Genérico | **Culto de Oração e Estudo Bíblico** às 19h30 |
| **EBD (Domingo)** | 09h00 (com culto matutino misturado) | **Escola Bíblica Dominical** única: **09h30 às 11h00** |
| **Culto Dominical** | 18h00 | **Culto de Celebração e Adoração**: **18h30 às 20h00** |
| **Formulários Interativos** | Pedidos de oração e planejamento de visita | **Removidos integralmente**. Substituídos por canal direto de WhatsApp e Rota Google Maps |
| **Eventos / Destaques** | Destaques avulsos / contadores | **Removidos**. Foco na vida comunitária regular e mensagens gravadas |

---

## 3. Grade Semanal Oficial de Atividades

1. **Domingo — 09h30 às 11h00:**
   - **Escola Bíblica Dominical (EBD):** Classes para adultos, jovens, adolescentes e salas dedicadas do **MCC (Ministério Crescer com Cristo)**.
2. **Domingo — 18h30 às 20h00:**
   - **Culto Dominical de Celebração e Adoração:** Louvor com hinologia sacra e contemporânea bíblica, pregação expositiva e transmissão ao vivo no YouTube.
3. **Terça-feira — 19h30:**
   - **Culto de Oração e Estudo Bíblico:** Momento congregacional solene de intercessão e ensino bíblico sistemático.
4. **Sexta-feira — 19h30:**
   - **Encontro dos Departamentos:**
     - **Clube dos Homens:** Liderança cristã, comunhão e estudo da Palavra.
     - **DELOM:** Departamento Local de Mulheres em oração e edificação.
     - **Cadetes a Jato:** Discipulado e comunhão dos adolescentes.
5. **Sábado — 17h00 (Quinzenal):**
   - **Rede de Jovens:** Louvor, estudo bíblico contextualizado e vida comunitária.

---

## 4. Estrutura dos Componentes & Navegação

- `Navbar`: Menu fixo com logo, badge "Desde 2002 no Cohatrac", links diretos para todas as seções e botão de transmissão ao vivo.
- `Hero`: Apresentação sóbria com versículo-lema, botões diretos de ação (Horários, Mensagens, Localização) e barra de resumo em Flexbox.
- `AboutSection`: Trajetória da igreja desde 2002 no bairro Cohatrac, pilares de ensino bíblico e comunhão.
- `FaithSection`: Os Cinco Solas da Reforma Protestante (*Sola Scriptura*, *Solus Christus*, *Sola Gratia*, *Sola Fide*, *Soli Deo Gloria*) com versículos e descrições sólidas.
- `LeadershipSection`: Corpo pastoral em cartões com distinção de títulos (Pr. Titular, Pr. Auxiliar, Pastor) e seções explicativas do Presbitério e Diaconato.
- `MinistriesSection`: Grade em Flexbox com MCC, Cadetes a Jato, DELOM, Clube dos Homens, Rede de Jovens, EBD e Louvor & Coral.
- `ScheduleSection`: Programação semanal organizada por dias e horários com indicação de transmissão ao vivo.
- `SermonsSection`: Integração com o canal oficial do YouTube (`@ICECOHATRAC`, com mais de 750 mensagens), permitindo assistir diretamente no portal ou navegar na playlist de cultos.
- `GivingSection`: Dízimos e Ofertas com versículo (2 Coríntios 9:7), chave PIX CNPJ (`05.349.364/0001-03`) com botão de 1 clique para copiar e QR Code.
- `ContactSection`: Como chegar à ICE Cohatrac, endereço completo com botão de copiar, rotas no Google Maps, WhatsApp oficial direto e mapa interativo.
- `Footer`: Rodapé institucional com links de navegação rápida, redes oficiais e copyright com o lema *Soli Deo Gloria*.
