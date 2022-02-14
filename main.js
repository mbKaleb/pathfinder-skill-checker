// Helper Grabbers
toolBox = document.querySelector("#tool-box")
sheetContainer = document.querySelector("#sheet-container")


//global var i hate these must change to function reference
const skills = ['acrobatics' ,'arcana', 'athletics', 'crafting', 'deception', 'diplomacy', 'intimidation', 'medicine', 'Nature', 'Occultism', 'performance', 'religion', 'society', 'stealth', 'survival', 'thievery', 'farming'];
const abilityMods = ['STR','DEX','CON','INT','WIS','CHA']



//renderers

  function makeEmptySheet(){//make empy character sheet in the sheet container
    let charsheet = document.createElement('div')
        charsheet.className = 'character-sheet'

    let level = document.createElement('h3')
    level.className = 'level'
    
    let name = document.createElement('h3')
    name.className = 'name'

    let perception = document.createElement('h3')
    perception.className = 'perception'
    

    const skillList = document.createElement('ul')
        skillList.className = 'skill-list'

      skills.forEach((skill) => {
        listObject = document.createElement('li')
        listObject.className = skill;
        skillList.className = 'list-child'
        listObject.class = skill
        skillList.appendChild(listObject)
      })

    const editBttn = document.createElement('button')
      editBttn.className = 'bttn edit-bttn'
      editBttn.textContent = "EDIT"
      editBttn.addEventListener('click', callEditForm)

      console.log('editBttn: ', editBttn, callEditForm);

    const deleteBttn = document.createElement('button')
      deleteBttn.className = 'bttn delete-bttn'
      deleteBttn.textContent = "DELETE"
      deleteBttn.addEventListener('click', function(e){ this.parentElement.remove()})

      console.log('editBttn: ', editBttn);


  charsheet.append(name, level, perception, skillList, editBttn, deleteBttn)
  sheetContainer.appendChild(charsheet)
}


function renderObjectForm(){
  const charsheet = document.createElement('form')
  charsheet.className = 'character-sheet'

  //this function will become the handler for our sheet maker?/rel obj builder
    charsheet.addEventListener('submit', function(e){
      e.preventDefault();
      const name = e.target.children[0].value;
      const level = e.target.children[1].value;
      const perception = e.target.children[2].value;
      const lista = e.target.children[3].children;

      let object = {
        name: name,
        level: level,
        perception: perception,
      }

      console.log('lista: ', lista);
      let i = 0
      for(let skill of lista){
        console.log(skill.class)
        object[skill.class] = e.target.children[3].children[i].value
        i++
        return object
      }
      
      });
      const name = document.createElement('input')
        name.className = 'name'


      const level = document.createElement('input')
        level.className = 'level'
        level.type = "number";

      const perception = document.createElement('input')
        perception.className = 'perception'
        perception.type = "number";

      const skillList = document.createElement('ul')
        skillList.className = 'skill-list'

      skills.forEach((skill) => {
        listObject = document.createElement('input')
        listObject.className = skill;
        skillList.className = 'skils'
        listObject.class = skill
        skillList.appendChild(listObject)
      })


  let submit = document.createElement('input')
      submit.setAttribute('type', 'submit')
      submit.setAttribute('value', 'Submit')


  charsheet.append(name, level, perception, skillList, submit)
  sheetContainer.appendChild(charsheet)
}
// renderObjectForm()





//forms


function callEditForm(){
  console.log(this.parentElement)
  helperNode = this.parentElement;
  editForm = document.createElement('div')
  editForm.className = 'form edit-form'

  let charsheet = document.createElement('div')

  const acceptBttn = document.createElement('button')
  acceptBttn.className = 'bttn accept-bttn'
  acceptBttn.textContent = "ACCEPT"
  acceptBttn.addEventListener('click', function(e){
    //complex handlers that takes an object and updates an empty parent sheet 
  })


  const deleteBttn = document.createElement('button')
  deleteBttn.className = 'bttn cancel-bttn'
  deleteBttn.textContent = "CANCEL"
  console.log(this.parentElement)
  deleteBttn.addEventListener('click', function(e){ this.parentElement.remove()})

  editForm.append(acceptBttn, deleteBttn)
  helperNode.appendChild(editForm)
}
//chiuldren of the form are level perception 



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

// generateTable();


//buttons

function createBtn(){
  
  const bttn = document.createElement("button");
  bttn.className = 'bttn like-bttn';
  bttn.textContent = 'NEW CHARACTER'
  bttn.addEventListener('click', makeEmptySheet)
  toolBox.appendChild(bttn)
}

//handlers 


//Initilizers
createBtn();



//Good Code Below Only




function eventHandler() {}//placeholder event handler for monster buttons

(function createMonsterButtons(){
  let monsterButtons = document.createElement('div');
  monsterButtons.className = "monster-bttns";
  (function weakBttn(){
    const bttn = document.createElement("button");
    bttn.className = 'bttn weak monster-bttn';
    bttn.textContent = 'Weak'
    bttn.addEventListener('click', eventHandler())
    monsterButtons.append(bttn);
  })();
  (function standardBttn(){
    const bttn = document.createElement("button");
    bttn.className = 'bttn standard monster-bttn';
    bttn.textContent = 'Standard'
    bttn.addEventListener('click', eventHandler())
    monsterButtons.append(bttn);
  })();
  (function eliteBttn(){
    const bttn = document.createElement("button");
    bttn.className = 'bttn elite monster-bttn';
    bttn.textContent = 'Elite'
    bttn.addEventListener('click', eventHandler())
    monsterButtons.append(bttn);
  })()
  toolBox.append(monsterButtons);
})();


function trainingDropdown(){

  const dropdown = document.createElement("select");dropdown.className = 'horg'

  const untrained = document.createElement("option")
    untrained.textContent = "U"
    const trained = document.createElement("option")
    trained.textContent = "T"
    const expert = document.createElement("option")
    expert.textContent = "E"
    const master = document.createElement("option")
    master.textContent = "M"
    const legendary = document.createElement("option")
    legendary.textContent = "L"

    dropdown.append(untrained, trained, expert, master, legendary)
  return dropdown;
}


function editChar(){
  const editSheet = document.createElement('div')
  const nameInput = document.createElement('input')
  const levelInput = document.createElement('input')
  const skillList = document.createElement('ul')
  const abilitySection = document.createElement('section');abilitySection.className = 'box'


  abilityMods.forEach((ability) => {
    const abilityParent = document.createElement('div')
    abilityInput = document.createElement("input");abilityInput.className = ability;abilityParent.appendChild(abilityInput)
    abilityLabel = document.createElement('h3');abilityLabel.textContent = ability;abilityParent.appendChild(abilityLabel)
    abilitySection.append(abilityParent)
  })
  console.log (abilitySection)

  skills.forEach((skill) => {
    const skillsParent = document.createElement('li')
    const skillLabel = document.createElement('div');skillLabel.textContent = skill;
    const skillTotalDiv = document.createElement('div');skillTotalDiv.
    skillLabel.className = "horg"
    skillsParent.append(skillLabel, trainingDropdown(), )
    skillList.append(skillsParent)
  })





  editSheet.append(nameInput, levelInput, skillList, )
  toolBox.append(editSheet)
}
editChar()

