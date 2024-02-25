const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const titleCasedTutor = tutorials.map(tutorial => {
    const words = tutorial.split(" ");
    const titleCaseWords = words.map(word => {
      return word.charAt(0).toUpperCase()+ word.slice(1);
    });
    return titleCaseWords.join(" ")
    });
    return titleCasedTutor;
  }
 
// iterate through the tutorials array
//modify the name of each tutorial
//also need to access and mofidy each individual word

//how can we iterate through words in a string?
//possible: use split() ? use map() advantages 
//use arrow function

//can we execute an interation inside an iteration?
//how can we capitalize just the first letter in a word?
// startsWith() to.Upper.Case