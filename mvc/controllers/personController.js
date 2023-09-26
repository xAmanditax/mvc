const app = require('../../startup.js')

const Personagem = require('../models/personagemModel.js')

app.get("/getAllPersons" ,(req, res) =>{
    res.setHeader('Acess-Control-Allow-Origin', '*')

    const pokemon = new Personagem('Charmander', 'Fogo', 'Masculino')
    const powerRanger = new Personagem('Preto', 'Mamute', 'Masculino')
    const cavaleiroZodiaco1 = new Personagem('Seya', 'Meteoro', 'Feminino')
    const cavaleiroZodiaco2 = new Personagem('Shiryu', 'Gelo', 'Feminino')
})

module.exports = Personagem()

res.json(pokemon.pegarInformacoes())