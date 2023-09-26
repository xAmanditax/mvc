class Atrativos {
    nome
    foto
    latitude
    longitude
    descricao

    constructor(nome, latitude, longitude, descricao){
        this.nome = nome
        this.latitude = latitude
        this.longitude = longitude
        this.descricao = descricao
    }

    chegou(){
        console.log('Você chegou em um atrativo!')
    }


pegarInformacoes(){
    return{
        "nome": this.nome,
        "foto": this.foto,
        "latitude": this.latitude,
        "longitude": this.longitude,
        "descricao": this.descricao
    }

     }
    }
    
let Atrat1 = new Atrativos('Parque do Povo', '-22.123512944237596', ' -51.40246013678808', 'Maior área verde dentro da cidade')
let Atrat2 = new Atrativos('Matarazzo', '-22.1204809106017', '-51.379473232029554', 'Importante centro histórico e cultural')
console.log(Atrat1.nome+" "+Atrat1.descricao)
console.log(Atrat2.nome+" "+Atrat2.latitude+" "+Atrat2.longitude+" "+Atrat2.descricao)
console.log(Atrat1.pegarInformacoes())
console.log(Atrat2.pegarInformacoes())