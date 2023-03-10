const path =require("path");
const filmes = require('../database/filmes.json');

const FilmesController={
    create:(req, res)=>{
        res.render('filmes-create.ejs', {filmes})
    }
}

module.exports=FilmesController;