let val;
val=this;
val=window.document.all;
val=document.all[2];
val=document.all.length;
val=document.head;
val=document.body;
val=document.doctype;
val=document.domain;
val=document.URL;
val=document.characterSet;
val=document.contentType;

val=document.forms;
val=document.forms[0];
// val=document.forms[0].action;
// val=document.forms[0].method;
val=document.links;
val=document.links[0]
// val=document.links[0].href;
// val=document.links[0].className;
// val=document.links[0].classList

val=document.images;
val=document.scripts;
val=document.scripts[0];
val=document.scripts[0].src
val=document.scripts[0].getAttribute('src');

console.log(val);

links=document.links;
let linkArray=Array.from(links)

linkArray.forEach((link)=>{
    console.log(link.getAttribute('src'))
});

console.log(links)

//document getElementById
//document querySeclector
//document getElementsByClassName
//document getElementsByTagName
//document querySelectorAll

let va1;
va1=document.getElementById('li1');
va1.textContent="Typescript"
va1.style.color='green';
va1.style.fontWeight='bolder'
va1.style.display='block'
console.log(va1);


let val2=document.querySelector('li');
val2.style.backgroundColor='yellow';
val2.style.width="200px";
val2.style.textAlign='center';

let ul1=document.querySelector('ol li');
let ul2=document.querySelector('li:last-child');
ul1.style.color='black';
let ul3=document.querySelector('li:first-child');
ul3.style.color='green'
console.log(ul1);

let ul4=document.querySelector('ol li:nth-child(2');
ul4.textContent="HTML";
ul4.style.fontWeight='bolder'
console.log(ul4)

//getElementsByClassName
// let orderList=document.getElementsByClassName('ol')[0];
// console.log(orderList)
// //getElementsByTagName
// let tagName=document.getElementsByTagName('li');
// tagName[0].textContent='C';
// tagName[1].textContent='C++'
// tagName[2].textContent='Google';


let changing=document.querySelector('ol')
.getElementsByTagName('li');
let changingArray=Array.from(changing);
changingArray.forEach((item)=>{
    console.log(item);
})
console.log(changing)

//documentSelectorAll
let qquerySelectorAll=document.querySelectorAll('ol li');
console.log(qquerySelectorAll)


qquerySelectorAll.forEach(function(singquery){
    console.log(singquery)
    
})

let liODD=document.querySelectorAll('li:nth-child(even)');
liODD.forEach(function(item){
    item.style.backgroundColor="red"
 
})
let liEven=document.querySelectorAll('li:nth-child(odd');
liEven.forEach(function(item){
    item.style.backgroundColor="green"
})
console.log(liODD)
console.log(liEven);