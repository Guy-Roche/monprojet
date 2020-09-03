/*var element= document.getElementsByTagName('li');
for(var i = 0; i < element.length; i++)
{
    console.log(element[i].textContent+';');

    if (i<4)

    {
        element[i].style.backgroundColor = 'green';
        element[i].style.fontWeight = 'bol';
        element[i].textContent='js c\'est la pratique hin';
    }
    else {
        element[i].style.backgroundColor = 'yellow';
        element[i].style.fontSize='18';
        element[i].textContent='Js c\'est zoo';

    }
}*/

/*
// mettons l'élément header de notre page dans une variable afin de mieux le manipuler
var variablePourHeader = document.querySelector('#main-header');

// Changeons le sytle (les bourdures) de notre élément header par le biais de la variable qu'on a créé/
variablePourHeader.style.borderBottom = 'solid 10px #cac';

// on stocke l'élément input de notre page dans une variable comme ce qu'on a fait avec l'élément header
var elemInput = document.querySelector('input');
// on modifie ce qu'il contient par défaut.
elemInput.value = 'Jésus est puissant';

// on stocke l'élément hmtl que représente le dernier élément de la liste que nous avons (confère la notion "last-child")
var lastItem = document.querySelector('.list-group-item:last-child');
// on en modifie la couleur
lastItem.style.color = 'blue';

// changeons la couleur du deuxième élément de la liste
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

var div =document.getElementsByTagName('div');
for(var i = 0; i < div.length; i++)
{
    div[i].style.border='1px dashed red';
}

var elemt =document.getElementsByTagName('li');

for(var i = 0; i < elemt.length; i++)
{
   if ((i%2)==0)
   {
       elemt[i].style.fontStyle='italic';
       elemt[i].style.fontSize='14px';
   }
}
*/
var elemListe =document.querySelector('#items');

//var nDiv=document.createElement('div');

console.log(elemListe.parentNode);

elemListe.parentNode.style.backgroundColor = '#64f5f4';
console.log(elemListe.parentNode.parentNode.parentNode);

elemListe.parentElement.style.backgroundColor = '#f4f4f4';
console.log(elemListe.parentElement.parentElement.parentElement);
console.log(elemListe.childNodes);
console.log(elemListe.children);

//affficher le 2ème élément de la liste
console.log(elemListe.children[1]);
//changer la couleur de fond du 2ème élément
elemListe.children[1].style.backgroundColor = 'yellow';