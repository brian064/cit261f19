// function to display a list
function displayHikeList() {
  const hikeListElement = document.getElementById("hikes");
  hikeList.forEach(hike => {
    // Append child adds to the element
    hikeListElement.appendChild(buildHikeHtmlDetailed(hike));

  });
}

// function that builds hike html
function buildHikeHtml(hike=null) {
  const item = document.createElement('li');
  console.dir(item);

  return item;
}

// function that builds hike html
function buildHikeHtmlDetailed(hike=null) {
  const item = document.createElement('li');
  item.classList.add('light');
  item.innerHTML =
  '<img src="./hiking-start_files/falls.jpg" alt="Image of Bechler Falls">
  <h2>${hike.name}</h2>
  <div>
    <h3>Distance</h3>
    <p>3 miles</p>
  </div>
  <div>
    <h3>Difficulty</h3>
    <p>Easy</p>
  </div>
  <div>
    <h3>Description</h3>
    <p>Beautiful short hike along the Bechler river to Bechler Falls</p>
  </div>
  <div>
    <h3>How to get there</h3>
    <p>
      Take Highway 20 north to Ashton. Turn right into the town and
      continue through. Follow that road for a few miles then turn left
      again onto the Cave Falls road. Drive to the end of the Cave Falls
      road. There is a parking area at the trailhead.
    </p>
  </div>';
  console.dir(item);

  return item;
}

// window.addEventListener('load', displayHikeList);
displayHikeList();
