const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
if(id === null){
    location.href = "/";
}
const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad/" + id;
const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");


idContainer.innerHTML = id;
async function fetchNames(){
  try {
       const response = await fetch(url);
       const details = await response.json();
       console.log(details);
                detailContainer.innerHTML = `<h1>${details.name}</h1>   
                                 <div>Occupation: <b>${details.occupation[0]}</b></div>`;
  }catch(error){
      console.log(error);
      detailContainer.innerHTML = error;
  }
}
fetchNames(); 



