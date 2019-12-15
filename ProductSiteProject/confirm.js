var deck = localStorage.getItem("deck");
var wheels = localStorage.getItem("wheels");
var trucks = localStorage.getItem("trucks");
var wax = localStorage.getItem("wax");

const confirmPage = document.querySelector('#confirmPage');

confirmPage.innerHTML = `<h1>HERE'S YOUR ORDER!</h1>

<div class="item container ${deck} finalItem">
</div>

<div class="item container ${wheels} finalItem">
</div>

<div class="item container ${trucks} finalItem">
</div>

<div class="item container ${wax} finalItem">
</div>

<a href="index.html"><button class="confirmBtn">CONFIRM</button></a>`;

console.log(confirmPage);
