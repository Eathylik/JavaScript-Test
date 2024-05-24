function createSection () {
    
    const newSection = document.createElement("section");
    console.log(newSection);
    
    const body = document.querySelector("body");
    body.appendChild(newSection);
    
    // H2
    const newH2 = document.createElement("h2")
    newH2.textContent = "Section 3";
    newSection.appendChild(newH2);
    
    // P
    const newP = document.createElement("p");
    newP.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus numquam totam oditaspernatur cupiditate veritatis? Labore, reprehenderit voluptatum neque ducimus, nisi nobis dolore nulla numquam voluptatibus quisquam alias quam sapiente?"
    newSection.appendChild(newP);
}
createSection();

