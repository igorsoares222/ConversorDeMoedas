const botaoConverter = document.querySelector(".conversorBotao")
const euroMoeda = document.querySelector(".moeda-euro")
const libraMoeda = document.querySelector(".moeda-euro")
const bitcoinMoeda = document.querySelector(".moeda-euro")

const converterValor = async() => {
    const inputValor = document.querySelector(".valorInput").value;
    const moedaConvertidaBr = document.querySelector(".moeda-valor2");
    const moedaConvertidaEstrangeira = document.querySelector(".moeda-valor");

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    const dolarDia = data.USDBRL.high
    const euroDia = data.EURBRL.high
    const bitcoinDia = data.BTCBRL.high
    
    console.log(data)

    
    const libraDia = 4.2
    

    if(euroMoeda.value == "dolar"){
        moedaConvertidaEstrangeira.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor / dolarDia)
    }

    if(euroMoeda.value == "euro") {
        moedaConvertidaEstrangeira.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / euroDia)
    }

    if(euroMoeda.value == "libra") {
        moedaConvertidaEstrangeira.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency:"GBP"
        }).format(inputValor / libraDia)
    }

    if(euroMoeda.value == "bitcoin") {
        moedaConvertidaEstrangeira.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"BTC"
        }).format(inputValor / bitcoinDia)
    }

    moedaConvertidaBr.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)
}

function changeMoeda() {
    const moedaNome = document.getElementById("moeda-nome")
    const moedaImg = document.querySelector(".moeda-img")

    if(euroMoeda.value == "dolar") {
        moedaNome.innerHTML = "Dolar"
        moedaImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if(euroMoeda.value == "euro") {
     moedaNome.innerHTML = "Euro"
     moedaImg.src = "./assets/euro.png"
}

    if(euroMoeda.value == "libra") {
        moedaNome.innerHTML = "Libra"
        moedaImg.src = "./assets/libra 1.png"
    }

    if(euroMoeda.value == "bitcoin") {
        moedaNome.innerHTML = "Bitcoin"
        moedaImg.src = "./assets/bitcoin 1.png"
    }

converterValor()
}

euroMoeda.addEventListener("change", changeMoeda)
botaoConverter.addEventListener("click", converterValor)