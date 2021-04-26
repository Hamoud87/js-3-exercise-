 const dropdown = document.querySelector("select");
const circlesContainer = document.querySelector(".circles");
dropdown.onchange =function (event) {
  const selectedValue = event.target.value;
  circlesContainer.innerHTML = "loading...";
  circlesContainer.innerHTML = "";
  for(let i = 1; i <= selectedValue; i++){
    let className = "";
    if(i % 2 === 0){
      className = "highlight";
    }
    circlesContainer.innerHTML +=`<a class="circle ${className}" href="details.html?id=${i}">${i}</a>` ;
   }
};

// task 4 
const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function checkIfButtonIsDisabled(){
   
    if(checkLength(firstName.value, 1) && checkLength(lastName.value, 4) && validateEmail(email.value)){
        button.disabled = false;
    }else {
        button.disabled = true;
    }
}
 firstName.addEventListener("keyup", checkIfButtonIsDisabled);
lastName.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled); 



function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

