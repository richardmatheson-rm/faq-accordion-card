// Collapsible component (https://www.w3schools.com/howto/howto_js_collapsible.asp)
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      content.parentElement.style.height = "50px"; // Revert flexbox item container height to 50px
    } else {
      content.style.display = "block";
      content.parentElement.style.height = "100px"; // Convert flexbox item container height to 100px (collapsible expansion)
    }
  });
}
