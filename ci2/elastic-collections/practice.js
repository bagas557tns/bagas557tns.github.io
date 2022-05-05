// is my file linked?
// console.log("is this working?");

// loading the airtable library, calling it "Airtable"
var Airtable = require("airtable")
// console.log(Airtable)

// use airtable library, connect to our base using API key and base key
var base = new Airtable({ apiKey: "keydXjoJ8NXsE089J" }).base(
  "appIMDqwWRfr21DPh"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("nyc").select({}).eachPage(gotPageOfPeople, gotAllPeople);

// an empty array to hold all our data
var people = [];

// call back function that receives our data
function gotPageOfPeople(records, fetchNextPage) {
  console.log("gotPageOfPeople()");
  // add the records from this page to our books array
  people.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllPeople(err) {
  console.log("gotAllPeople()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogPeople();
  showPeople();
  anchorTag();
}

// just loop through the books and console.log them
function consoleLogPeople() {
  console.log("consoleLogPeople()");
  people.forEach((person) => {
    console.log("Person:", person);
  });
}

// look through our airtable data and create elements for everything
function showPeople() {
  console.log("showPeople()");
  people.forEach((person, index) => {
    console.log(person.fields.record_id, index)

    // add names of people
  	// var personName = document.createElement("h1");
  	// personName.innerText = person.fields.name;
  	// document.body.append(personName); 

    // creating a new letter container
    // this is where the letter info will go
    var personContainer = document.createElement("div");
    personContainer.classList.add("person-container");
    document.querySelector(".container").append(personContainer)

    personContainer.setAttribute("id", index);

    // adding dates to our person containers
    var personDate = document.createElement("div");
    personDate.classList.add("person-date");
    personDate.innerText = person.fields.date;
    personContainer.append(personDate);

    // adding words to our person containers 
    var personWord = document.createElement("div");
    personWord.classList.add("person-word");
    personWord.innerHTML = "New York is... " + "<br />" + person.fields.word + "." ;
    personContainer.append(personWord);

    // adding reasons to our person containers 
    var personReason = document.createElement("div");
    personReason.classList.add("person-reason");
    personReason.innerText = person.fields.reason;
    personContainer.append(personReason);

    // adding names to our person containers 
    var personName = document.createElement("div");
    personName.classList.add("person-name");
    personName.innerHTML = "Sincerely, " + "<br />" + person.fields.name;
    personContainer.append(personName);

    // get borough field from airtable
    // loop through the array and add each genre
    // a class to the song container 
    var personBorough = person.fields.borough;
    personBorough.forEach(function(borough){
      personContainer.classList.add(borough)
    })

    // add event listener to our filter 
    // to add an active class to our letters

    var filterBronx = document.querySelector(".bronx-button");
    filterBronx.addEventListener("click", function(){


      if (personContainer.classList.contains("bronx")) {
        personContainer.style.display = "flex";

      } else {
        personContainer.style.display = "none";
      }
    })

    var filterManhattan = document.querySelector(".manhattan-button");
    filterManhattan.addEventListener("click", function(){


      if (personContainer.classList.contains("manhattan")) {
        personContainer.style.display = "flex";

      } else {
        personContainer.style.display = "none";
      }
    })

    var filterBrooklyn = document.querySelector(".brooklyn-button");
    filterBrooklyn.addEventListener("click", function(){


      if (personContainer.classList.contains("brooklyn")) {
        personContainer.style.display = "flex";

      } else {
        personContainer.style.display = "none";
      }
    })

    var filterQueens = document.querySelector(".queens-button");
    filterQueens.addEventListener("click", function(){


      if (personContainer.classList.contains("queens")) {
        personContainer.style.display = "flex";

      } else {
        personContainer.style.display = "none";
      }
    })

    var filterReset = document.querySelector(".reset-js")
    filterReset.addEventListener("click", function(){
      personContainer.style.display = "flex";
    })





// INFO SECTION //

    // creating a new div container
    // this is where the other info will go
    var infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    document.querySelector(".container").append(infoContainer)

    // adding areas to our info containers
    var infoArea = document.createElement("div");
    infoArea.classList.add("info-area");
    infoArea.innerText = "Currently in: " + person.fields.area;
    infoContainer.append(infoArea);

    // adding times to our info containers
    var infoTime = document.createElement("div");
    infoTime.classList.add("info-time");
    infoTime.innerText = "Living in New York for: " + person.fields.time;
    infoContainer.append(infoTime);

    // adding dreams to our info containers
    var infoDream = document.createElement("div");
    infoDream.classList.add("info-dream");
    infoDream.innerText = "Would rather live in: " + person.fields.dream;
    infoContainer.append(infoDream);

    var infoBorough = person.fields.borough;
    infoBorough.forEach(function(borough){
      infoContainer.classList.add(borough)
    })

    var filterManhattanInfo = document.querySelector(".manhattan-button");
    filterManhattanInfo.addEventListener("click", function(){


      if (infoContainer.classList.contains("manhattan")) {
        infoContainer.style.display = "inline-block";

      } else {
        infoContainer.style.display = "none";
      }
    })

    var filterBronxInfo = document.querySelector(".bronx-button");
    filterBronxInfo.addEventListener("click", function(){


      if (infoContainer.classList.contains("bronx")) {
        infoContainer.style.display = "inline-block";

      } else {
        infoContainer.style.display = "none";
      }
    })  

    var filterBrooklynInfo = document.querySelector(".brooklyn-button");
    filterBrooklynInfo.addEventListener("click", function(){


      if (infoContainer.classList.contains("brooklyn")) {
        infoContainer.style.display = "inline-block";

      } else {
        infoContainer.style.display = "none";
      }
    })  

    var filterQueensInfo = document.querySelector(".queens-button");
    filterQueensInfo.addEventListener("click", function(){


      if (infoContainer.classList.contains("queens")) {
        infoContainer.style.display = "inline-block";

      } else {
        infoContainer.style.display = "none";
      }
    }) 

    var filterReset = document.querySelector(".reset-js")
    filterReset.addEventListener("click", function(){
      infoContainer.style.display = "inline-block";
    }) 

  });
}




function onLinkClick() {
  document.getElementById(window.location.hash.split("#")[1]).scrollIntoView();
}

function anchorTag() {
  onLinkClick();
  console.log(window.location.hash.split("#")[1]);
}

    // let personContainer = document.querySelectorAll(".person-container");

    // for (i = 0; i < 50; i++) {
    //   // console.log("Test" + personContainer[i]);
    //   personContainer.setAttribute("id", "bruh");
    // } 



    // var link = document.createElement("a");
    // link.setAttribute("id", index);
    // link.classList.add("anchor-tag")
    // personContainer.append(link);

let mybutton = document.getElementById("topButton");

window.onscroll = function() {
  scrollFunction()};

  function scrollFunction() {
   if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// function topFunction() {
//   document.body.scrollTop = 0; 
//   document.documentElement.scrollTop = 0;
// }

function topFunction() {
  window.scrollTo({top: 0, behavior: "smooth"});
}
















