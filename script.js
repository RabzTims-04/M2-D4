 const removeInput = function(){
     let input = document.getElementById('participantInput')
         input.value = ''
 }

 const resetValue = function(){
     let input = document.getElementById('teamnumber')
     input.value = 1
 }

const addNewParticipant = function(){
let ulListNames = document.getElementById('participants')
let inputNames = document.getElementById('participantInput')
let inputNamesValue = inputNames.value
if(inputNamesValue === ''){ 
        console.log('text field is empty, nothing to add in list')
    }
else{
    ulListNames.innerHTML += `<li class="listNames">${inputNamesValue}</li>`
     removeInput() 
    }                            
} 

// const numberOfTeams = function(){
//     let ulListTeams = document.getElementById('teams')
//     let inputTeams = document.getElementById('teamnumber')
//     let inputTeamsValue = inputTeams.value
//     for(let i=1; i<=inputTeamsValue; i++){
//         ulListTeams.innerHTML += `<li class="listTeams">Team ${i}</li>`
//     }
//     // resetValue()
// }

let teamValue = document.getElementById('teamnumber')
let teamsRow = document.getElementById('teams-row')
function createTeams(){
    for(let i=0; i<teamValue.value; i++){
        teamsRow.innerHTML += `<div class ="col-12 col-sm-6 col-lg-3 team">
        <h4>Team${i+1}</h4>
        <ul class="list-group">
        </ul>
        </div>`
    }
}

let participantList = document.getElementById('participants')

function assign(){
    let person = participantList.children[0]
    if(!person) return
    console.log(person);
    let teams = document.querySelectorAll('.team > ul')
    let random = Math.floor(Math.random() * teams.length)
    teams[random].appendChild(person)

}

