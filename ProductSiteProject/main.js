$(document).ready(function() {

/************************
  HIDDEN STUFF
************************/

// Hidden Skatepack Section
  $(".skatePackSecText").hide();
  $(".insideGallery").hide();
  $("#insideSecTitle").hide();
  $(".box").hide();

  $(".wheelsPage").hide();
  $(".trucksPage").hide();
  $(".waxPage").hide();
  $(".finalPage").hide();

  // checkOut pages Navigation
  $(".toDecks").click(function() {
    $(".wheelsPage").hide();
    $(".trucksPage").hide();
    $(".waxPage").hide();
    $(".deckPage").show();
    $(".finalPage").hide();
  })

  $(".toWheels").click(function() {
    $(".wheelsPage").show();
    $(".trucksPage").hide();
    $(".waxPage").hide();
    $(".deckPage").hide();
    $(".finalPage").hide();
  })

  $(".toTrucks").click(function() {
    $(".wheelsPage").hide();
    $(".trucksPage").show();
    $(".waxPage").hide();
    $(".deckPage").hide();
    $(".finalPage").hide();
  })

  $(".toWax").click(function() {
    $(".wheelsPage").hide();
    $(".trucksPage").hide();
    $(".waxPage").show();
    $(".deckPage").hide();
    $(".finalPage").hide();
  })

  $(".toFinal").click(function() {
    $(".wheelsPage").hide();
    $(".trucksPage").hide();
    $(".waxPage").hide();
    $(".deckPage").hide();
    $(".finalPage").show();
  })

  $(".testBtn").click(function() {
    var targetDiv = document.getElementsByClassName('targetDiv');
    console.log(targetDiv);
    targetDiv.textContent = `Hello`;
  })

  // this brings out the checkout menu
  $(".checkOutBtn").click(function () {
    $(".checkOutSec").toggleClass("checkOutVisible");
  })

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

  // Waypoint to show hidden insideSec stuff
    $("#insideSec").waypoint(function(direction) {
      if (direction == "down") {
        $("#insideSecTitle").show();
        $(".insideGallery").show();
      }
    }, {offset: "40%"});

  // Waypoint to hide insideSec stuff
  $("#insideSec").waypoint(function(direction) {
    if (direction == "up") {
      $("#insideSecTitle").hide();
      $(".insideGallery").hide();
    }
  }, {offset: "80%"});

});

// This function doesn't work for some reason
function shakeBox() {
  document.getElementsByClassName("box").innerHTML = '<img src="box.png" class="animated shake"/>';
  alert("box shook");
}
