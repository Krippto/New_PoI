let a = document.querySelector('li:nth-child(2)')
a.style.backgroundColor = "green"
document.querySelector('li:nth-child(3)').innerHTML = "<li hidden></li>"
document.querySelectorAll('li')[1].style.color = "green"
for(let i=0;i<document.querySelectorAll('li').length;i++){
    if(i%2 == 0){
        document.querySelectorAll('li')[i].style.backgroundColor = "green"
    }
}
//console.log(a[0].innerHTML)
