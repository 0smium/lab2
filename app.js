//Complete guessing game app referenced from index.html
//Name function myGame
function myGame() {
  var userName = prompt('What\'s your name?');
  alert('Hello ' + userName + '. Let\'s begin!');

  // We want to ask the user a question.
  // Take their answer as input stored in a variable.
  // Validate that their answer matches my answer.
  // Depending on True or False, provide feedback.

  // Ask question 1
  var userAnswerOne = prompt('Was I born in Washington (y/n)?');

  if (userAnswerOne.toLowerCase() === 'n' || userAnswerOne.toLowerCase() === 'no') {
    // Do something
     alert('Correct, I was born in Massachusetts.');
  } else {
    // Do something else
    alert('Incorrect, I was born in Massachusetts.');
  }

  // Ask question 2
  var userAnswerTwo = prompt('Did I study computer science in college (y/n)?');

  if (userAnswerTwo.toLowerCase() === 'n' || userAnswerTwo.toLowerCase() === 'no') {
    // Do something
     alert('Correct, I studied Biology.');
  } else {
    // Do something else
    alert('Incorrect, I studied Biology.');
  }

  // Ask question 3
  var userAnswerThree = prompt('Have I lived in California (y/n)?');

  if (userAnswerThree.toLowerCase() === 'y' || userAnswerThree.toLowerCase() === 'yes') {
    // Do something
     alert('Correct, I lived in California from 2007 through 2015.');
  } else {
    // Do something else
    alert('Incorrect, I lived in California from 2007 through 2015.');
  }

  // Ask question 4
  var userAnswerFour = prompt('Do I have children (y/n)?');

  if (userAnswerFour.toLowerCase() === 'y' || userAnswerFour.toLowerCase() === 'yes') {
    // Do something
     alert('Correct, I have two children, Liam (5) and Darcie (2).');
  } else {
    // Do something else
    alert('Incorrect, I have two children, Liam (5) and Darcie (2).');
  }
    // Ask question 5
  var userAnswerFive = prompt('Name one of my hobbies.');
    // Define array 'answerFiveArray' with possible answers
  var answerFiveArray = ['spending time with family', 'homebrewing', 'playing disc golf', 'skiing', 'rock climbing'];
    // If statement tries to match userAnswerFive against answerFiveArray
  if (answerFiveArray.indexOf(userAnswerFive.toLowerCase()) > -1) {
    // Do something
    alert('Correct, ' + userAnswerFive + ' is one of my hobbies!');
  } else {
    // Do something else
    alert('Incorrect, ' + userAnswerFive + ' is NOT one of my hobbies!');
  }

  // Ask question 6
  var userAnswerSix = prompt('Name a subject I taught.');
    // Define array 'answerSixArray' with possible answers
  var answerSixArray = ['biology', 'chemistry', 'physics', 'astronomy'];
    // If statement tries to match userAnswerFive against answerFiveArray
  if (answerSixArray.indexOf(userAnswerSix.toLowerCase()) > -1) {
    // Do something
    alert('Correct, ' + userAnswerSix + ' is a subject I taught!');
  } else {
    // Do something else
    alert('Incorrect, ' + userAnswerSix + ' is NOT a subject I taught!');
  }
}
