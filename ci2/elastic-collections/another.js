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
  people.forEach((person) => {

    // creating a new letter container
    // this is where the letter info will go
    var personContainer = document.createElement("div");
    personContainer.classList.add("person-container");
    document.querySelector(".container1").append(personContainer)

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

 