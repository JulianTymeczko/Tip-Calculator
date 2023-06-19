var numPeopleForm = document.getElementById("number-people-form")
var billForm = document.getElementById("bill-form")
var tipResult = document.getElementById("Tip-Result")
var totalResult = document.getElementById("Total-Result")
var bill = document.getElementById("bill")
var numberOfPeople = document.getElementById("numberOfPeople")
var fixedTipPercentage = document.getElementsByClassName("fixed-percentage")
var customTipPercentage = document.getElementById("custom-percentage")
var x = ""
var y = ""
var resetButton = document.getElementById("reset-Button")

var radioInput = document.querySelectorAll("input[type='radio']")

for (var i = 0; i < fixedTipPercentage.length; i++) {
    fixedTipPercentage[i].addEventListener("click", function () {
        x = this.textContent



        if (bill.value != "" && numberOfPeople.value != "" && parseInt(numberOfPeople.value) > 0 && parseFloat(bill.value) > 0) {
            y = ((parseFloat(bill.value) * (parseInt(x) / 100) / parseInt(numberOfPeople.value)).toString()).split(".")
            if (y[1] != undefined && y[1].length >= 2) {

                tipResult.textContent = `$${y[0]}.${y[1].slice(0, 2)}`
                totalResult.textContent = "$" + (parseFloat(tipResult.textContent.slice(1)) + parseFloat(bill.value) / parseInt(numberOfPeople.value)).toFixed(2)
            }
            else if (y[1] != undefined && y[1].length == 1) {

                tipResult.textContent = `$${y[0]}.${y[1]}0`
                totalResult.textContent = "$" + (parseFloat(tipResult.textContent.slice(1)) + parseFloat(bill.value) / parseInt(numberOfPeople.value)).toFixed(2)
            }
            else if (y[1] == undefined) {

                tipResult.textContent = `$${y[0]}.00`
                totalResult.textContent = "$" + (parseFloat(tipResult.textContent.slice(1)) + parseFloat(bill.value) / parseInt(numberOfPeople.value)).toFixed(2)
            }

        }

    })

}

bill.addEventListener("input", function () {


    if ((x != "" || customTipPercentage.value != "") && numberOfPeople.value != "" && bill.value != "" && parseInt(numberOfPeople.value) > 0 && parseFloat(bill.value) > 0 && parseInt(x) > 0) {
        y = ((parseFloat(bill.value) * (parseInt(x) / 100) / parseInt(numberOfPeople.value)).toString()).split(".")
        if (y[1] != undefined && y[1].length >= 2) {

            tipResult.textContent = `$${y[0]}.${y[1].slice(0, 2)}`
            totalResult.textContent = "$" + (parseFloat(tipResult.textContent.slice(1)) + parseFloat(bill.value) / parseInt(numberOfPeople.value)).toFixed(2)
        }
        else if (y[1] != undefined && y[1].length == 1) {

            tipResult.textContent = `$${y[0]}.${y[1]}0`
            totalResult.textContent = "$" + (parseFloat(tipResult.textContent.slice(1)) + parseFloat(bill.value) / parseInt(numberOfPeople.value)).toFixed(2)
        }
        else if (y[1] == undefined) {

            tipResult.textContent = `$${y[0]}.00`
            totalResult.textContent = "$" + (parseFloat(tipResult.textContent.slice(1)) + parseFloat(bill.value) / parseInt(numberOfPeople.value)).toFixed(2)
        }

    }

})

numberOfPeople.addEventListener("input", function () {


    if (x != "" && bill.value != "" && numberOfPeople.value != "" && parseInt(numberOfPeople.value) > 0 && parseFloat(bill.value) > 0 && parseInt(x) > 0) {
        y = ((parseFloat(bill.value) * (parseInt(x) / 100) / parseInt(numberOfPeople.value)).toString()).split(".")
        if (y[1] != undefined && y[1].length >= 2) {

            tipResult.textContent = `$${y[0]}.${y[1].slice(0, 2)}`
            totalResult.textContent = "$" + (parseFloat(tipResult.textContent.slice(1)) + parseFloat(bill.value) / parseInt(numberOfPeople.value)).toFixed(2)
        }
        else if (y[1] != undefined && y[1].length == 1) {

            tipResult.textContent = `$${y[0]}.${y[1]}0`
            totalResult.textContent = "$" + (parseFloat(tipResult.textContent.slice(1)) + parseFloat(bill.value) / parseInt(numberOfPeople.value)).toFixed(2)
        }
        else if (y[1] == undefined) {

            tipResult.textContent = `$${y[0]}.00`
            totalResult.textContent = "$" + (parseFloat(tipResult.textContent.slice(1)) + parseFloat(bill.value) / parseInt(numberOfPeople.value)).toFixed(2)
        }

    }

})
customTipPercentage.addEventListener("input", function () {

    if ((customTipPercentage.value).includes(".")) {
        return;
    }
    else if (!((customTipPercentage.value).includes("."))) {
        x = customTipPercentage.value
        for (var i = 0; i < radioInput.length; i++) {
            if (radioInput[i].checked) {
                radioInput[i].checked = false
            }
        }

        if (x != "" && bill.value != "" && numberOfPeople.value != "" && parseInt(numberOfPeople.value) > 0 && parseFloat(bill.value) > 0 && parseInt(x) > 0) {
            y = ((parseFloat(bill.value) * (parseInt(customTipPercentage.value) / 100) / parseInt(numberOfPeople.value)).toString()).split(".")
            if (y[1] != undefined && y[1].length >= 2) {

                tipResult.textContent = `$${y[0]}.${y[1].slice(0, 2)}`
                totalResult.textContent = "$" + (parseFloat(tipResult.textContent.slice(1)) + parseFloat(bill.value) / parseInt(numberOfPeople.value)).toFixed(2)
            }
            else if (y[1] != undefined && y[1].length == 1) {

                tipResult.textContent = `$${y[0]}.${y[1]}0`
                totalResult.textContent = "$" + (parseFloat(tipResult.textContent.slice(1)) + parseFloat(bill.value) / parseInt(numberOfPeople.value)).toFixed(2)
            }
            else if (y[1] == undefined) {

                tipResult.textContent = `$${y[0]}.00`
                totalResult.textContent = "$" + (parseFloat(tipResult.textContent.slice(1)) + parseFloat(bill.value) / parseInt(numberOfPeople.value)).toFixed(2)
            }

        }

    }
})
billForm.addEventListener("submit", function (event) {
    event.preventDefault()
})
numPeopleForm.addEventListener("submit", function (event) {
    event.preventDefault()
})
resetButton.addEventListener("click", function () {
    location.reload()
})


