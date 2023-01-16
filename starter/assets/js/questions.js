//need a for loop to change questions and print choices
console.log("Here are the questions");
let myQuestions = [
  { numb:1,
    question: "What is a string?",
    answers: {
      a: '3',
      b: '5',
      c: '115',
    },
    correctAnswer: 'b'
    
  },
  {
    numb:2,
    question: "What is an array?",
    answers: {
      a: 'a fish',
      b: 'a crypto currency',
      c: 'multiple objects inside a variable',
    },
    correctAnswer: 'c'
  },
  { 
    numb:3,
    question: "What is the DOM?",
    answers: {
      a: 'Document Object Module',
      b: 'Champagne brand',
      c: 'A new Nasa project',
    },
    correctAnswer: 'a'
  },
  {
    numb:4,
    question: "what is a function?",
    answers: {
      a: '3.333333',
      b: '30',
      c: '29',
    },
    correctAnswer: '3.333333'
  },

];


function clicked() {
  var answerText = document.getElementById("answer");
  answerText.style.display = "inline";
}
