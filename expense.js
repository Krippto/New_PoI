let addExpense = document.getElementById("add")
//let editExpense = document.getElementById("edit")
//let delExpense = document.getElementById("del")
let amount = document.getElementById("amount")
let category = document.getElementById("category")
let desc = document.getElementById("desc")
let tracker = document.getElementById("expense-tracker")
let count = 0

function show(e){
    count++
    let element = document.createElement("li")
    element.innerHTML = `${amount.value}-${category.value}-${desc.value}`
    let editBtn = document.createElement("button")
    let delBtn = document.createElement("button")
    editBtn.textContent = "Edit Expense"
    delBtn.textContent = "Remove Expense"
    editBtn.setAttribute("id","edit"+count)
    element.appendChild(editBtn)
    delBtn.setAttribute("id","edit"+count)
    element.appendChild(delBtn)
    tracker.appendChild(element)
    let obj = {
        "amount":amount.value,
        "type":category.value,
        "description":desc.value
    }
    let objStr = JSON.stringify(obj)
    localStorage.setItem(count,objStr)

    //console.log()
}

function del(e){
    
}

addExpense.addEventListener("click", show)
//editExpense.addEventListener("click", edit)
delExpense.addEventListener("click", del)
