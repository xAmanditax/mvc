class Personagem {
    nome
    poder
    genero
    tamanho
    profissaao

    constructor(nome, poder, genero){
        this.nome = nome
        this.poder = poder
        this.genero = genero
    }

    andar(){
        console.log('O personagem andou!')
    }
    correr(){
        console.log('O personagem correu!')
    }


pegarInformacoes(){
    return{
        "nome": this.nome,
        "poder": this.poder,
        "genero": this.genero,
        "tamanho": this.tamanho,
        "profissao": this.profissao
    }

     }
    }
    
let Flora = new Personagem('Flora', 'controla a natureza', 'mulher')
let Sea = new Personagem('Sea', 'Controla os mares', 'Homem')
console.log(Flora.nome+" "+Flora.poder)
console.log(Sea.genero+" "+Sea.poder)
Sea.tamanho = 10
console.log(Flora.pegarInformacoes())
console.log(Sea.pegarInformacoes())
