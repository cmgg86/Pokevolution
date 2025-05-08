const name=localStorage.getItem("name")
const team=JSON.parse(localStorage.getItem("team"))
console.log(name)
console.log(team)

var opposingTeam=[]
if(name=="Red"){
    opposingTeam=blueTeam
}
else if(name=="Green"){
    opposingTeam=redTeam
}
else{
    opposingTeam=greenTeam
}

console.log(opposingTeam)
