// Importando express
const express = require('express');
const router = require('./router');

// Criando app
const app = express();

// Configurando pasta de arquivos estáticos acessíveis
app.use(express.static(__dirname + '/public'));

// Configurando ejs como template engine
app.set('view engine', 'ejs')

// Importando e configurando router
app.use(router);

// Pondo app para ouvir em porta
app.listen(3000);
