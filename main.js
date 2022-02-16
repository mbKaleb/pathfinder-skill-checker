// Helper Grabbers
const header = document.querySelector("#headerDiv")
const sheetContainer = document.querySelector("#characterCardDiv")


const helperMyInput = document.getElementById('myInput')
const monsterForm = document.getElementById('monsterForm')
const searchBttn = document.querySelector('.search-button')

const monsterParent = document.querySelector('#monsterData')
const monsterName = document.querySelector('#monsterName')
const monsterDC = document.querySelector('#MonsterDC')


//Global variables
const skills = ['perception','acrobatics' ,'arcana', 'athletics', 'crafting', 'deception', 'diplomacy', 'intimidation', 'medicine', 'Nature', 'Occultism', 'performance', 'religion', 'society', 'stealth', 'survival', 'thievery'];
const abilityMods = ['STR','DEX','CON','INT','WIS','CHA'];

const partyArray = [];
let sheetId =0;

let activeMonster = {}
let manualDC = 0
//renders




//table prototype

// function generateTable(){
//   const tbl = document.createElement("table");
//   const tblBody = document.createElement("tbody");
  
//   for (var i = 0; i < 1; i++){
//     const row = document.createElement('tr')
//     const cell1 = document.createElement('td');const dropdown = trainingDropdown();cell1.append(dropdown)
//     const cell2 = document.createElement('td');const skillCell = document.createTextNode('skill');cell2.append(skillCell)
//     const cell3 = document.createElement('td');const totalCell = document.createTextNode('Total');cell3.append(totalCell)
//     const cell4 = document.createElement('td');const abilityCell = document.createTextNode('Ability');cell4.append(abilityCell)
//     const cell5 = document.createElement('td');const profCell = document.createTextNode('Prof.');cell5.append(profCell)
//     const cell6 = document.createElement('td');const itemCell = document.createTextNode('Item');cell6.append(itemCell)
//     const cell7 = document.createElement('td');const tempCell = document.createTextNode('Temp');cell7.append(tempCell)
//     row.append(cell1 ,cell2 ,cell3 ,cell4 ,cell5 ,cell6 ,cell7)
//     console.log(row)
//     tblBody.appendChild(row)
//   }
//   tbl.appendChild(tblBody)
//   toolBox.appendChild(tbl)
//   tbl.setAttribute("border", "2");
// }

//Good Code Below Only

//renderer
function renderEmptySheet(){
  const characterDataObject = { ...characterObj};


  const characterSheet = document.createElement("div");characterSheet.className = "character-sheet"
  characterSheet.setAttribute("id", `id${characterDataObject.id}`)


  const nameBox = document.createElement('div');nameBox.className = "name-box"
  const levelBox = document.createElement('div');levelBox.className = "level-box"
  const skillsList = document.createElement('ul');skillsList.className = 'skill-list'

  const editBttn = document.createElement('button');editBttn.className = 'edit-bttn'
  editBttn.addEventListener('click', function(e){
    callEditForm(this.parentElement)
    this.removeEventListener('click', arguments.callee,false);

  })

  skills.forEach((skill) => {
    const liParent = document.createElement('li');liParent.className = `${skill} skill-list`;
      const skillLabel = document.createElement('div');skillLabel.className = `${skill} skill-label skilldiv`;skillLabel.textContent = `${skill}`
      const trainingLabel = document.createElement('div');trainingLabel.className = `${skill} training-label skilldiv`;trainingLabel.textContent = 'U'
      const skillTotalLabel = document.createElement('div');skillTotalLabel.className = `${skill} skill-total-label skilldiv`;skillTotalLabel.textContent = '35'
      const temporaryModLabel = document.createElement('input', type ="number");temporaryModLabel.className = `${skill} temporary-mod-label skilldiv`;temporaryModLabel.defaultValue = "temp"
      const skillRoll = document.createElement('div');skillRoll.className = `${skill} skill-roll skilldiv`;skillRoll.textContent = '-'
      liParent.append(skillLabel,trainingLabel,skillTotalLabel,temporaryModLabel,skillRoll);
      skillsList.append(liParent);
  })

    characterSheet.append(nameBox, levelBox, skillsList, editBttn);
    sheetContainer.append(characterSheet);
    partyArray.push(characterDataObject);
  ++sheetId;
}
renderEmptySheet();







//trainging Dropdown

function trainingDropdown(objectTarget, skillTarget){
  const dropdown = document.createElement("select");dropdown.className = 'horg'

  const untrained = document.createElement("option");untrained.className = 'untrained'
    untrained.textContent = "Untrained"
    const trained = document.createElement("option")
    trained.textContent = "Trained"
    const expert = document.createElement("option")
    expert.textContent = "Expert"
    const master = document.createElement("option")
    master.textContent = "Master"
    const legendary = document.createElement("option")
    legendary.textContent = "Legendary"

    dropdown.addEventListener('change', function(){
      console.log(objectTarget['skills'][skillTarget.toLowerCase()])
      console.log(skillTarget)
      if (this.value == 'Untrained') {objectTarget['skills'][skillTarget.toLowerCase()]['proficiency'] = 0}
      else if (this.value == 'Trained') {objectTarget['skills'][skillTarget.toLowerCase()]['proficiency'] = 2}
      else if (this.value == 'Expert') {objectTarget['skills'][skillTarget.toLowerCase()]['proficiency'] = 4}
      else if (this.value == 'Master') {objectTarget['skills'][skillTarget.toLowerCase()]['proficiency'] = 6}
      else if (this.value == 'Legendary') {objectTarget['skills'][skillTarget.toLowerCase()]['proficiency'] = 8}
      else {console.log('dropdown ERROR')}
      // objectTarget.skills[skillTarget].mod()
      
      // console.log('objectTarget.skills[skillTarget].mod(): ', objectTarget.skills[skillTarget].mod());
      
    })
    dropdown.append(untrained, trained, expert, master, legendary)
  return dropdown;
}


//dice roller

function rollDice(numberOfDice, numberOfSides) {
  let diceResults = [];
  let dice = 0;
  while (dice < numberOfDice) {
      diceResults.push(Math.floor(Math.random()*numberOfSides)+1)
      dice++
  };
  return diceResults;
}


//Rollers

//recall knowledge
recallKnowledge = document.querySelector('#recallKnowledgeButton')
rollAllButton = document.querySelector('#rollAllButton')
rollPerception = document.querySelector('#rollPerceptionButton')

function clearRollFields(characterObj) {
  for (skill in characterObj.skills) {
    const rollField = document.querySelector(`div#id${characterObj.id} li.${skill.toLowerCase()} div.skill-roll`) // id change
    rollField.innerText = '-'
  }
}

recallKnowledge.addEventListener('click', () => {
    partyArray.forEach(characterObj => {
    clearRollFields(characterObj)
    activeMonster.monsterSkills.forEach(skill => {
      let skillRoll = 0
      let roll = 0
      let dc = activeMonster.monsterDC
      
      if (characterObj.skills[skill.toLowerCase()].proficiency) {
          roll = rollDice(1,20)[0];
          skillRoll = (characterObj.skills[skill.toLowerCase()].mod()[0] + characterObj.level + roll);
      }
      else {
          roll = rollDice(1,20)[0];
          skillRoll = (characterObj.skills[skill.toLowerCase()].mod()[0] + roll);
      }
      
      const rollField = document.querySelector(`div#id${characterObj.id} li.${skill.toLowerCase()} div.skill-roll`) // id change
      rollField.innerText = skillRoll
      
      const background = document.querySelector(`#id${characterObj.id} li.${skill.toLowerCase()}`)
      
      if ((roll === 20 && skillRoll >= dc) || skillRoll >= dc+10) {
          rollClass = 'critical-success'
      } else if (((roll === 20 && skillRoll > dc-10) || (roll === 1 && skillRoll >= dc+10)) || skillRoll >= dc) {
          rollClass = 'success'
      } else if (((roll === 20 && skillRoll <= dc-10) || (roll === 1 && skillRoll >= dc)) || skillRoll > dc-10) {
          rollClass = 'failure'
      } else {
          rollClass = 'critical-failure'
      }
      background.classList.remove('critical-success','success','failure','critical-failure')
      background.classList.add(rollClass)
    })
  })
})

//roll Perception
rollPerception.addEventListener('click', () => {
  partyArray.forEach(characterObj => {
    clearRollFields(characterObj)
    let roll = rollDice(1,20)[0];
    let skillRoll = (characterObj.skills['perception'].mod()[0] + characterObj.level + roll);
    let dc = manualDC
    
    const rollField = document.querySelector(`div#id${characterObj.id} li.perception div.skill-roll`) // id change
    rollField.innerText = skillRoll
    
    const background = document.querySelector(`#id${characterObj.id} li.perception`)
    
    if ((roll === 20 && skillRoll >= dc) || skillRoll >= dc+10) { 
      rollClass = 'critical-success'
    } else if (((roll === 20 && skillRoll > dc-10) || (roll === 1 && skillRoll >= dc+10)) || skillRoll >= dc) {
        rollClass = 'success'
    } else if (((roll === 20 && skillRoll <= dc-10) || (roll === 1 && skillRoll >= dc)) || skillRoll > dc-10) {
        rollClass = 'failure'
    } else {
        rollClass = 'critical-failure'
    }
      background.classList.remove('critical-success','success','failure','critical-failure')
      background.classList.add(rollClass)
  })
})

rollAllButton.addEventListener('click', () => {
  partyArray.forEach(characterObj => {
    clearRollFields(characterObj)
    for (skill in characterObj.skills) {
          let skillRoll = 0
          let roll = 0
          let dc = manualDC
          
          if (characterObj.skills[skill.toLowerCase()].proficiency) {
              roll = rollDice(1,20)[0];
              skillRoll = (characterObj.skills[skill.toLowerCase()].mod()[0] + characterObj.level + roll);
          }
          else {
              roll = rollDice(1,20)[0];
              skillRoll = (characterObj.skills[skill.toLowerCase()].mod()[0] + roll);
          }
          
          const rollField = document.querySelector(`div#id${characterObj.id} li.${skill.toLowerCase()} div.skill-roll`) // id change
          rollField.innerText = skillRoll
          
          const background = document.querySelector(`#id${characterObj.id} li.${skill.toLowerCase()}`)
          
          if ((roll === 20 && skillRoll >= dc) || skillRoll >= dc+10) { 
              rollClass = 'critical-success'
          } else if (((roll === 20 && skillRoll > dc-10) || (roll === 1 && skillRoll >= dc+10)) || skillRoll >= dc) {
              rollClass = 'success'
          } else if (((roll === 20 && skillRoll <= dc-10) || (roll === 1 && skillRoll >= dc)) || skillRoll > dc-10) {
              rollClass = 'failure'
          } else {
              rollClass = 'critical-failure'
          }
          background.classList.remove('critical-success','success','failure','critical-failure')
          background.classList.add(rollClass)
      }
  })
})

//rollAll

//handlers

monsterForm.addEventListener('submit', function(e){
  e.preventDefault();
  let monsterResult = helperMyInput.value
  searchHandler(monsterResult);
  monsterForm.reset();
})


function searchHandler(monsterResult){
  activeMonster = {...monstersData[monsterResult]}
  monsterName.textContent = monsterResult;
  monsterDC.textContent = `Skill DC: ${monstersData[monsterResult].monsterDC}`;
}


function callEditForm(sheet){

  /////
  const editSheet = document.createElement('form');editSheet.className = "sheet";
  const nameInput = document.createElement('input');nameInput.className = 'edit-name-input'
  const levelInput = document.createElement('input');levelInput.className = 'edit-name-input'
  const skillsList = document.createElement('ul');skillsList.className = 'skill-list'
  const applyBttn = document.createElement('button');applyBttn.className = 'edit-bttn';applyBttn.setAttribute('type','button')
  let localChar = {...partyArray[sheet.id.slice(2)]}
  /////
  
  //Name and level listeners
  nameInput.addEventListener('change', function(e) {
    e.preventDefault();localChar.name = nameInput.value});
  levelInput.addEventListener('change', function(e) {
    e.preventDefault();localChar.level = levelInput.value;});
  /////
    
  //Apply button
  applyBttn.addEventListener('click',function(e){
    

  console.log(localChar)})

  /////

  //Ability Mod form and labels
  const abilityModForm = document.createElement('form');abilityModForm.className = 'ability-mod-form';
    abilityMods.forEach((ability) => {
      const abilityModInput = document.createElement('input');abilityModInput.className = `${ability} ability ability-input`;
      abilityModForm.append(abilityModInput);
    })

    abilityMods.forEach((ability) => {
      const abilityModLabel = document.createElement('label');abilityModLabel.className = `${ability} ability ability-label`;abilityModLabel.textContent = `${ability}`
      abilityModForm.append(abilityModLabel)
    })
    abilityModForm.addEventListener('change', function (e) {e.preventDefault()
      localChar['attributes']['strength'] = parseInt(abilityModForm.childNodes[0].value);
      localChar['attributes']['dexterity'] = parseInt(abilityModForm.childNodes[1].value);
      localChar['attributes']['constitution'] = parseInt(abilityModForm.childNodes[2].value);
      localChar['attributes']['intelligence'] = parseInt(abilityModForm.childNodes[3].value);
      localChar['attributes']['wisdom'] = parseInt(abilityModForm.childNodes[4].value);
      localChar['attributes']['charisma'] = parseInt(abilityModForm.childNodes[5].value);

      for (skillKey in localChar.skills) {
        localChar.skills[skillKey].attributeMod = localChar.attributes[localChar.skills[skillKey].attribute];
    }})
  /////

  //Skils [Label] [Dropdown]
  skills.forEach((skill) => {
    
    const liParent = document.createElement('li');liParent.className = `${skill} skill-list`;
      const skillLabel = document.createElement('div');skillLabel.className = `${skill} skill-label skilldiv`;skillLabel.textContent = `${skill}`
      //[TRAINING DROPDOWN]
      const skillTotalLabel = document.createElement('div');skillTotalLabel.className = `${skill} skill-total-label skilldiv`;skillTotalLabel.textContent = '35'
    partyArray[sheet.id.slice(2)] = localChar
    liParent.append(skillLabel, trainingDropdown(localChar, skill),skillTotalLabel);//total = 
  skillsList.append(liParent);})

  /////appenders
  editSheet.addEventListener('submit', function(e){e.preventDefault;return})
  editSheet.append(nameInput, levelInput, abilityModForm, skillsList, applyBttn);
  sheetContainer.append(editSheet)
}


//temp mod handler

function temporaryModInputFun(objectTarget, skillTarget){
  const tempInput = document.createElement("input");tempInput.className = 'horg'
  tempInput.addEventListener('change', function(){
    let helper = tempInput.value
     objectTarget['skills'][skillTarget]['temporary'] = helper
  })
  return tempInput;
}


function eventHandler() {}//placeholder event handler for monster buttons
/*

    // helperNode = this.parentElement;
    // editForm = document.createElement('div')
    // editForm.className = 'form edit-form'
  
    // let charsheet = document.createElement('div')
  
    // const acceptBttn = document.createElement('button')
    // acceptBttn.className = 'bttn accept-bttn'
    // acceptBttn.textContent = "ACCEPT"
    // acceptBttn.addEventListener('click', function(e){
    //   //complex handlers that takes an object and updates an empty parent sheet 
    // })
    
  
    // const deleteBttn = document.createElement('button')
    // deleteBttn.className = 'bttn cancel-bttn'
    // deleteBttn.textContent = "CANCEL"
    // console.log(this.parentElement)
    // deleteBttn.addEventListener('click', function(e){ this.parentElement.remove()})
  
    // editForm.append(acceptBttn, deleteBttn)
    // helperNode.appendChild(editForm)
*/