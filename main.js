// Helper Grabbers
toolBox = document.querySelector("#tool-box")
sheetContainer = document.querySelector("#sheet-container")



//renders

    const skills = ['acrobatics' ,'arcana', 'athletics', 'crafting', 'deception', 'diplomacy', 'intimidation', 'medicine', 'Nature', 'Occultism', 'performance', 'religion', 'society', 'stealth', 'survival', 'thievery', 'farming'];



  function makeEmptySheet(){//make empy character sheet in the sheet container

    let charsheet = document.createElement('div')
        charsheet.className = 'character-sheet'

    let level = document.createElement('h3')
    
    let perception = document.createElement('h3')
    

    const skillList = document.createElement('ul')
        skillList.className = 'skill-list'

      skills.forEach((skill) => {
        listObject = document.createElement('li')
        skillList.className = 'list-child'
        listObject.class = skill
        skillList.appendChild(listObject)

      })

  charsheet.append(level, perception, skillList)
  sheetContainer.appendChild(charsheet)
}



//forms
function charMake(){}



//buttons

  function createBtn(){
  
    const bttn = document.createElement("button");
    bttn.className = 'like-bttn';
    bttn.textContent = 'NEW CHARACTER'
    bttn.addEventListener('click', makeEmptySheet)
      toolBox.appendChild(bttn, )
  }






//Initilizers
createBtn();

