console.log(document.body);
console.log(document.body.children);
console.log(questions)
var myInterval;
let myQuestions = document.querySelector("#questions");
let answerContainer = document.getElementById("#choices");
let correctAnswer = [];
let selectedAnswers = {};
let index;
var resultsContainer = document.getElementById('results');
var results=[];
let startScreen = document.getElementById("start-screen");
var submitButton = document.getElementById('submit');
var secondsLeft = document.getElementById("time");
//timer countdown
let maxTicks = 90;
let minTicks = 0
let tickCount = 0;
let tick = function(){
  maxTicks--
  secondsLeft.textContent=maxTicks
}
// The particular code you want to excute on each tick 
    // document.getElementById("time").innerHTML = (maxTicks - tickCount);
    // tickCount++;

//starts the quiz
function startQuiz() {
  myInterval = setInterval(tick, 1000);
  startScreen.setAttribute("class","hide")
  myQuestions.removeAttribute("class")
}

function showQuestion() {
 document.getElementById("questions").style.display = "block"
}

//show question 1
function RespondClick() {
  document.getElementById("questions").innerHTML +=
            "Click Event" + "<br>";
}
//  start.addEventListener('click', function() {
// });
  var resultsContainer = document.getElementById('results');
  var results=[];


//generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton){
}

function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [questions.userAnswer];
    var answers = "";
    console.log(output);
    console.log(answers)

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
function returnText(){
  let input = document.getElementById("userInput").value;
  localStorage.setItem('input', input)
  console.log(input)
  alert (input)

}
function func() {
const rightAnswers = ["b","c","a","a","b"];
const copy = [];

// rightAnswers.forEach(function (rightAnswers) {
// copy.push(rightAnswers);
// });

console.log(copy);

}


