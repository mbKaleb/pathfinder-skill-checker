// Helper Grabbers
const header = document.querySelector("#headerDiv")
const sheetContainer = document.querySelector("#characterCardDiv")


const helperMyInput = document.getElementById('myInput')
const monsterForm = document.getElementById('monsterForm')
const searchBttn = document.querySelector('.search-button')

const monsterParent = document.querySelector('#monsterData')
const monsterName = document.querySelector('#monsterName')
const monsterDC = document.querySelector('#MonsterDC')

const addNewCharacter = document.getElementById('newCharacterButton').addEventListener('click',function(e){createNewCharacter()})
//Global variables
const skills = ['perception','acrobatics' ,'arcana', 'athletics', 'crafting', 'deception', 'diplomacy', 'intimidation', 'medicine', 'Nature', 'Occultism', 'performance', 'religion', 'society', 'stealth', 'survival', 'thievery'];

const abilityMods = ['STR','DEX','CON','INT','WIS','CHA'];
const attribturesArr = ['strength', 'dexterity',  'constitution', 'intelligence', 'wisdom', 'charisma']
const partyArray = [];
let sheetIdCounter =0;

let manualInput = document.querySelector('#manualInput')
let manualDC = parseInt(manualInput.value)



//Sheet Functions//----->



//Create New Character Function//----->
function createNewCharacter(){//DO NOT REFERENCE THE OBJECT BY ID 

  const localCharacterObject = { ...characterObj};
  localCharacterObject.id = sheetIdCounter;
  sheetIdCounter ++;
  partyArray.push(localCharacterObject)
  //Parents
  const newCharacterSheet = document.createElement("div");newCharacterSheet.className = "character-sheet new-sheet";
  newCharacterSheet.setAttribute("id", `id${localCharacterObject.id}`);
  skillsList = document.createElement('ul');skillsList.className = 'list-parent-parent'
  
  //Headers//----->
  const headers = document.createElement('header');

  const nameInput = document.createElement('input');nameInput.className = "div name-box";nameInput.textContent = `${localCharacterObject.name}`;nameInput.defaultValue = 'Enter name...'
  nameInput.addEventListener('submit', function(e){e.preventDefault()})
  nameInput.addEventListener('change', function(e) {
    e.preventDefault();
    localCharacterObject.name = nameInput.value});
    
    const LevelLabel = document.createElement('label');LevelLabel.className = "div level-label";LevelLabel.textContent = 'Level';
    const levelInput = document.createElement('input');levelInput.className = "div level-input";levelInput.textContent = `${localCharacterObject.level}`
    levelInput.addEventListener('change', function(e) {
      e.preventDefault();localCharacterObject.level = levelInput.value;});
      
      //Buttons//----->
  const applyBttn = document.createElement('button');applyBttn.className = 'bttn apply-bttn';
          applyBttn.addEventListener('click',function(e){
              (this.parentNode).remove()
              renderSheet(localCharacterObject)
      })
  //----->

  //Ability Mod Form Maker//----->
  const abilityModForm = document.createElement('form');abilityModForm.className = 'ability-mod-form';

      abilityMods.forEach((ability) => {
          const abilityModInput = document.createElement('input');abilityModInput.className = `${ability} ability ability-input`;abilityModInput.type = 'number';
          abilityModForm.append(abilityModInput);
      })

      abilityMods.forEach((ability) => {
          const abilityModLabel = document.createElement('label');abilityModLabel.className = `${ability} ability ability-label`;abilityModLabel.textContent = `${ability}`
          abilityModForm.append(abilityModLabel)
      })
      //Ability Mod Form//----->
      abilityModForm.addEventListener('change', function (e) {e.preventDefault();
          localCharacterObject['attributes']['strength'] = parseInt(abilityModForm.childNodes[0].value);
          localCharacterObject['attributes']['dexterity'] = parseInt(abilityModForm.childNodes[1].value);
          localCharacterObject['attributes']['constitution'] = parseInt(abilityModForm.childNodes[2].value);
          localCharacterObject['attributes']['intelligence'] = parseInt(abilityModForm.childNodes[3].value);
          localCharacterObject['attributes']['wisdom'] = parseInt(abilityModForm.childNodes[4].value);
          localCharacterObject['attributes']['charisma'] = parseInt(abilityModForm.childNodes[5].value);
          for (skillKey in localCharacterObject.skills) {
              localCharacterObject.skills[skillKey].attributeMod = localCharacterObject.attributes[localCharacterObject.skills[skillKey].attribute];
          }})
      //----->
  //----->
      //Skills List with dropdown and active total//----->
    skills.forEach((skill) => {
      const liParent = document.createElement('li');liParent.className = `${skill} skill-list list-parent`;
      const skillLabel = document.createElement('label');skillLabel.className = `${skill} skill-label skilldiv`;skillLabel.textContent = `${skill}`
        // const skillTotalLabel = document.createElement('div');skillTotalLabel.className = `${skill} skill-total-label skilldiv`;skillTotalLabel.textContent = 'PLACEHOLDER' THIS WILL NEED AN EVENT LISTENER LATER
        // partyArray[localCharacterObject.id.slice(2)] = localChar           ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        console.log(this.callee)
        liParent.append(skillLabel, trainingDropdown(localCharacterObject, skill));
      skillsList.append(liParent);
    })
      //Appenders//----->
      headers.append(nameInput, LevelLabel, levelInput)
      newCharacterSheet.append(headers, abilityModForm, skillsList, applyBttn)
      sheetContainer.append(newCharacterSheet)
}
//----->


//Render Character Sheet//----->

function renderSheet(characterObject){

  const characterSheet = document.createElement("div");characterSheet.className = "character-sheet sheet";
  characterSheet.setAttribute("id", `id${characterObject.id}`);
      const headers = document.createElement('header');headers.className = 'sheet-headers'
      const skillsList = document.createElement('ul');skillsList.className = 'list-parent-parent'

  //Headers//----->
    const nameBox = document.createElement('div');nameBox.className = "name-box"; nameBox.textContent = `${characterObject.name}`
    const LevelLabel = document.createElement('label');LevelLabel.className = "level-label";LevelLabel.textContent = 'Level';
    const levelBox = document.createElement('label');levelBox.className = "level-box"; levelBox.textContent = `${characterObject.level}`

    const editBttn = document.createElement('button');editBttn.className = 'bttn edit-bttn sheet-bttn';editBttn.value = 'EDIT'
      editBttn.addEventListener('click', function(){

          const thisSheet = this.parentElement.parentNode;
          thisSheet.remove();
          editSheet(characterObject, thisSheet); //need to target parent sheet and the object to edit ///////////////////////////////////////////////////////////////////////////////////////
      })

    const rollBttn = document.createElement('button');rollBttn.className = 'bttn roll-bttn sheet-bttn';rollBttn.textContent = 'ROLL'
      rollBttn.addEventListener('click',function(){
          //rollCharacter()
      })
  //----->

  //Skills List Maker//----->
  let counter = 0;
  skills.forEach((skill) => {
    const listParent = document.createElement('li');listParent.className = `${skill} skill-list list-parent`;
      if (counter % 2 == 1){listParent.classList.add('odd')} else {listParent.classList.add('even')}; // alterate colors for style
    const skillLabel = document.createElement('label');skillLabel.className = `${skill} skill-list list-child skill-label`;skillLabel.textContent = `${skill}`
    const trainingLabel = document.createElement('label');trainingLabel.className = `${skill} skill-list list-child training-label`;trainingLabel.textContent = trainingHandler(characterObject, skill);
    const skillTotal = document.createElement('label');skillTotal.className = `${skill} skill-list list-child total-label`;skillTotal.textContent = skillModHandler(characterObject, skill);
  //   const tempInput = document.createElement('input');tempInput.type = 'number';tempInput.className = `${skill} temporary-mod-label skilldiv`;tempInput.defaultValue = "0";
      // tempInput.addEventListener('change', function(e){
  //       tempInputHandler(characterObject, skill, tempInput)
    const rollField = document.createElement('label');rollField.className = 'roll-field';rollField.textContent = '-'
  listParent.append(skillLabel,trainingLabel,skillTotal,rollField)
  skillsList.append(listParent)
  });
  //----->


  //Appenders//----->
  headers.append(nameBox, LevelLabel, editBttn, levelBox, rollBttn)
  characterSheet.append(headers,skillsList)

  sheetContainer.append(characterSheet)
}
//----->




//Edit Character------------------------------------>
function editSheet(characterObjectTarget, sheetTarget){
  

  //Parents
  const editSheetForm = document.createElement("form");editSheetForm.className = "character-sheet new-sheet";
  editSheetForm.setAttribute("id", `id${characterObjectTarget.id}`);
  //Headers//----->
  const headers = document.createElement('header');

  //Buttons//----->
  const nameInput = document.createElement('input');nameInput.className = "div name-box";nameInput.textContent = `${characterObjectTarget.name}`;nameInput.value = `${characterObjectTarget.name}`;
      nameInput.addEventListener('change', function(e) {
          e.preventDefault();localChar.name = nameInput.value});
          
          
  const LevelLabel = document.createElement('label');LevelLabel.className = "div level-label";LevelLabel.textContent = 'Level';
  const levelInput = document.createElement('input');levelInput.className = "div level-input";levelInput.textContent = `${characterObjectTarget.level}`;nameInput.defaultValue = `${characterObjectTarget.level}`;
      levelInput.addEventListener('change', function(e) {
          e.preventDefault();localChar.level = levelInput.value;});
      
  const applyBttn = document.createElement('button');applyBttn.className = 'bttn edit-bttn';applyBttn.textContent = 'Apply'
          applyBttn.addEventListener('click',function(e){
              this.parentElement.remove()
              // sheetTarget.remove()
              renderSheet(characterObjectTarget)
            })
  //----->

  //Ability Mod Form Maker//----->
  const abilityModForm = document.createElement('form');abilityModForm.className = 'ability-mod-form';
      attribturesArr.forEach((ability) => {
          const abilityModInput = document.createElement('input');abilityModInput.className = `${ability} ability ability-input`;abilityModInput.value = `${characterObjectTarget['attributes'][ability]}`;
          abilityModForm.append(abilityModInput);
      })
      abilityMods.forEach((ability) => {
          const abilityModLabel = document.createElement('label');abilityModLabel.className = `${ability} ability ability-label`;abilityModLabel.textContent = `${ability}`
          abilityModForm.append(abilityModLabel)
      })
      //Ability Mod Form//----->
      abilityModForm.addEventListener('change', function (e) {e.preventDefault();
        characterObjectTarget['attributes']['strength'] = parseInt(abilityModForm.childNodes[0].value);
        characterObjectTarget['attributes']['dexterity'] = parseInt(abilityModForm.childNodes[1].value);
        characterObjectTarget['attributes']['constitution'] = parseInt(abilityModForm.childNodes[2].value);
        characterObjectTarget['attributes']['intelligence'] = parseInt(abilityModForm.childNodes[3].value);
        characterObjectTarget['attributes']['wisdom'] = parseInt(abilityModForm.childNodes[4].value);
        characterObjectTarget['attributes']['charisma'] = parseInt(abilityModForm.childNodes[5].value);
          for (skillKey in characterObjectTarget.skills) {
            characterObjectTarget.skills[skillKey].attributeMod = characterObjectTarget.attributes[characterObjectTarget.skills[skillKey].attribute];
          }})
      //----->
  //----->
          console.log(sheetTarget)
      //Skills List with dropdown and active total//----->
      counter = 0 ;
      skills.forEach((skill) => {
        const listParent = document.createElement('li');listParent.className = `${skill} skill-list`;
        if (counter % 2 ==1){ listParent.classList.add('even')} else {listParent.classList.add('odd')}
      skillsList.append(listParent);
    })

      //Appenders//----->
      headers.append(nameInput, LevelLabel, levelInput)
      editSheetForm.append(headers, abilityModForm, skillsList, applyBttn)
      sheetContainer.append(editSheetForm)
}


//----->



//Training Dropdown//----->
function trainingDropdown(objectTarget, skillTarget){
  // console.log('ran')
  const dropdown = document.createElement("select");dropdown.className = 'skilldiv'

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
      } else if (((roll === 20 && skillRoll <= dc-10) || (roll === 1 && skillRoll >= dc)) || (roll != 1 && skillRoll > dc-10)) {
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
    } else if (((roll === 20 && skillRoll <= dc-10) || (roll === 1 && skillRoll >= dc)) || (roll != 1 && skillRoll > dc-10)) {
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
          } else if (((roll === 20 && skillRoll <= dc-10) || (roll === 1 && skillRoll >= dc)) || (roll != 1 && skillRoll > dc-10)) {
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

manualInput.addEventListener('change', event => manualDC = parseInt(event.target.value))

//Monster Search Form//----->
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
//----->


//RENDER SHEET HANDLERS//----->
function skillModHandler(characterObject, skill){
  if (characterObject.skills[skill.toLowerCase()].proficiency) {
    skillRoll = (characterObj.skills[skill.toLowerCase()].mod()[0]);
    console.log(skillRoll)
    return parseInt(`${characterObject.skills[skill.toLowerCase()].mod()[0] + characterObj.level}`)
}
else {
    return parseInt(`${characterObject.skills[skill.toLowerCase()].mod()[0]}`)
}}

function trainingHandler(objectTarget, skillTarget){ //needs work
  const targetHelper = objectTarget['skills'][skillTarget.toLowerCase()]['proficiency'];
  if (targetHelper == 0){return 'U'}
  else if(targetHelper == 0){return 'U'}
  else if(targetHelper == 2){return 'T'}
  else if(targetHelper == 4){return 'E'}
  else if(targetHelper == 6){return 'M'}
  else if(targetHelper == 8){return 'L'}
}

function tempInputHandler(objectTarget, skillTarget, inputTarget){
  // let number = parseInt(inputTarget.value)

  (objectTarget['skills'][skillTarget.toLowerCase()]['temporary']) = inputTarget.value;
}
//----->



//temp mod handler
function temporaryModInputFun(objectTarget, skillTarget){
  const tempInput = document.createElement("input");tempInput.className = 'horg'
  tempInput.addEventListener('change', function(){
    let helper = tempInput.value
    objectTarget['skills'][skillTarget]['temporary'] = helper
  })
  return tempInput;
}