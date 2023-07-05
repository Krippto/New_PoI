//localStorage.setItem("country","India")
let form = document.getElementById('form')
form.addEventListener('submit', store)

function store(e){
    e.preventDefault()
    const li = document.createElement('li')
    const edtBtn = document.createElement('button')
    const delBtn = document.createElement('button')
    edtBtn.innerText = "Edit user"
    delBtn.innerText = "Delete user"

    let name = e.target.name.value  //document.getElementById('name').value
    let mail = e.target.email.value   //document.getElementById('email').value
    let phone = e.target.phone.value   //document.getElementById('phone').value
    let obj = {
        name,
        mail,
        phone
    }
    //console.log(name, mail, phone)
    axios.post("https://crudcrud.com/api/360c744e7f504664a4d3c9f6dd902c3d/appointmentData",obj)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    li.innerText = `${name} - ${mail} - ${phone}`
    li.appendChild(edtBtn)
    li.appendChild(delBtn)
    document.getElementById('toAdd').appendChild(li)
    //localStorage.setItem(obj.mail,JSON.stringify(obj))
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/360c744e7f504664a4d3c9f6dd902c3d/appointmentData")
    .then((res)=>{
        for(let i = 0;i<res.data.length;i++){
            const li = document.createElement('li')
            const edtBtn = document.createElement('button')
            const delBtn = document.createElement('button')
            edtBtn.innerText = "Edit user"
            delBtn.innerText = "Delete user"
            li.innerText = `${res.data[i].name} - ${res.data[i].mail} - ${res.data[i].phone}`
            li.appendChild(edtBtn)
            li.appendChild(delBtn)
            document.getElementById('toAdd').appendChild(li)
        }
    })
    .catch((err)=>{
        console.log(err)
    })  
})

