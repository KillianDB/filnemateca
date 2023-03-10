const { text } = require('express');
const path = require('path');
const filmes = require('../database/filmes.json');

const PaginasController = {
    index: (req, res) => {
        res.render('index.ejs', { filmes });
    },
    showFilme: (req, res) => {
        // 1 - Capturar o id do filme desejado
        let id = req.params.id;

        // 2 - Capturar O filme desejado
        let filme = filmes.find(item => item.id==id);

        // 3 - Renderizar a view filme.ejs, passando para ela o filme encontrado

        res.render('filme.ejs', { filme });
    },
    editFilme: (req, res) => {
        res.render('')
    },
    buscarFilmes: (req, res) => {
        // 1 - Capturar o trecho que o usuário digitou
        // experimentem console.log(req.query)
        
        let busca = req.query.busca;

        let censura = req.query.censura;

        console.log(busca, censura);

        // 2 - Importar o array de filmes(feito no topo)

        // 3 - Filtrar os filmes que satisfaçam a busca
        
        let filmeBuscado = filmes.filter(f => f.titulo.toLowerCase().includes(busca.toLowerCase()) && f.censura<=censura);

        console.log(filmeBuscado);

        // 4 - Mandar esse array de filmes selecionados para a view

        res.render('index.ejs', { filmes:filmeBuscado })
    }
}

module.exports = PaginasController;