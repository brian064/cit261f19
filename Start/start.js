console.dir(document.getElementsByClassName("myForm"));

var colors = ["red", "blue", "yellow", "green"];
var numbers = [1, 2, 3 , 4];

//for loop
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

//forEach - like for loop but easier
colors.forEach(function(item) {
  console.log(item + " color");
});

//map - changes the array and returns the changed array
const negative = numbers.map(function(item) {
  return item * -1;
})

console.log(negative);
