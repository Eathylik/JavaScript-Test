const tab = ["pierre", "paul", "jacques"]

console.log(tab, typeof tab);

console.log(tab[3]); // Undefined

console.log(tab.length);

//<---Fonction Push et Unshift--->
const fruits = ["Banane", "Orange", "Pomme", "Fraise"]

fruits.unshift("Peche")//rajoute une valeur au premier indice
console.log(fruits, typeof fruits);

fruits.push("Framboise")//rajoute une valeur au dernier indice
console.log(fruits);

fruits.pop()//pop supprime le dernier indice
console.log(fruits);

fruits.shift()//shift supprime le premier indice
console.log(fruits);

delete (fruits[0])//supprime la valeur ciblé
console.log(fruits);

const filles = ["Josiane", "Hugette"];

const tousLeMonde = filles.concat(fruits)//permet de joindre 2 tableau en 1 nouveau tableau
console.log(tousLeMonde);

console.log(fruits.toString());

const slicedTab = tousLeMonde.slice(3)//enleve plusieurs valeur d'un tableau
console.log(slicedTab);

tab.splice(1, 0, "guy");//rajoute des valeurs entre les unité de base mais peut également les supprimer
console.log(tab);

console.log("Tout va bien");