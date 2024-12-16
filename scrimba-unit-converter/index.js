let unitEl = document.getElementById("unit-input")
let convertBtn = document.getElementById("convert-btn")

let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let lengthEl = document.getElementById("length-el")

convertBtn.addEventListener("click",function(){
    lengthEl.textContent = `${unitEl.value} meters = ${(Number(unitEl.value) * 3.281).toFixed(3)} feet | ${unitEl.value} feet = ${(Number(unitEl.value) / 3.281).toFixed(3)} meters`

    volumeEl.textContent = `${unitEl.value} liters = ${(Number(unitEl.value) * 0.264).toFixed(3)} gallons | ${unitEl.value} gallons = ${(Number(unitEl.value) / 0.264).toFixed(3)} liters`

    massEl.textContent = `${unitEl.value} Kilos = ${(Number(unitEl.value) * 2.204).toFixed(3)} pounds | ${unitEl.value} pounds = ${(Number(unitEl.value) / 2.204).toFixed(3)} kilos`
})

function convert(num){
    
}

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound


