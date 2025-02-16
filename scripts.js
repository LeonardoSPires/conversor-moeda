const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectToConvert = document.querySelector(".currency-select-to-convert");


function converValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value; //Pega o valor que foi digitado.
    const currencyValueConvert = document.querySelector(".currency-value-convert");
    const currencyValueConverted = document.querySelector(".currency-value-converted");

    convertButton.style.width ="1.1";

    const realDolar = 5.77;
    const realEuro = 5.98;
    const realLibra = 7.18;

    const dolarReal = 0.18;
    const dolarEuro = 1.05;
    const dolarLibra= 1.26

    const euroReal = 0.17;
    const euroDolar = 0.95;
    const euroLibra = 1.20;

    const libraReal = 0.14;
    const libraDolar = 0.79;
    const libraEuro = 0.83;

//Pega o valor do input-currency e coloca no currency-value-convert
    if (currencySelectToConvert.value == "real") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "dolar") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "euro") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "libra") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
//calculos
//real
    if (currencySelectToConvert.value == "real" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }if  (currencySelectToConvert.value == "real" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat
        ("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / realDolar)
    }if (currencySelectToConvert.value == "real" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / realEuro )
    }if (currencySelectToConvert.value == "real" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / realLibra )
    }
//dolar
    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }if  (currencySelectToConvert.value == "dolar" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat
        ("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / dolarReal)
    }if (currencySelectToConvert.value == "dolar" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / dolarEuro )
    }if (currencySelectToConvert.value == "dolar" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / dolarLibra )
    }
//euro
    if (currencySelectToConvert.value == "euro" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }if  (currencySelectToConvert.value == "euro" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat
        ("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / euroDolar)
    }if (currencySelectToConvert.value == "euro" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / euroReal )
    }if (currencySelectToConvert.value == "euro" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / euroLibra )
    }
//libra
    if (currencySelectToConvert.value == "libra" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }if  (currencySelectToConvert.value == "libra" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat
        ("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / libraDolar)
    }if (currencySelectToConvert.value == "libra" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / libraReal )
    }if (currencySelectToConvert.value == "libra" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / libraEuro )
    }

}

function changeCurrency() {
    const convertImg = document.querySelector(".convert-img")
    const convertCurrency = document.getElementById("convert-currency")
    const changeNameCurrency = document.getElementById("change-currency")
    const convertedImg = document.querySelector(".converted-img")
    const videoBackground = document.querySelector(".video-background")
    
//muda o nome e imgem da moeda.
    if (currencySelectToConvert.value == "dolar") {
        convertCurrency.innerHTML = "Dolar americano"
        convertImg.src = "./img/dolar.jpg"
    }
    if (currencySelectToConvert.value == "euro") {
        convertCurrency.innerHTML = "Euro"
        convertImg.src = "./img/euro.jpg"
    }
    if (currencySelectToConvert.value == "real") {
        convertCurrency.innerHTML = "Real"
        convertImg.src = "./img/real.jpg"
    }
    if (currencySelectToConvert.value == "libra") {
        convertCurrency.innerHTML = "Libra esterlina"
        convertImg.src = "./img/real.jpg"
    }

    if (currencySelect.value == "dolar") {
        changeNameCurrency.innerHTML = "Dolar americano"
        convertedImg.src = "./img/dolar.jpg"
        videoBackground.src="./video/videoDolar.mp4"
    }
    if (currencySelect.value == "euro") {
        changeNameCurrency.innerHTML = "Euro"
        convertedImg.src = "./img/euro.jpg"
        videoBackground.src="./video/videoEuro.mp4"
    }
    if (currencySelect.value == "real") {
        changeNameCurrency.innerHTML = "Real"
        convertedImg.src = "./img/real.jpg"
        videoBackground.src="./video/videoReal.mp4"
    }
    if (currencySelect.value == "libra") {
        changeNameCurrency.innerHTML = "Libra esterlina"
        convertedImg.src = "./img/libra.jpg"
        videoBackground.src="./video/videoLibra.mp4"
    }
    converValues()
}

currencySelectToConvert.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", converValues);