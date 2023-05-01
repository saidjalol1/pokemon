let elTemplate = document.querySelector(".list_temple").content;
let elList = document.querySelector(".list");

for( let pok of pokemons){
    const cloneTemplate = elTemplate.cloneNode(true);

    cloneTemplate.querySelector("#img").src=pok.img;
    cloneTemplate.querySelector(".name").textContent = pok.name,
    cloneTemplate.querySelector(".type").textContent = pok.type,

    elList.appendChild(cloneTemplate);
}
