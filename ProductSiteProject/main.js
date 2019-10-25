$(document).ready(function() {

/************************
  HIDDEN STUFF
************************/

// Hidden Skatepack Section
  $(".skatePackSecText").hide();
  $(".box").hide();

// Waypoint to show hidden skatepacksec stuff
  $("#skatePackSec").waypoint(function(direction) {
    if (direction == "down") {
      $(".skatePackSecText").show();
      $(".box").show();
    }
  }, {offset: "40%"});

  // Waypoint to hide skatepacksec stuff
  $("#skatePackSec").waypoint(function(direction) {
    if (direction == "up") {
      $(".skatePackSecText").hide();
      $(".box").hide();
    }
  }, {offset: "80%"});

  // This function doesn't work for some reason
  function shakeBox() {
    document.getElementsByClassName("box").innerHTML = '<img src="box.png" class="animated shake"/>';
    console.log("box shook");
  }
});
