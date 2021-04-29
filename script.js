 const removeInput = function(){
     let input = document.getElementById('participantInput')
         input.value = ''
 }

 const resetValue = function(){
     let input = document.getElementById('teamnumber')
     input.value = 1
 }

 let user=[]

const addNewParticipant = function(){
let ulListNames = document.getElementById('participants')
let inputNames = document.getElementById('participantInput')
let inputNamesValue = inputNames.value
if(inputNamesValue === ''){ 
        console.log('text field is empty, nothing to add in list')
    }
else{
    ulListNames.innerHTML += `<li class="listNames">${inputNamesValue}</li>`
    for(let i=0; i<li.length; i++){
        user.push(inputNamesValue)
    }
   
     removeInput() 
    }                            
} 

const numberOfTeams = function(){
    let ulListTeams = document.getElementById('teams')
    let inputTeams = document.getElementById('teamnumber')
    let inputTeamsValue = inputTeams.value
    for(let i=1; i<=inputTeamsValue; i++){
        ulListTeams.innerHTML += `<li class="listTeams">Team ${i}</li>`
    }
    // resetValue()
}

const assign = function(){
    let assignedteams = document.getElementById('assignedteams')
    let inputTeams = document.getElementById('teamnumber')
    let inputTeamsValue = inputTeams.value 
    for(let i=1; i<=inputTeamsValue; i++){
        let div = document.createElement('div')
        div.id = "team" + [i]
        let ul = document.createElement('ul')
        ul.classList.add('ul-for-teams')
        assignedteams.appendChild(div)
        div.appendChild(ul)
        let li = document.createElement('li')
        li.innerText = "Team" + [i]
        ul.appendChild(li)

    }
}
let uls = document.getElementsByClassName("ul-for-teams");
let teamNames = document.getElementById('teamNames').children
let inputTeams = document.getElementById('teamnumber')
    let inputTeamsValue = inputTeams.value
const assignment = function(){
    let n=Math.floor(Math.random() * user.length )
    let x=Math.floor(Math.random( ) * inputTeamsValue)
    let team = document.getElementById(`team${x + 1}`)
    for(let i=0; i<1; i++){
        user.splice(n,1)
        let li = document.createElement('li')
        li.innerText = user[n]
        team.appendChild(li)
        teamNames[n].remove()

    }
}


// const assign = function(){
//     let participantNames=[]
//     let listNames = document.getElementsByClassName('listNames')
//     let ulAssign = document.getElementById('assignedteams')
//     let randomName
//     for(let i=0; i<listNames.length; i++){      
//         participantNames[i] = listNames[i].innerText
//         // listNames[0].remove()
//         // console.log(Name);           
//         let random = Math.floor(Math.random() * listNames.length)
//         randomName = participantNames[random]
//         console.log(randomName); 
//         listNames[random].remove()
//         for(let i=0; i<(listNames.length/numberOfTeams().length); i++){
//             let newTeam = document.createElement('ul')
//             for(let j=0; j<)
//             let teamList = document.createElement('li')
//         }
                 
//         // let Name = participantNames[random]        
//     }    


    
//     document.createElement=
//     ulAssign.innerHTML += `<li>${randomName}</li>` 
// }