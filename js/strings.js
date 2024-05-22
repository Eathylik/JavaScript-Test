const maChaise = "I love coding ";
console.log(maChaise, typeof maChaise);

const withJs = "With JavaScript.";

let message = maChaise + withJs;
console.log(message, typeof message);
//I Love Coding With JavaScript. String
//concéténation permet de joindre deux varialbes typer string (chaine de charactère) enssemble 

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