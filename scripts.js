const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select")

function converValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueConvert = document.querySelector(".currency-value-convert");
    const currencyValueConverted = document.querySelector(".currency-value-converted");

    console.log(currencySelect.value);
    const dolarToday = 5.77;
    const euroToday = 5.98;




    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

};

function changeCurrency() {
    const changeNameCurrency = document.getElementById("change-currency")
    const currencyImg = document.querySelector(".currency-img")
    

    if (currencySelect.value == "dolar") {
        changeNameCurrency.innerHTML = "Dolar americano"
        currencyImg.src = "./img/dolar.jpg"
    }
    if (currencySelect.value == "euro") {
        changeNameCurrency.innerHTML = "Euro"
        currencyImg.src = "./img/euro.jpg"
    }
    converValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", converValues);