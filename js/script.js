var openForm = document.querySelector(".mail");
var popup = document.querySelector(".modal-login");
var closeForm = popup.querySelector(".close-btn");
var login = popup.querySelector("[name=user-name]");
var password = popup.querySelector("[name=user-password]");
var openMap = document.querySelector(".mapping");
var map = document.querySelector(".modal.map");
var closeMap = map.querySelector(".close-btn");
var storage = "";
var isStorageSupport = true;
var form = popup.querySelector("form");


try{
storage = localStorage.getItem("login");
}
catch {
  isStorageSupport = false;
}


openForm.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

closeForm.addEventListener("click", function(evt){
  evt. preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

openMap.addEventListener("click", function(evt){
  evt.preventDefault();
  map.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt){
  evt.preventDefault();
  map.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt){

  if(evt.keyCode === 27){
     evt.preventDefault();
     if(popup.classList.contains("modal-show")){
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
     } else {
       if(map. classList.contains("modal-show")){
         map.classList.remove("modal-show");
       }
     }
  }
});

form.addEventListener("submit", function(evt){
  if(!login.value || !password.value) {
  evt.preventDefault();
  popup.classList.add("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.remove("modal-error");
  } else {
    if(isStorageSupport){
      localStorage.setItem("login", login.value);
      localStorage.setItem("password", password.value);
    }
  }


})
