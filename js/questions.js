//need a for loop to change questions and print choices
let questions = [
  { question: "What is the DOM?",
    answers: [
       'An array of objects.',
      'The Document Object Module.',
     'A new computer virus. ',
    ],
    correctAnswer: 'An array of objects.'
    
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
       '<javascript>',
      '<scripting>',
      '<script>',s
    ],
    correctAnswer: '<script>'
  },
  { 
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
       'The head section',
       'Both the head section and the body section are correct',
       'The body section',
    ],
    correctAnswer: 'Both the head section and the body section are correct'
  },
  {
    question: "How do you write Hello World in an alert box?",
    answers: [
        'msgBox(HelloWorld)',
        'alert(HelloWorld)',
        'msg(HelloWorld)',
    ],
    correctAnswer:  'msgBox(HelloWorld)'
  },
{
  question: "How do you create a function in JavaScript?",
  answers: [
     'function = myFunction()',
     'function myFunction()',
     'function:myFunction()',
  ],
  correctAnswer: 'function myFunction()'
},

];

let wrongAnswers = [];
let correctAnswers = [];
console.log(questions);

