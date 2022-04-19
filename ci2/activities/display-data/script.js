

let artists = [
  {name: "M.I.A", amount: 7.108},
  {name: "J Dilla", amount: 1.088},
  {name: "The Fugees", amount: 6.203},
  {name: "MF Doom", amount: 4.168},
  {name: "Led Zeppelin", amount: 15.708},
  {name: "Bill Evans", amount: 1.454}
  ];

  // One: Use the amount to indicate how big each circle is

// First show all the flowers and create divs for each of them
let container = document.querySelector(".music");
// create a counter variable that will give us each flowers number in the array
let i = 0;

function displayArtists(artist) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let artistDiv = container.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("artist");
  // adds a specific class to each new div
  newItem.classList.add("artist" + [i]);
  // places the flower name and amount to the div
  artist.innerHTML = artist.name + " – " + artist.amount;
  // sets height of flower to the amount. try changing height to width, or padding
  artistDiv.style.height = artist.amount + "vw";
  artistDiv.style.width = artist.amount + "vw";
  console.log(artist);
}
// loops through the flowers and runs the displayFlowers function for each one
artists.forEach(displayArtists);












