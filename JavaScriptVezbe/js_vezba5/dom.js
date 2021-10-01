let paragraf = document.getElementById('myParagraph');
let elementListe = document.getElementsByClassName('list-item');
let elementListe1 = document.querySelectorAll('#kontejnerListe1 .list-item');
let elementiListe2 = document.querySelectorAll("#kontejnerListe2 .list-item");
let kontejner1 = document.querySelector('#kontejnerListe1');
//kontejner1.id = "novi-id";
kontejner1.classList.remove('crveno');
kontejner1.classList.add('zeleno');

let nameAttribut = kontejner1.getAttribute('name');
kontejner1.setAttribute('name', 'tvojKontejner');
kontejner1.removeAttribute('name');

//kontejner1.innerHTML = '<p>Zdravo!</p>';

let prviElementListe = document.querySelector('#kontejnerListe1 ul li');
console.log(prviElementListe);
console.log(prviElementListe.parentNode);
console.log(prviElementListe.parentNode.parentNode);
console.log(prviElementListe.nextElementSibling);

let kontejner2 = document.querySelector('#kontejnerListe2');
let drugiListItem = kontejner2.querySelector('.list-item').nextElementSibling;
drugiListItem.parentNode.removeChild(drugiListItem);

let noviListItem = document.createElement('li');
noviListItem.innerHTML = 'Peti';
let lista = document.querySelector('#kontejnerListe2 ul');
lista.appendChild(noviListItem);

let josJedanListItem = document.createElement('li');
josJedanListItem.textContent = 'Novi';
noviListItem.parentNode.insertBefore(josJedanListItem, noviListItem);
//noviListItem.parentNode.insertBefore(josJedanListItem, noviListItem.nextElementSibling);
