const maChaise = "I love coding ";
console.log(maChaise, typeof maChaise);
// console est un objet
// log est une méthode
//l'objet demande a une methode

//<---Concaténation--->

const withJs = "With JavaScript.";
let message = maChaise + withJs;
console.log(message, typeof message);
//I Love Coding With JavaScript. String
//concaténation permet de joindre deux varialbes typer string (chaine de charactère) enssemble 

const year = "2024";
message += " since " + year
console.log(message, typeof message);

const prenom = "toto";
const age = 10;
const message2 = "je m'appelle " + prenom + " et j'ai " + age + " ans.";
console.log(message2, typeof message2);

//ceci est un template string 
// les `` permet d'integrer directement les variables dans les chaines
const message3 = `Je m'appelle ${prenom} et j'ai ${age} ans.`;
console.log(message3, typeof message3);

//<---Sous Chaîne--->

// let text = "Hello World, Welcome to the universe";
// let result = text.indexOf("Welcome");
// indexOf est une méthode

const text = "How are you doing today ?";
const myArray = text.split(" ");
console.log(myArray, typeof myArray);
console.log(text.length);
console.log(text.split(" "));

const visit = "Visit Microsoft"
const visitReplace = visit.replace("Microsoft" , "W3Schools");
console.log(visitReplace);

console.log(visit.toUpperCase());