// parentElement
console.log(document.getElementById('main').parentElement.parentElement)

//lastElementChild
console.log(document.body.lastElementChild)

//lastChild
console.log(document.head.lastChild)

//firstelementchild
console.log(document.body.firstElementChild)

//firstchild
console.log(document.body.firstChild)

//nextsibling
console.log(document.body.firstElementChild.nextSibling)

//nextelementsibling
console.log(document.body.firstElementChild.nextElementSibling)

//previoussibling
console.log(document.head.lastElementChild.previousSibling)

//previouselementsibling
console.log(document.head.lastElementChild.previousElementSibling)

//createelement
const para = document.createElement("p");
para.innerHTML = "This is a <b>paragraph</b>";
document.body.appendChild(para);      //appendchild

//setAttribute
console.log(document.body.firstElementChild.setAttribute("class","myFirstSetAttribute"))


