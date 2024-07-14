// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

// Second movie
var movie2 = {
  title: "Inception",
  actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
  directors: "Christopher Nolan"
};

// Displaying information for movie2
console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");
// Object representing a blog post
var blogPost = {
  title: "Top 10 JavaScript Frameworks in 2024",
  author: "John Doe",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  publishedDate: "2024-07-14",
  likes: 128,
  comments: [
    { user: "Alice", comment: "Great list!" },
    { user: "Bob", comment: "I prefer Framework X over Framework Y." }
  ]
};

// Displaying information for the blog post
console.log("Blog Post: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("------------------------------");
console.log(blogPost.content);
console.log("------------------------------");
console.log("Published on: " + blogPost.publishedDate);
console.log("Likes: " + blogPost.likes);
console.log("Comments:");
blogPost.comments.forEach(function(comment) {
  console.log("- " + comment.user + ": " + comment.comment);
});


/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */