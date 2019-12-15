// Pseudo JSON Inventory Database
const inventory = {
  "decks":[
    {
      "name" : "deck1",
      "stock" : 5
    },
    {
      "name" : "deck2",
      "stock" : 2
    }
  ],

  "wheels":[
    {
      "name" : "wheels1",
      "stock" : 4
    },
    {
      "name" : "wheels2",
      "stock" : 1
    }
  ],

  "wax":[
    {
      "name" : "wax1",
      "stock" : 0
    },
    {
      "name" : "wax2",
      "stock" : 3
    }
  ],

  "trucks":[
    {
      "name" : "trucks1",
      "stock" : 3
    },
    {
      "name" : "trucks2",
      "stock" : 5
    }
  ],
}

// if (inventory.decks[0].stock <= 0) {
//   console.log("Out of Stock :(");
// } else {
//   console.log(`Available! :) (${inventory.decks[0].stock} left)`);
// }

$(document).ready(function() {

  //SELECT DECKS FUNCTIONALITY

  $(".d1").click(function() {

    if (inventory.decks[0].stock <= 0) {
      alert("Sorry, deck is out of stock :(");
    } else {
      localStorage.setItem("deck", "deck1");
      console.log(localStorage.getItem("deck"));
      alert(`Deck 1 Selected! :) (${inventory.decks[0].stock} in stock)`)
    }
  })

  $(".d2").click(function() {

    if (inventory.decks[1].stock <= 0) {
      alert("Sorry, deck is out of stock :(");
    } else {
      localStorage.setItem("deck", "deck2");
      console.log(localStorage.getItem("deck"));
      alert(`Deck 2 Selected! :) (${inventory.decks[1].stock} in stock)`)
    }
  })

  //SELECT WHEELS FUNCTIONALITY

  $(".wh1").click(function() {

    if (inventory.wheels[0].stock <= 0) {
      alert("Sorry, wheel pack is out of stock :(");
    } else {
      localStorage.setItem("wheels", "wheels1");
      console.log(localStorage.getItem("wheels"));
      alert(`Wheels 1 Selected! :) (${inventory.wheels[0].stock} in stock)`)
    }
  })

  $(".wh2").click(function() {

    if (inventory.wheels[1].stock <= 0) {
      alert("Sorry, wheel pack is out of stock :(");
    } else {
      localStorage.setItem("wheels", "wheels2");
      console.log(localStorage.getItem("wheels"));
      alert(`Wheels 2 Selected! :) (${inventory.wheels[1].stock} in stock)`)
    }
  })

  //SELECT TRUCKS FUNCTIONALITY

  $(".t1").click(function() {

    if (inventory.trucks[0].stock <= 0) {
      alert("Sorry, trucks are out of stock :(");
    } else {
      localStorage.setItem("trucks", "trucks1");
      console.log(localStorage.getItem("trucks"));
      alert(`Trucks 1 Selected! :) (${inventory.trucks[0].stock} in stock)`)
    }
  })

  $(".t2").click(function() {

    if (inventory.trucks[1].stock <= 0) {
      alert("Sorry, trucks are out of stock :(");
    } else {
      localStorage.setItem("trucks", "trucks2");
      console.log(localStorage.getItem("trucks"));
      alert(`Trucks 2 Selected! :) (${inventory.trucks[1].stock} in stock)`)
    }
  })

  //SELECT WAX FUNCTIONALITY

  $(".w1").click(function() {

    if (inventory.wax[0].stock <= 0) {
      alert("Sorry, wax is out of stock :(");
    } else {
      localStorage.setItem("wax", "wax1");
      console.log(localStorage.getItem("wax"));
      alert(`Wax 1 Selected! :) (${inventory.wax[0].stock} in stock)`)
    }
  })

  $(".w2").click(function() {

    if (inventory.wax[1].stock <= 0) {
      alert("Sorry, wax is out of stock :(");
    } else {
      localStorage.setItem("wax", "wax2");
      console.log(localStorage.getItem("wax"));
      alert(`Wax 2 Selected! :) (${inventory.wax[1].stock} in stock)`)
    }
  })

  $(".confirmBtn").click(function() {

    var deck = localStorage.getItem("deck");
    var wheels = localStorage.getItem("wheels");
    var trucks = localStorage.getItem("trucks");
    var wax = localStorage.getItem("wax");

    if (deck) {
      if (deck == "deck1") {
        inventory.deck[0].stock -= 1;
      } else if (deck == "deck2") {
        inventory.deck[1].stock -= 1;
      }
    }
  })

})
