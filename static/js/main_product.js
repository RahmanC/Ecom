function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
console.log("Bakugan");

// hambuger menu
        function toggleMenu() {
            var menuToggle = document.querySelector('.toggle');
            var navLink = document.querySelector('.nav-links');
            menuToggle.classList.toggle('active');
            navLink.classList.toggle('active');
        }
        // end of hambuger
