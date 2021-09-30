console.log(document.documentElement);
console.log(typeof this);
console.log(document.title);
console.log(document.body);
console.log(document.getElementById('content-section'))
document.getElementsByClassName('article-title');
console.log(document.querySelector('nav'));
console.log(document.querySelectorAll('span').length);

console.log(document.getElementsByClassName('article-title').length);
console.log(document.getElementById('article-title1').id);
document.getElementById('content-section').classList.add('section-element');
console.log(document.getElementById('content-section').classList.toString());
document.getElementById('content-section').classList.remove('section-element');
console.log(document.getElementById('content-section').classList.toString());
console.log(document.querySelector('footer').getAttribute('name'));
document.querySelector('nav span').setAttribute('class', 'navigation-span');
console.log(document.getElementsByClassName('navigation-span').length)
document.getElementsByClassName('navigation-span').item(0).removeAttribute('class');

console.log(document.querySelector('aside div').innerHTML);

console.log(document.getElementById('article-title1').outerHTML);

var element = document.getElementById('content-section');
console.log(element.parentNode);
console.log(element.children);
console.log(element.firstChild);
console.log(element.parentNode.nextSibling.nextSibling);
console.log(element.parentNode.previousSibling.previousSibling);

var elementToRemove = document.querySelector('aside div');
elementToRemove.parentNode.removeChild(elementToRemove);

var newElement = document.createElement('div');
var existingElement = document.querySelector('aside');
existingElement.appendChild(newElement);
newElement.innerHTML = 'D';

var exsistingElement = document.querySelector('aside div');
var newElement = document.createElement('div');
newElement.innerHTML = 'A';
exsistingElement.parentNode.insertBefore(newElement, exsistingElement);
var secondNewElement = document.createElement('div');
secondNewElement.innerHTML = 'L';
exsistingElement.parentNode.insertBefore(secondNewElement, exsistingElement.nextSibling );

var buttonElement = document.querySelector('#myButton');
buttonElement.onclick = function() {
    console.log('Clicking');
}
buttonElement.onclick = null;

var clickListener = function() {
    console.log("Click listener triggered");
};
buttonElement.addEventListener('click', clickListener);
buttonElement.removeEventListener('click', clickListener);

buttonElement.addEventListener('click', clickListener, true);
