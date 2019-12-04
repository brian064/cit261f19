// Pseudo JSON Inventory Database
const inventory = {
  "decks":[
    {
      "name" : "deck1",
      "stock" : 23
    },
    {
      "name" : "deck2",
      "stock" : 0
    }
  ],

  "wheels":[
    {
      "name" : "wheels1",
      "stock" : 0
    },
    {
      "name" : "wheels2",
      "stock" : 15
    }
  ],

  "wax":[
    {
      "name" : "wax1",
      "stock" : 2
    },
    {
      "name" : "wax2",
      "stock" : 6
    }
  ],

  "trucks":[
    {
      "name" : "trucks1",
      "stock" : 15
    },
    {
      "name" : "trucks2",
      "stock" : 13
    }
  ],
}

if (inventory.decks[0].stock <= 0) {
  console.log("Out of Stock :(");
} else {
  console.log(`Available! :) (${inventory.decks[0].stock} left)`);
}

$(document).ready(function() {

  //SELECT DECKS FUNCTIONALITY

  $(".deck1").click(function() {

    if (inventory.decks[0].stock <= 0) {
      alert("Sorry, deck is out of stock :(");
    } else {
      alert(`Deck 1 Selected! :) (${inventory.decks[0].stock} in stock)`)
    }
  })

  $(".deck2").click(function() {

    if (inventory.decks[1].stock <= 0) {
      alert("Sorry, deck is out of stock :(");
    } else {
      alert(`Deck 2 Selected! :) (${inventory.decks[1].stock} in stock)`)
    }
  })

  //SELECT WHEELS FUNCTIONALITY

  $(".wheels1").click(function() {

    if (inventory.wheels[0].stock <= 0) {
      alert("Sorry, wheel pack is out of stock :(");
    } else {
      alert(`Wheels 1 Selected! :) (${inventory.wheels[0].stock} in stock)`)
    }
  })

  $(".wheels2").click(function() {

    if (inventory.wheels[1].stock <= 0) {
      alert("Sorry, wheel pack is out of stock :(");
    } else {
      alert(`Wheels 2 Selected! :) (${inventory.wheels[1].stock} in stock)`)
    }
  })

  //SELECT TRUCKS FUNCTIONALITY

  $(".trucks1").click(function() {

    if (inventory.trucks[0].stock <= 0) {
      alert("Sorry, trucks are out of stock :(");
    } else {
      alert(`Trucks 1 Selected! :) (${inventory.trucks[0].stock} in stock)`)
    }
  })

  $(".trucks2").click(function() {

    if (inventory.trucks[1].stock <= 0) {
      alert("Sorry, trucks are out of stock :(");
    } else {
      alert(`Trucks 2 Selected! :) (${inventory.trucks[1].stock} in stock)`)
    }
  })

  //SELECT WAX FUNCTIONALITY

  $(".wax1").click(function() {

    if (inventory.wax[0].stock <= 0) {
      alert("Sorry, wax is out of stock :(");
    } else {
      alert(`Wax 1 Selected! :) (${inventory.wax[0].stock} in stock)`)
    }
  })

  $(".wax2").click(function() {

    if (inventory.wax[1].stock <= 0) {
      alert("Sorry, wax is out of stock :(");
    } else {
      alert(`Wax 2 Selected! :) (${inventory.wax[1].stock} in stock)`)
    }
  })

})
