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

    
// personContainer.setAttribute("id", index);

// console.log(person.fields.recor)

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








