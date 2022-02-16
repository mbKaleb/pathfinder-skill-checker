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
const skills = ['perception','acrobatics' ,'arcana', 'athletics', 'crafting', 'deception', 'diplomacy', 'intimidation', 'medicine', 'Nature', 'Occultism', 'performance', 'religion', 'society', 'stealth', 'survival', 'thievery', 'farming'];
const abilityMods = ['STR','DEX','CON','INT','WIS','CHA'];

const party = [];
let sheetID =0;

//renders




//table prototype
function generateTable(){
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  
  for (var i = 0; i < 1; i++){
    const row = document.createElement('tr')
    const cell1 = document.createElement('td');const dropdown = trainingDropdown();cell1.append(dropdown)
    const cell2 = document.createElement('td');const skillCell = document.createTextNode('skill');cell2.append(skillCell)
    const cell3 = document.createElement('td');const totalCell = document.createTextNode('Total');cell3.append(totalCell)
    const cell4 = document.createElement('td');const abilityCell = document.createTextNode('Ability');cell4.append(abilityCell)
    const cell5 = document.createElement('td');const profCell = document.createTextNode('Prof.');cell5.append(profCell)
    const cell6 = document.createElement('td');const itemCell = document.createTextNode('Item');cell6.append(itemCell)
    const cell7 = document.createElement('td');const tempCell = document.createTextNode('Temp');cell7.append(tempCell)



    row.append(cell1 ,cell2 ,cell3 ,cell4 ,cell5 ,cell6 ,cell7)
    console.log(row)
    tblBody.appendChild(row)
  }
  tbl.appendChild(tblBody)
  toolBox.appendChild(tbl)
  tbl.setAttribute("border", "2");
}

//Good Code Below Only

//renderer
function renderEmptySheet(){
  const characterDataObject = { ...characterObj};

  const characterSheet = document.createElement("div");characterSheet.className = "character-sheet"
  characterSheet.setAttribute("id", `${sheetID}`)
  const nameBox = document.createElement('div');nameBox.className = "name-box"
  const levelBox = document.createElement('div');levelBox.className = "level-box"
  const skillsList = document.createElement('ul');skillsList.className = 'skill-list'

  const editBttn = document.createElement('button');editBttn.className = 'edit-bttn'
  editBttn.addEventListener('click', function(e){
    callEditForm(this.parentElement)
    this.removeEventListener('click', arguments.callee,false);
  })

  // const perceptionBox = docuemnt.createElement('li');perceptionBox.calssName = 'perception-box'


  skills.forEach((skill) => {
    const liParent = document.createElement('li');liParent.className = `${skill} skill-list`;
      const skillLabel = document.createElement('div');skillLabel.className = `${skill} skill-label skilldiv`;skillLabel.textContent = `${skill}`
      const trainingLabel = document.createElement('div');trainingLabel.className = `${skill} training-label skilldiv`;trainingLabel.textContent = 'U'
      const skillTotalLabel = document.createElement('div');skillTotalLabel.className = `${skill} skill-total-label skilldiv`;skillTotalLabel.textContent = '35'
      const temporaryModLabel = document.createElement('input', type ="number");temporaryModLabel.className = `${skill} temporary-mod-label skilldiv`;temporaryModLabel.defaultValue = "temp"
      const skillRoll = document.createElement('div');skillRoll.className = `${skill} skill-roll skilldiv`;skillRoll.textContent = 'RollValue'
      liParent.append(skillLabel,trainingLabel,skillTotalLabel,temporaryModLabel,skillRoll);
      skillsList.append(liParent);
  })


    characterSheet.append(nameBox, levelBox, skillsList, editBttn);
    sheetContainer.append(characterSheet);
    party.push(characterDataObject);
  ++sheetID;
}
renderEmptySheet();


function editChar(){
  const editSheet = document.createElement('div');editSheet.className = "edit-sheet";
  const nameInput = document.createElement('input')
  const levelInput = document.createElement('input')
  const abilityModForm = document.createElement('form');abilityModForm.className = 'ability-mod-form';
  
    // const abilityApplyButton = document.createElement('input');abilityApplyButton.setAttribute('type', 'submit');
    
    const skillList = document.createElement('ul')
    
    //ability mods
    // const helper = document.createElement('input');helper.setAttribute('type', 'submit');helper.setAttribute('style', 'display: none')
    
    abilityMods.forEach((ability) => {
      const abilityModInput = document.createElement('input');abilityModInput.className = `ability-class ability-mod-input ${ability}`;abilityModInput.setAttribute('type', 'number');
      abilityModForm.append(abilityModInput);
  });
  
  abilityMods.forEach((ability) => {
    const abilityModLabel = document.createElement('label');abilityModLabel.className = `ability-class ability-mod-label ${ability}`;abilityModLabel.textContent = ability
    abilityModForm.append(abilityModLabel)
  });
  

  skills.forEach((skill) => {
    const skillsParent = document.createElement('li')
    const skillLabel = document.createElement('div');skillLabel.textContent = skill;skillLabel.className = "horg"
    const skillTotalDiv = document.createElement('input');skillTotalDiv.className = "horg";
    skillsParent.append(skillLabel, trainingDropdown(),skillTotalDiv )
    skillList.append(skillsParent)
  })

  editSheet.append(nameInput, levelInput, abilityModForm, skillList)
  sheetContainer.append(editSheet)
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
      
      if (this.value == 'Untrained') {objectTarget['skills'][skillTarget]['proficiency'] = 0}
      else if (this.value == 'Trained') {objectTarget['skills'][skillTarget]['proficiency'] = 2}
      else if (this.value == 'Expert') {objectTarget['skills'][skillTarget]['proficiency'] = 4}
      else if (this.value == 'Master') {objectTarget['skills'][skillTarget]['proficiency'] = 6}
      else if (this.value == 'Legendary') {objectTarget['skills'][skillTarget]['proficiency'] = 8}
      else {console.log('dropdown ERROR')}
      objectTarget.skills[skillTarget].mod()
      
      console.log('objectTarget.skills[skillTarget].mod(): ', objectTarget.skills[skillTarget].mod());
      
    })
    dropdown.append(untrained, trained, expert, master, legendary)
  return dropdown;
}



//listeners

monsterForm.addEventListener('submit', function(e){
  e.preventDefault();
  let monsterResult = helperMyInput.value
  searchHandler(monsterResult);
  monsterForm.reset();
})



//handlers

function searchHandler(monsterResult){
  monsterName.textContent = monsterResult;
  monsterDC.textContent = `Skill DC: ${monstersData[monsterResult].monsterDC}`;
}

function callEditForm(sheet){
  const editSheet = document.createElement('form');editSheet.className = "edit-sheet";
  const nameInput = document.createElement('input');nameInput.className = 'edit-name-input'
  const levelInput = document.createElement('input');
  const skillsList = document.createElement('ul');skillsList.className = 'skill-list'
  const applyBttn = document.createElement('button');applyBttn.className = 'edit-bttn';applyBttn.setAttribute('type','button')

  applyBttn.addEventListener('click',function(e){

    console.log(localChar)
    console.log(sheet.id)
  })


let localChar = {...party[sheet.id]}

  console.log(localChar['attributes'])

  const abilityModForm = document.createElement('form');abilityModForm.className = 'ability-mod-form';
    abilityMods.forEach((ability) => {
      const abilityModInput = document.createElement('input');abilityModInput.className = `${ability} ability ability-input`;
      abilityModForm.append(abilityModInput);
    })

    abilityMods.forEach((ability) => {
      const abilityModLabel = document.createElement('label');abilityModLabel.className = `${ability} ability ability-label`;abilityModLabel.textContent = `${ability}`
      abilityModForm.append(abilityModLabel)
    })

    abilityModForm.addEventListener('change', function (e) { 
      e.preventDefault()
      localChar['attributes']['strength'] = parseInt(abilityModForm.childNodes[0].value);
      localChar['attributes']['dexterity'] = parseInt(abilityModForm.childNodes[1].value);
      localChar['attributes']['constitution'] = parseInt(abilityModForm.childNodes[2].value);
      localChar['attributes']['intelligence'] = parseInt(abilityModForm.childNodes[3].value);
      localChar['attributes']['wisdom'] = parseInt(abilityModForm.childNodes[4].value);
      localChar['attributes']['charisma'] = parseInt(abilityModForm.childNodes[5].value);
    })

  skills.forEach((skill) => {
    let skillTotal = 0;
    const liParent = document.createElement('li');liParent.className = `${skill} skill-list`;
    const skillLabel = document.createElement('div');skillLabel.className = `${skill} skill-label skilldiv`;skillLabel.textContent = `${skill}`



    const skillTotalLabel = document.createElement('div');//skillTotalLabel.className = `${skill} skill-total-label skilldiv`;skillTotalLabel.textContent = '35'
    const temporaryModLabel = document.createElement('input', type ="number");//temporaryModLabel.className = `${skill} temporary-mod-label skilldiv`;temporaryModLabel.defaultValue = "temp"
    const skillRoll = document.createElement('div');//skillRoll.className = `${skill} skill-roll skilldiv`;skillRoll.textContent = 'RollValue'
    liParent.append(skillLabel, trainingDropdown(localChar, skill),skillTotalLabel,temporaryModLabel,skillRoll);
    skillsList.append(liParent);
  })







console.log(localChar)

  editSheet.addEventListener('submit', function(e){e.preventDefault;return})
  editSheet.append(nameInput, levelInput, abilityModForm, skillsList, applyBttn);
  sheetContainer.append(editSheet)
  
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