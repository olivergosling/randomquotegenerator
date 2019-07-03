/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Array of quote objects
var quotes = [
  {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
    citation: "",
    year: "",
    category: "Movies",
    backgroundColor: ""
  },
  {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi",
    citation: "",
    year: "",
    category: "Politics",
    backgroundColor: "#DB93B0"
  },
  {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    source: "Ralph Waldo Emerson",
    citation: "",
    year: "",
    backgroundColor: "#F7BFB4"
  },
  {
    quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
    source: "Oscar Wilde",
    citation: "The Happy Prince and Other Stories",
    year: "1896",
    category: "Literary",
    backgroundColor: "#7DAF9C"
  },
  {
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    source: "Maya Angelou",
    citation: "",
    year: "",
    backgroundColor: "#23967F"
  }
];

// Select a random quote object from quotes array
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}


// Fetch a random quote, format it using HTML and then display it
function printQuote(){
  var randomQuote = getRandomQuote();
  var htmlString = "";

  // Using ES6 Template Strings
  htmlString += `<p class="quote">${randomQuote.quote}</p>`;
  htmlString += `<p class="source">${randomQuote.source}`;

  if(randomQuote.citation){
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if(randomQuote.year){
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }

  htmlString += '</p>';

  if(randomQuote.category){
    htmlString += `<p class="category">${randomQuote.category}</p>`;
  }

  document.getElementById('quote-box').innerHTML = htmlString;

  // Change background color if specified
  if(randomQuote.backgroundColor){
    document.body.style.backgroundColor = randomQuote.backgroundColor;
  }
  else{
    document.body.style.backgroundColor = "";
  }
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Change quote every 3 seconds
setInterval(function(){
  printQuote()
}, 3000);
