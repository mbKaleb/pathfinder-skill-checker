

const BaseURL = "https://api.pathfinder2.fr/v1/pf2/";

fetch(BaseURL, {
  method: "GET",
  withCredentials: true,
  headers: {
    "Authorization": "da468b89-2bf8-4e2b-a939-79c6e6ef25ce",
    "Content-Type": "application/json"
  }
})
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });





  /*
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

  */