// Importando express
const express = require('express');
const PaginasController = require("./controllers/PaginasController");
const FilmesController = require('./controllers/FilmesController');
const AdmController = require('./controllers/AdmController');

// Criando router
const router = express.Router();

// Criando rotas
router.get('/', PaginasController.index)

router.get('/filmes/:id', PaginasController.showFilme)

router.get('/filme/create', FilmesController.create)

router.get('/adm/filmes/:id/edit', PaginasController.editFilme)

router.get('/busca', PaginasController.buscarFilmes)

router.get('/adm/login', AdmController.showLogin)

router.post('/adm/login', AdmController.login)

// Exportando router
module.exports = router;