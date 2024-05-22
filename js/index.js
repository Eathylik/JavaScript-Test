console.log("Hello World");

// le ; est pas nécessaire mais a mettre quand même par défaut
let nombre = 10;
console.log("La valeur de la variable nombre est : ", nombre);

// let foisDeux = nombre * 2
// console.log(foisDeux);

// LowerCamelCase (foisDeux)
// UpperCamalCase

let message = "une chaine de caractères.";
console.log(message);

// un booléen
let vraiFaux = true;
console.log(vraiFaux);

// tableau d'entiers
let tableauEntiers = [1, 2, 3, 4, 5]
console.log(tableauEntiers);

// Tableau cahine (string)
let tableauChaines = ["Pierre", "Paul", "Jacques"];
console.log(tableauChaines);

// tableau Melangé
let tableauMelange = ["toto", 12, "Truc"];
console.log(tableauMelange);

//let n;//déclaration
//n = 2;//affectation
//let n =2;//déclaration + affectation

let toto;
if (true) {
    toto = "toto"; //la variable toto n'est accessible que dans le bloc IF
}
console.log(toto);

// if (true) {
//     var tata = "tata"
// }
// console.log(tata);

//le typeof permet de voir le type des variables
console.log(typeof nombre); //number
console.log(typeof message); //string
console.log(typeof vraiFaux); //boolean
console.log(typeof tableauEntiers); //object
console.log(typeof tableauMelange); //object

//le = est l'operateur de l'affectation
let truc;
console.log(typeof truc); //undefined



console.log("Tout va bien.");