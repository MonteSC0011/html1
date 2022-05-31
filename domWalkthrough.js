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

var items = document.getElementsByClassName('list-group-item');

console.log(items);
console.log(items[1]); 

// Styling Property Attributes through the variable.

items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'pink';
items[1].textContent = 'Alpha Kappa Alpha';
items[1].style.color = 'green';

items[0].textContent = "Delta Sigma Theta"
items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'red';
items[0].textContent = 'Oooop - Coleman Love';
items[0].style.color = 'white';

items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'blue';
items[2].textContent = 'Zee Phi - Zeta Phi Beta';
items[2].style.color = 'white';

