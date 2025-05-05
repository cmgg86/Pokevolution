//INIT
localStorage.removeItem("team")
//GET POKEDEX
const pokedex=JSON.parse(localStorage.getItem("pokedex"))
//DISPLAY POKEDEX
const divElement=document.getElementById("div")

for(i=0;i<pokedex.length;i++){
    const figure=document.createElement("figure")
    figure.setAttribute("class","section-div-figure")

    const img=document.createElement("img")
    img.setAttribute("class","section-div-figure-img")
    img.setAttribute("alt",pokedex[i].name)
    img.setAttribute("src",pokedex[i].image)
    img.setAttribute('width',48)
    img.setAttribute('height',48)

    const figcaption=document.createElement("figcaption")
    figcaption.setAttribute("class","section-div-figure-figcaption")

    const form=document.createElement("form")
    form.setAttribute("class","section-div-figure-figcaption-form")

    const label=document.createElement("label")
     label.setAttribute("class","section-div-figure-figcaption-form-label")
    label.setAttribute("for",pokedex[i].id)
    label.innerHTML=pokedex[i].name

    const input=document.createElement("input")
    input.setAttribute("class","section-div-figure-figcaption-form-input")
    input.setAttribute("type","checkbox")
    input.setAttribute("id",pokedex[i].id)
    input.setAttribute("onchange","getPokemon("+pokedex[i].id+")")

    form.appendChild(label)
    form.appendChild(input)
    figcaption.appendChild(form)

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




