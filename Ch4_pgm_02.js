// Displaying information from similar objects

var movie1;
var movie2;
var movie3;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"

};
var movie4 = {
  title: "The Dark Knight",
  actors: "Christian Bale, Heath Ledger",
  directors: "Christopher Nolan"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");

// Objects representing calendar events
var event1 = {
  title: "Conference: AI in Healthcare",
  date: "2024-08-15",
  location: "New York City"
};

var event2 = {
  title: "Workshop: Web Development Trends",
  date: "2024-09-20",
  location: "San Francisco"
};

var event3 = {
  title: "Seminar: Blockchain for Business",
  date: "2024-10-10",
  location: "London"
};

// Displaying information for the calendar events
console.log("Calendar Event: " + event1.title);
console.log("Date: " + event1.date);
console.log("Location: " + event1.location);
console.log("------------------------------");

console.log("Calendar Event: " + event2.title);
console.log("Date: " + event2.date);
console.log("Location: " + event2.location);
console.log("------------------------------");

console.log("Calendar Event: " + event3.title);
console.log("Date: " + event3.date);
console.log("Location: " + event3.location);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */