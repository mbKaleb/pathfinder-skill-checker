NO INNER HTML
MVP Deliverables
[x] - See a clickable button to create a new sheet
[] - This sheet must be editable and contain all the relevant data
[] - Roll a dice for each stat
[] - check each roll against each 
[] - 
[]
[] - da468b89-2bf8-4e2b-a939-79c6e6ef25ce

[]- once thje button is clicked, create an empty sheet with referenceable variables


Mods ( level, prof[t,e l], Temp[equipment], Item)

Name
Level
Perception

Acrobatics 
Arcana
Athletics
Crafting
Deception
Diplomacy
Intimidation
Medicine
Nature
Occultism
Performance
Religion
Society
Stealth
Survival
Thievery
Farming


function Notes

{
createBtn()
Will create a button with a paramater for an Id,

This btn creates a new sheet and calls the edit form to fill data for the sheet.
}

IN form handler we need to take from inputs store them in an object and return the object, then update the card with the new object


const BaseURL = "https://api.pathfinder2.fr/v1/pf2/";

fetch(BaseURL, {
  method: "GET",
  withCredentials: true,
  headers: {
    "Authorization": "da468b89-2bf8-4e2b-a939-79c6e6ef25ce",
  }
})
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
  getData('https://api.pathfinder2.fr/v1/pf2');


function getData(url) {
  
  const response = await fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
        'Authorization': 'da468b89-2bf8-4e2b-a939-79c6e6ef25ce',
        'Content-Type' : 'application/json',
    },
     
  })
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data)
  })
}




function fetchApi() {
    fetch(`https://api.pathfinder2.fr/v1/pf2/`, {
        method:'GET',
        headers: {
            'Authorization': 'da468b89-2bf8-4e2b-a939-79c6e6ef25ce',
        }
    }).then()
  }



let mockObject = {
    name: 'yourmother'
    level: playerlevel
    perception: perceptionvalue

    skills: {
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
      "data": "attribute"
  }


        console.log('e.target.children: ', e.target.children[3].children[0]); //syntax for skills like ref
      console.log('object: ', object);


      skill value is calculated by if trained=(lvl+trainglvl) = prof
      relevant modifier is the mod from the abilities values
      prof+modifier+item+temp

      input only mod
      


      skill training total temp roll value

      Recall knowledge -> rolls all players skills and chekcs it against the creatres DC

      Roll- roll all

    perception is a special skill and functions just like a skill, most rolled thing in game

    value is calculated from wisdom mod 
    ol li
    