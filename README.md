# Personal e Nutri

App pessoal de acompanhamento de treino, progressão de carga e alimentação.
Funciona offline, instalável no celular (PWA).

## Como publicar

Este repositório é publicado pelo GitHub Pages ou pelo Netlify conectado ao GitHub.
Qualquer alteração enviada para a branch `main` atualiza o app automaticamente.

## Arquivos

- `index.html` — o app inteiro
- `manifest.webmanifest` — dados de instalação
- `sw.js` — funcionamento offline
- `icone-*.png` — ícones

## Backup

Dentro do app: perfil → Salvar backup (gera um `.json`) e Restaurar backup.

## Dados pessoais

Este repositório é público e **não contém dados pessoais**: perfil, medições corporais, histórico de treino e cargas
ficam só no aparelho e entram pelo backup (perfil → Restaurar backup). Nunca commitar arquivos de backup.

## Publicar uma nova versão

A cada mudança enviada, troque o nome do cache em `sw.js` (`ficha-vN`): é isso que faz os aparelhos com o app
instalado atualizarem sozinhos.
