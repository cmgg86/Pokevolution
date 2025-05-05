//INIT
localStorage.clear()

function getData() {
  var selectValue = document.getElementById("select").value
  localStorage.setItem("name",selectValue)
  localStorage.setItem("pokedex",JSON.stringify(pokedex))
  location.replace("pages/team.html")
}
