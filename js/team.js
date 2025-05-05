//INIT
localStorage.removeItem("team")
//GET POKEDEX
const pokedex=JSON.parse(localStorage.getItem("pokedex"))
//DISPLAY POKEDEX
const divElement=document.getElementById("div")

for(i=0;i<pokedex.length;i++){
    const figure=document.createElement("figure")
    figure.setAttribute("class","section-div-figure")

    const form=document.createElement("form")
    form.setAttribute("class","section-div-figure-form")

    const input=document.createElement("input")
    input.setAttribute("class","section-div-figure-form-input")
    input.setAttribute("type","checkbox")
    input.setAttribute("id",pokedex[i].id)
    input.setAttribute("onchange","getPokemon("+pokedex[i].id+")")

    const img=document.createElement("img")
    img.setAttribute("class","section-div-figure-img")
    img.setAttribute("src",pokedex[i].image)

    const figcaption=document.createElement("figcaption")
    figcaption.setAttribute("class","section-div-figure-figcaption")
    figcaption.innerHTML=pokedex[i].name

    form.appendChild(input)
    figure.appendChild(form)
    figure.appendChild(img)
    figure.appendChild(figcaption)
    divElement.appendChild(figure)
}

var team=[]
function getPokemon(id){
    const pokemon=pokedex[id]
    const inputElement=document.getElementById(id)
    if(inputElement.checked){
        team.push(pokemon)
        console.log(pokemon)
        if(team.length==5){
            localStorage.setItem("team",JSON.stringify(team))
            location.replace("fight.html")
        }
    }
    else{
        const index=team.indexOf(pokemon)
        team.splice(index, 1);
    }
}




