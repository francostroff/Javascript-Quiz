
// // function for showing the question
// function showQuestion(question1) {
//   // code
// }
// // call the function
// showQuestion(question1);
// console.log (question1)
          // Hide
  
// let start = document.querySelector('#start');



//timer countdown
let timer = 0
let maxTicks = 91;
let tickCount = 0;
let tick = function()
{if (tickCount === maxTicks)
    {
   // Stops the interval.
        clearInterval(myInterval);
        return;
    }
   // The particular code you want to excute on each tick 
    document.getElementById("time").innerHTML = (maxTicks - tickCount);
    tickCount++;
};
let myInterval = setInterval(tick, 1000);

//starts the quiz
function startQuiz() {
  document.getElementById("start-screen").innerHTML = "";
 }
 
//show question 1
function startQuestion(){
  document.getElementsByClassName(".hide").innerHTML = "";
 }
  console.log(questions);

// titleDiv.textContent = questions;
// showQuestion(questions);
// let titleDiv = document.getElementById('question-title');
// titleDiv.textContent = questions-title;
// showQuestion(question-title);

// let time = document.querySelector('time');
//  time.addEventListener('click', function() {
//  	let i = 0;
	
// 	setInterval(function() {
// 		alert(++i);
//  }, 1000);
//  });

//  var questions = [
//   {
//     question: "What is a string?",
//     answers: {
//       a: 'Line of text',
//       b: 'Strings are for storing and manipulating text',
//       c: 'A special variable, which can hold more than one value:',
//     },
//     correctAnswer: 'b'
    
//   },
//   {
//     question: "What is an array?",
//     answers: {
//       a: '3',
//       b: '5',
//       c: '10',
//     },
//     correctAnswer: 'c'
//   },
//   {
//     question: "What is an object?",
//     answers: {
//       a: '3',
//       b: '22.5',
//       c: '35.5',
//     },
//     correctAnswer: 'b'
//   },
//   {
//     question: "what is a function?",
//     answers: {
//       a: '3.333333',
//       b: '30',
//       c: '29',
//     },
//     correctAnswer: '3.333333'
//   },

// ];



// start.addEventListener('click', function() {
// 	let i = 0;
// });
  
// start.addEventListener("click", function(){ console.log("Start Quiz"); });
//  ("start").click( function(){
//   var counter = 20;
//   setInterval(function() {
//    counter--;
//     if (counter >= 0) {
//        span = document.getElementById("count");
//        span.innerHTML = "start";
//   }
//  if (counter === 0) {
//       alert('sorry, out of time');
//         clearInterval(counter);
//       }
//     }, 1000);
//  });

// var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
// var todoList = document.querySelector("#todo-list");
// renderTodos();

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     todoList.appendChild(li);
//   }
// }


   
  




// 
var resultsContainer = document.getElementById('results');
// const results = document.querySelector("#results")
//console.log(resultsContainer);
var submitButton = document.getElementById('submit');

//generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton){
}

function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [myQuestions.userAnswer];
    var answers = "";
    console.log(output);

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');{
  }

  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}//get input value
function getInputValue(){

}
console.log();