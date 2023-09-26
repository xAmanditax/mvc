const app = require('../../startup.js')
const studentModel = require('../models/studentModel.js')

app.get("/getAllStudents", (req, res) => {
    
    const studentsList = []

    for(let count = 5; count > 0; count--){
        const student = studentModel

        student.RA = 101
        student.Nome = "Marcos"
        student.Hobbie = "Jogar Fut"
        student.DtIngressoCurso = "25/01/2023"
        student.Curso = "DEV"

        studentsList.push(student.RegistroJSON())
       
    }

    res.json(studentsList)
})

