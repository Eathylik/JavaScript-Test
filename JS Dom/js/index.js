const titre = document.querySelector("#titre");
titre.innerHTML = "<p>JS</p>";
titre.style.color = "purple";
console.log(titre, typeof titre);

// const titreById = document.getElementById("titre")
// console.log(titreById);

const sections = document.querySelectorAll("section");//nodeListe noeud d'element html
console.log(sections[1]);//cible un element si l'élément se repete plusieurs fois

const pGreen = document.querySelectorAll(".green");
// pGreen[0].style.color = "green";
// pGreen[1].style.color = "green";

for(let i = 0; i < pGreen.length; i++){
    pGreen[i].style.color = "green"
}

console.log(pGreen);

// const tableauEntiers = [ 10, 11, 12, 13, 14];
// for (let i = 0; i <tableauEntiers.length; i++){
//     console.log(tableauEntiers[i]);
//synthaxe uni qui crée une boucle

const paragraphes = document.querySelectorAll("p");
paragraphes[3].classList.add("blueCss");//permet de rajouter une classe à son element
    