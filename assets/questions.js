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