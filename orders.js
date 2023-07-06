let order = document.getElementById('order')
order.addEventListener('click',bill)

function bill(e){
    e.preventDefault()
    const dishName = document.getElementById('dish').value
    const dishPrice = document.getElementById('price').value
    const table = document.getElementById('tables').value
    axios.post("https://crudcrud.com/api/360c744e7f504664a4d3c9f6dd902c3d/Orders",{
        "table": table,
        "dish": dishName,
        "price": dishPrice,
    })
    .then((response)=>{
        const place = document.getElementById(response.data.table)
        const li = `<li class="list-group-item">${response.data.dish}-${response.data.price} <input type="button" value="Delete" id="${response.data._id}" onclick="deleteOrder('${response.data._id}')" class="btn btn-primary btn-sm"></li>`
        place.innerHTML = place.innerHTML + li
    })
    .catch((err)=>{
        console.log(err)
    })
}

function deleteOrder(id){
    const delOrder = document.getElementById(id)
    axios.delete(`https://crudcrud.com/api/360c744e7f504664a4d3c9f6dd902c3d/Orders/${id}`)
    .then((response)=>{
        delOrder.parentElement.remove()
    })
    .catch((err)=>{
        console.log(err)
    })

}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/360c744e7f504664a4d3c9f6dd902c3d/Orders")
    .then((response)=>{
        for(let i=0;i<response.data.length;i++){
            const place = document.getElementById(response.data[i].table)
            const li = `<li class="list-group-item">${response.data[i].dish}-${response.data[i].price} <input type="button" value="Delete" id="${response.data[i]._id}" onclick="deleteOrder('${response.data[i]._id}')" class="btn btn-danger btn-sm"></li>`
            place.innerHTML = place.innerHTML + li
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})