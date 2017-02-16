function myFunctionL() {
    document.getElementById("dropdownL").classList.toggle("show");
}
function myFunctionA() {
    document.getElementById("dropdownA").classList.toggle("show");
}
function leaveL() {
  var dropdownL = document.getElementsByClassName("dropdown-contentL");
    var i;
    for (i = 0; i < dropdownL.length; i++) {
      var openDropdown = dropdownL[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
}
function leaveA() {
  var dropdownA = document.getElementsByClassName("dropdown-contentA");
    var i;
    for (i = 0; i < dropdownA.length; i++) {
      var openDropdown = dropdownA[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
}
window.onclick = function(event) {

    var dropdownL = document.getElementsByClassName("dropdown-contentL");
    var i;
    for (i = 0; i < dropdownL.length; i++) {
      var openDropdown = dropdownL[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  window.onclick = function(event) {

    var dropdownA = document.getElementsByClassName("dropdown-contentA");
    var i;
    for (i = 0; i < dropdownA.length; i++) {
      var openDropdown = dropdownA[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }