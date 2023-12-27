let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0

function add() {
    count += 1
    countEl.textContent = count
}

function subtract() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    total += count
    totalEl.textContent = "Total glasses today: " + total
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0
    total = 0
    totalEl.textContent = "Total glasses today: "
    countEl.textContent = 0
    saveEl.textContent = "Previous entries: "
}

