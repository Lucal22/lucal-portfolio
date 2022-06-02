# Lucal Portfolio

Este projeto é uma page responsiva feita em react.js com o intuito de apresentar alguns dos principais projetos desenvolvidos por mim utilizando tecnologias de desenvolvimento WEB.

## Tecnologias

### Frontend
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [React.js](https://pt-br.reactjs.org/)

### Backend
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)

## Bibliotecas

### Frontend
- [Framer motion](https://www.framer.com/motion/)
- [SCSS](https://sass-lang.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

### Backend
- [Express](https://expressjs.com/pt-br/)
- [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [Prisma](https://www.prisma.io/)
- [Nodemailer](https://nodemailer.com/about/)

## Utilitários
- [Phosphor icons](https://phosphoricons.com/)
- [React icons](https://react-icons.github.io/react-icons)

## Desenvolvimento

  Para desenvolver o frontend foi utilizado framer motion para realizar as animações da página inicial, do menu de barras e da seção 'sobre' e a estilização utilizando scss facilita mudar o estilo de tags filhos específicas.

Utilizando 'props' foi possível simplificar partes do código onde se repetiria procedimentos e com isso facilitar futuras inserções como por exemplo para adicionar novos projetos.

Para coletar os dados inseridos no formulário, utilizou-se de states e uma função assíncrona para o envio das informações para o backend utilizando o Axios.

O Express foi utilizado para realizar a rota onde os dados seriam recebidos e enviados para o banco de dados que foi configurado com o auxilio do Prisma.

Ao mesmo tempo em que os dados eram enviados para o banco de dados, o nodemailer foi utilizado para que também fosse possível realizar as configurações para envio direto para o email.

O frontend foi hospedado no [Vercel](https://vercel.com/) e o backend hospedado no [Railway](https://railway.app/).


## Licença
[MIT](https://choosealicense.com/licenses/mit/)
