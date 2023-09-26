const app2 = require('../../startup.js')
const escolaModel = require('../models/escolaModel.js')

app2.get("/getAllEscola", (req, res) => {
    const schoolList = []

    for(let count = 6; count > 0; count--){
        const escola = escolaModel

        escola.Endereco = "Vila Furquim"
        escola.Nome = "SESI 284"
        escola.Professores = "Diego"
        escola.CNPJ = "99.999.999/0001-99"
        escola.Diretor = "DEV"
        escola.Telefone = "9876-5432"

        schoolList.push(escola.RegistroJSON())
       
    }

    res.json(schoolList)

})