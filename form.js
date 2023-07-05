//localStorage.setItem("country","India")
let form = document.getElementById('form')
form.addEventListener('submit', store)

function store(e){
    e.preventDefault()
    const li = document.createElement('li')

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
        li.setAttribute('id',`${res.data._id}`)
        var edtBtn = `<button onclick="deleteUser("${res.data._id}")">Delete User</button>`
        var delBtn = `<button onclick=editUser("${res.data._id}")>Edit User</button>`
        li.appendChild(edtBtn)
        li.appendChild(delBtn)
    })
    .catch((err)=>{
        console.log(err)
    })
    li.innerText = `${name} - ${mail} - ${phone}`
    
    document.getElementById('toAdd').appendChild(li)
    //localStorage.setItem(obj.mail,JSON.stringify(obj))
}

function deleteUser(id){
    axios.delete(`https://crudcrud.com/api/360c744e7f504664a4d3c9f6dd902c3d/appointmentData/${id}`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    document.getElementById(id).parentElement.remove()
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/360c744e7f504664a4d3c9f6dd902c3d/appointmentData")
    .then((res)=>{
        for(let i = 0;i<res.data.length;i++){
            //const li = document.createElement('li')
            //var edtBtn = `<button onclick=deleteUser(${res.data[i]._id})>Delete User</button>`
            //var delBtn = `<button onclick=editUser(${res.data[i]._id})>Edit User</button>`
            const li = `<li id=${res.data[i]._id}> ${res.data[i].name} - ${res.data[i].mail} - ${res.data[i].phone}<button onclick="deleteUser('${res.data[i]._id}')">Delete User</button><button onclick="editUser('${res.data[i]._id}')">Edit User</button></li>`
            //li.appendChild(edtBtn)
            //li.appendChild(delBtn)
            document.getElementById('toAdd').innerHTML = document.getElementById('toAdd').innerHTML + li

        }
    })
    .catch((err)=>{
        console.log(err)
    })  
})

