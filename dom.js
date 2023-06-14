//console.dir(document)
console.log(document.URL);
console.log(document.title);
document.title = "My_Demo_DOM";
var change = document.getElementsByClassName('title')
console.log(change)
change[0].style.fontWeight = 'bold'
console.log(typeof document.getElementById('main-header'))
console.log(document.getElementsByTagName('li').textContents)