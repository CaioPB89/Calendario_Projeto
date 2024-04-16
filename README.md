# Projeto Caledário

Uma aplicação WEB que usa da biblioteca "https://fullcalendar.io/" para criar um calendário com eventos customizável;

Ele possui, separado em documento .js, uma lista de feriados brasileiros, retirados de: "https://github.com/joaopbini/feriados-brasil/blob/master/dados/feriados";

Todos os eventos custom podem ser modificados ou excluídos clicando nele;

A criação de um evento é feita ao se clicar em um dia, mas somente após a sua modificação ele é salvo ao armazenamento local;

O calendário foi desenvolvido com a idéia de ajudar a anotar datas de provas e eventos escolares em mente;

O projeto também foi desenvolvido como uma maneira de praticar alguns conceitos como delegação e o princípio DRY;

Para uso, é necessario a instalação dos pacotes NPM utilizando:
npm -i

O projeto foi "construido" com uso do Parcel;

 "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html --dist-dir ./dist"
  },
  
Com start sendo utilizado para teste e build para a criação da versão final a ser colocado em um site;