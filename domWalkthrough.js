/*
console.dir(document);

// Gives the domain of the web page.
console.log(document.domain);
// Gives the URL of the web page.
console.log(document.URL); 

THE DOCUMENT ATTRIBUTE CAN ACCESS DIFFERENT ELEMENTS.

console.log(document.title);

console.log(document.doctype);

console.log(document.head);

console.log(document.body);

console.log(document.all);

console.log(document.all[10]);

document.all[10].textContent = "I just changed the header!";

Document Object Model can scan the tree for elements. 
console.log(document.forms);
console.log(document.links);
console.log(document.images);

GetElementById.//////////////////

console.log(document.getElementById('header-title'));

// Creation of an object variable using the document function.
let headerTitle = document.getElementById('header-title');

// 
headerTitle.textContent = "Im Changing the Header";
headerTitle.innerText = "I Am Changing It Again.";

headerTitle.style.color = 'hotpink'; 

*/

//////////////////////////////////////////
/////////////////////////GetElementByClassName///////////

// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// console.log(items[1]); 

// // Styling Property Attributes through the variable.

// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'pink';
// items[1].textContent = 'Alpha Kappa Alpha';
// items[1].style.color = 'green';

// items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'red';
// items[0].textContent = 'Oooop - Coleman Love';
// items[0].style.color = 'white';

// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'blue';
// items[2].textContent = 'Zee Phiiii - Zeta Phi Beta';
// items[2].style.color = 'white';

// This is a counter which loops all the way until 10.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);

// }

// for (let i = 0; i <=20; i +=2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -=2) {

//     console.log(i);

// }

// for (var i = 0; i < items.length; i++) {

//     items[i].style.backgroundColor = 'grey';
//     items[i].textContent = 'I Changed The List';
//     items[i].style.color = 'green';

// }

// 
// const myDiamonds = ['Snacky','Scary','Piggy','Pinchie','Lily','IttyBitty','Nibbles','Lanky','Kibbles'];

// for(let i = 0; i < myDiamonds.length; i++){

//     console.log(i, myDiamonds[i]);

// }

//////////////////////////////////////////////////////////////////////////////
///////////////GetElementByTagName

// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);

// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'crimson';
// li[1].style.color = 'white';

// // 
// for(var i = 0; i < li.length; i++){

//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent = 'Changed Text'; 

// }

//////////////////////////////////////////////////////////////////////////////
///////////// - Query Selector

// 
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px hotpink';
// 
var input = document.querySelector('input');
input.value = "Changed The Input Box Text";
// 
var submit = document.querySelector("input[type='submit']");
submit.value = "SEND"; 
// 
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
// 
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'coral';









