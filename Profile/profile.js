
// back buttom
function goBack() {
	window.history.back();
}



/////////////////////////////////////////////
// stats hidden
document.getElementById("Stats").onclick = function() {
	document.getElementById("Stats").style.display = "none";
	document.getElementById("Stats1").style.display = "inline-block"; 
} 

document.getElementById("Stats1").onclick = function() {
	document.getElementById("Stats1").style.display = "none";
	document.getElementById("Stats").style.display = "inline-block"; 
}


/////////////////////////////////////////////
// About me hidden
document.getElementById("About").onclick = function() {
	document.getElementById("About").style.display = "none";
	document.getElementById("About1").style.display = "inline-block"; 
} 

document.getElementById("About1").onclick = function() {
	document.getElementById("About1").style.display = "none";
	document.getElementById("About").style.display = "inline-block"; 
}


/////////////////////////////////////////////
// Achievements hidden
document.getElementById("Achievements").onclick = function() {
	document.getElementById("Achievements").style.display = "none";
	document.getElementById("Achievements1").style.display = "inline-block"; 
} 

document.getElementById("Achievements1").onclick = function() {
	document.getElementById("Achievements1").style.display = "none";
	document.getElementById("Achievements").style.display = "inline-block"; 
}


/////////////////////////////////////////////
// Recent hidden
document.getElementById("Recent").onclick = function() {
	document.getElementById("Recent").style.display = "none";
	document.getElementById("Recent1").style.display = "inline-block"; 
} 

document.getElementById("Recent1").onclick = function() {
	document.getElementById("Recent1").style.display = "none";
	document.getElementById("Recent").style.display = "inline-block"; 
}



// edit profile dropdown bar
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}