class Moeda {
    nome
    valor
    imagem

    constructor(nome, valor, imagem){
        this.nome = nome
        this.valor = valor
        this.imagem = imagem
    }

    chegou(){
        console.log('Você chegou em um atrativo!')
    }


pegarInformacoes(){
    return{
        "nome": this.nome,
        "valor": this.valor,
        "imagem": this.imagem
        
    }

     }
    }
    
let Moedas = new Moeda('Oncy', 'R$0,99', 'default.jpg')
console.log(Moedas.nome+" "+Moedas.valor)
console.log(Moedas.pegarInformacoes())

