var modal = document.getElementById("modal");
var btn = document.getElementById("changeInfosBtn");
var span = document.getElementsByClassName("close")[0];



btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function updateName(){
  let nameTxt = document.getElementById("userName").value;
  document.getElementById("nameOut").innerHTML = nameTxt;
}

function updateAge(){
  let ageTxt = document.getElementById("userAge").value;
  document.getElementById("ageOut").innerHTML = ageTxt;
}

function updateStreet(){
  let streetTxt = document.getElementById("userStreet").value;
  document.getElementById("streetOut").innerHTML = streetTxt;
}

function updateNeighborhood(){
  let neighborhoodTxt = document.getElementById("userNeighborhood").value;
  document.getElementById("neighborhoodOut").innerHTML = neighborhoodTxt;
}

function updateState(){
  let stateTxt = document.getElementById("userState").value;
  document.getElementById("stateOut").innerHTML = stateTxt;
}

function updateAbout(){
  let aboutTxt = document.getElementById("userAbout").value;
  document.getElementById("aboutOut").innerHTML = aboutTxt;
}