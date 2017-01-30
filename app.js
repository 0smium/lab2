//Complete guessing game app referenced from index.html
//Name function myGame
function myGame() {
  var numCorrectResponses = 0;

  // Ask for user's name
  var userName = prompt('What\'s your name?');
  alert('Hello ' + userName + '. Let\'s begin!');
  // Console returns player's name 'userName'
  console.log('Player\'s name is \"' + userName + '\".')

  // We want to ask the user a question.
  // Take their answer as input stored in a variable.
  // Validate that their answer matches my answer.
  // Depending on True or False, provide feedback.

  // Ask question 1
  var userAnswerOne = prompt('Was I born in Washington (y/n)?');

  // Console returns player's answer 'userAnswerOne'
  console.log('Player\'s response to question 1 is \"' + userAnswerOne + '\".')

  if (userAnswerOne.toLowerCase() === 'n' || userAnswerOne.toLowerCase() === 'no') {
    // Do something
     alert('Correct, I was born in Massachusetts.');
     //Log user's correct answer to console.
     console.log('User\'s answer to question 1, \"' + userAnswerOne + '\" is correct.');
     numCorrectResponses += 1;
  } else {
    // Do something else
    alert('Incorrect, I was born in Massachusetts.');
    // Log user's incorrect answer to console.
    console.log('User\'s answer to question 1, \"' + userAnswerOne + '\" is incorrect.');
  }
  // Log the number of correct answers so far
  console.log('The user has answered ' + numCorrectResponses + ' question correctly so far.')

  // Ask question 2
  var userAnswerTwo = prompt('Did I study computer science in college (y/n)?');

  // Console returns player's answer 'userAnswerTwo'
  console.log('Player\'s response to question 2 is \"' + userAnswerTwo + '\".')

  if (userAnswerTwo.toLowerCase() === 'n' || userAnswerTwo.toLowerCase() === 'no') {
    // Do something
     alert('Correct, I studied Biology.');
     numCorrectResponses += 1;
     //Log user's correct answer to console.
     console.log('User\'s answer to question 2, \"' + userAnswerTwo + '\" is correct.');
  } else {
    // Do something else
    alert('Incorrect, I studied Biology.');
    //Log user's incorrect answer to console.
    console.log('User\'s answer to question 2, \"' + userAnswerTwo + '\" is incorrect.');
  }
  // Log the number of correct answers so far
  console.log('The user has answered ' + numCorrectResponses + ' questions correctly so far.')

  // Ask question 3
  var userAnswerThree = prompt('Have I lived in California (y/n)?');

  // Console returns player's answer 'userAnswerThree'
  console.log('Player\'s response to question 3 is \"' + userAnswerThree + '\".')

  if (userAnswerThree.toLowerCase() === 'y' || userAnswerThree.toLowerCase() === 'yes') {
    // Do something
     alert('Correct, I lived in California from 2007 through 2015.');
     //Log user's correct answer to console.
     console.log('User\'s answer to question 3, \"' + userAnswerThree + '\" is correct.');
     numCorrectResponses += 1;
  } else {
    // Do something else
    alert('Incorrect, I lived in California from 2007 through 2015.');
    //Log user's incorrect answer to console.
    console.log('User\'s answer to question 3, \"' + userAnswerThree + '\" is incorrect.');
  }
  // Log the number of correct answers so far
  console.log('The user has answered ' + numCorrectResponses + ' questions correctly so far.')

  // Ask question 4
  var userAnswerFour = prompt('Do I have children (y/n)?');

  // Console returns player's answer 'userAnswerFour'
  console.log('Player\'s response to question 4 is \"' + userAnswerFour + '\".')

  if (userAnswerFour.toLowerCase() === 'y' || userAnswerFour.toLowerCase() === 'yes') {
    // Do something
     alert('Correct, I have two children, Liam (5) and Darcie (2).');
     //Log user's correct answer to console.
     console.log('User\'s answer to question 4, \"' + userAnswerFour + '\" is correct.');
     numCorrectResponses += 1;
  } else {
    // Do something else
    alert('Incorrect, I have two children, Liam (5) and Darcie (2).');
    //Log user's incorrect answer to console.
    console.log('User\'s answer to question 4, \"' + userAnswerFour + '\" is incorrect.');
  }
  // Log the number of correct answers so far
  console.log('The user has answered ' + numCorrectResponses + ' questions correctly so far.')

  // Ask question 5
  var userAnswerFive = prompt('Name one of my hobbies.');
  // Console returns player's answer 'userAnswerFive'
  console.log('Player\'s response to question 5 is \"' + userAnswerFive + '\".')
    // Define array 'answerFiveArray' with possible answers
  var answerFiveArray = ['spending time with family', 'homebrewing', 'playing disc golf', 'skiing', 'rock climbing', 'welding'];
    // If statement tries to match userAnswerFive against answerFiveArray
  if (answerFiveArray.indexOf(userAnswerFive.toLowerCase()) > -1) {
    // Do something
    alert('Correct, ' + userAnswerFive + ' is one of my hobbies!');
    //Log user's correct answer to console.
    console.log('User\'s answer to question 5, \"' + userAnswerFive + '\" matches an array element and is a correct response.');
    numCorrectResponses += 1;
  } else {
    // Do something else
    alert('Incorrect, ' + userAnswerFive + ' is NOT one of my hobbies!');
    //Log user's incorrect answer to console.
    console.log('User\'s answer to question 5, \"' + userAnswerFive + '\" does NOT match an array element and is NOT a correct response.');
  }
  // Log the number of correct answers so far
  console.log('The user has answered ' + numCorrectResponses + ' questions correctly so far.')

  // Ask question 6
  var userAnswerSix = prompt('Name a subject I taught.');

    //Console returns player's answer 'userAnswerSix'
    console.log('Player\'s response to question 6 is \"' + userAnswerSix + '\".')
    // Define array 'answerSixArray' with possible answers
  var answerSixArray = ['biology', 'chemistry', 'physics', 'astronomy'];
    // If statement tries to match userAnswerFive against answerSixArray
  if (answerSixArray.indexOf(userAnswerSix.toLowerCase()) !== -1) {
    // Do something
    alert('Correct, ' + userAnswerSix + ' is a subject I taught!');
    //Log user's correct answer to console.
    console.log('User\'s answer to question 6, \"' + userAnswerSix + '\" matches an array element and is a correct response.');
    numCorrectResponses += 1;
  } else {
    // Do something else
    alert('Incorrect, ' + userAnswerSix + ' is NOT a subject I taught!');
    //Log user's incorrect answer to console.
    console.log('User\'s answer to question 6, \"' + userAnswerSix + '\" does NOT match an array element and is NOT a correct response.');
  }
  // Log the number of correct answers so far
  console.log('The user has answered ' + numCorrectResponses + ' questions correctly so far.')

  // Ask question 7

  var numAnswerSevenTries = 0;
  do {
    numAnswerSevenTries += 1;
    console.log('This is try ' + numAnswerSevenTries + '.');
    var userAnswerSeven = prompt('How old am I?');
    console.log('Player\'s response to question 7 is \"' + userAnswerSeven + '\".');
    if (userAnswerSeven > 31) {
      alert('Try ' + numAnswerSevenTries + ' of 4. Too high.  Guess again.');
      console.log('The user\'s last entry was too high.');
    } else if (userAnswerSeven < 31) {
      alert('Try ' + numAnswerSevenTries + ' of 4. Too low.  Guess again.')
      console.log('The user\'s last entry was too low.');
    }
    // 'while' statement causes the 'do' loop to repeat until question is answered correctly or they run out of tries.
  } while (userAnswerSeven != 31 && numAnswerSevenTries < 4)
console.log('User guessed ' + numAnswerSevenTries + ' times.');

if (userAnswerSeven == 31) {
  alert('Correct, I am 31 years old.');
  numCorrectResponses += 1;
}
else {
  alert('Sorry, you ran out of tries.');
}
// Log the number of correct answers so far
console.log('The user has answered ' + numCorrectResponses + ' questions correctly so far.')

// Ask question 8
// Define array 'answerEightArray' with possible answers
var answerEightArray = ['Mexico', 'Germany', 'France', 'England', 'Scotland', 'Poland'];
var answerEightArrayAsString = answerEightArray.join(', '); // gives 'Mexico, Germany, France...
var numAnswerEightTries = 0;
do {
  numAnswerEightTries += 1;
  console.log('This is try ' + numAnswerEightTries + '.');
  var userAnswerEight = prompt('Guess a foreign country I\'ve visited (case sensitive).');
  //Console returns player's answer 'userAnswerEight'
  console.log('Player\'s response to question 8 is \"' + userAnswerEight + '\".');

    if (answerEightArray.indexOf(userAnswerEight) !== -1) {
    console.log(userAnswerEight + ' is a correct response.')
  }
    else {
      alert('Try ' + numAnswerEightTries + ' of 6. Incorrect, ' + userAnswerEight + ' is NOT a country I\'ve visited.  Try again!');
      console.log(userAnswerEight + ' is NOT a correct response.');
    }
  // 'while' statement causes the 'do' loop to repeat until question is answered correctly or they run out of tries.
} while (answerEightArray.indexOf(userAnswerEight) === -1 && numAnswerEightTries < 6)
  console.log('User guessed ' + numAnswerEightTries + ' times.');

  if (numAnswerEightTries === 6) {
    console.log('User ran out of tries.');
    alert('Sorry, you ran out of tries.  The possible correct answers were ' + answerEightArrayAsString + '.');
  }

  else {
    console.log('User\'s answer to question 8, \"' + userAnswerEight + '\" matches an array element and is a correct response.');
    alert('Correct, all the possible answers were ' + answerEightArrayAsString + '.');
    numCorrectResponses += 1;
  }
  // Log the number of correct answers so far
  console.log('The user has answered ' + numCorrectResponses + ' questions correctly.')

  // Tell the user how many questions they answered correctly.
  if (numCorrectResponses < 4) {
      alert(userName + ', not so great!  You only answered ' + numCorrectResponses + ' out of 8 questions correctly, ' + (numCorrectResponses / 8 * 100) + '%');
  } else if (numCorrectResponses > 4 && numCorrectResponses <7) {
      alert(userName + ', not bad!  You answered ' + numCorrectResponses + ' out of 8 questions correctly, ' + (numCorrectResponses / 8 * 100) + '%');
  } else {
      alert(userName + ', very good!  You answered ' + numCorrectResponses + ' out of 8 questions correctly, ' + (numCorrectResponses / 8 * 100) + '%');
  }
}
