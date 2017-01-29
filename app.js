//Complete guessing game app referenced from index.html
//Name function myGame
function myGame() {
  // var userName = prompt('What\'s your name?');
  // alert('Hello ' + userName + '. Let\'s begin!');
  // // Console returns player's name 'userName'
  // console.log('Player\'s name is \"' + userName + '\".')
  //
  // // We want to ask the user a question.
  // // Take their answer as input stored in a variable.
  // // Validate that their answer matches my answer.
  // // Depending on True or False, provide feedback.
  //
  // // Ask question 1
  // var userAnswerOne = prompt('Was I born in Washington (y/n)?');
  //
  // // Console returns player's answer 'userAnswerOne'
  // console.log('Player\'s response to question 1 is \"' + userAnswerOne + '\".')
  //
  // if (userAnswerOne.toLowerCase() === 'n' || userAnswerOne.toLowerCase() === 'no') {
  //   // Do something
  //    alert('Correct, I was born in Massachusetts.');
  //    //Log user's correct answer to console.
  //    console.log('User\'s answer to question 1, \"' + userAnswerOne + '\" is correct.');
  // } else {
  //   // Do something else
  //   alert('Incorrect, I was born in Massachusetts.');
  //   // Log user's incorrect answer to console.
  //   console.log('User\'s answer to question 1, \"' + userAnswerOne + '\" is incorrect.');
  // }
  //
  // // Ask question 2
  // var userAnswerTwo = prompt('Did I study computer science in college (y/n)?');
  //
  // // Console returns player's answer 'userAnswerTwo'
  // console.log('Player\'s response to question 2 is \"' + userAnswerTwo + '\".')
  //
  // if (userAnswerTwo.toLowerCase() === 'n' || userAnswerTwo.toLowerCase() === 'no') {
  //   // Do something
  //    alert('Correct, I studied Biology.');
  //    //Log user's correct answer to console.
  //    console.log('User\'s answer to question 2, \"' + userAnswerTwo + '\" is correct.');
  // } else {
  //   // Do something else
  //   alert('Incorrect, I studied Biology.');
  //   //Log user's incorrect answer to console.
  //   console.log('User\'s answer to question 2, \"' + userAnswerTwo + '\" is incorrect.');
  // }
  //
  // // Ask question 3
  // var userAnswerThree = prompt('Have I lived in California (y/n)?');
  //
  // // Console returns player's answer 'userAnswerThree'
  // console.log('Player\'s response to question 3 is \"' + userAnswerThree + '\".')
  //
  // if (userAnswerThree.toLowerCase() === 'y' || userAnswerThree.toLowerCase() === 'yes') {
  //   // Do something
  //    alert('Correct, I lived in California from 2007 through 2015.');
  //    //Log user's correct answer to console.
  //    console.log('User\'s answer to question 3, \"' + userAnswerThree + '\" is correct.');
  // } else {
  //   // Do something else
  //   alert('Incorrect, I lived in California from 2007 through 2015.');
  //   //Log user's incorrect answer to console.
  //   console.log('User\'s answer to question 3, \"' + userAnswerThree + '\" is incorrect.');
  // }
  //
  // // Ask question 4
  // var userAnswerFour = prompt('Do I have children (y/n)?');
  //
  // // Console returns player's answer 'userAnswerFour'
  // console.log('Player\'s response to question 4 is \"' + userAnswerFour + '\".')
  //
  // if (userAnswerFour.toLowerCase() === 'y' || userAnswerFour.toLowerCase() === 'yes') {
  //   // Do something
  //    alert('Correct, I have two children, Liam (5) and Darcie (2).');
  //    //Log user's correct answer to console.
  //    console.log('User\'s answer to question 4, \"' + userAnswerFour + '\" is correct.');
  // } else {
  //   // Do something else
  //   alert('Incorrect, I have two children, Liam (5) and Darcie (2).');
  //   //Log user's incorrect answer to console.
  //   console.log('User\'s answer to question 4, \"' + userAnswerFour + '\" is incorrect.');
  // }
  //   // Ask question 5
  // var userAnswerFive = prompt('Name one of my hobbies.');
  // // Console returns player's answer 'userAnswerFive'
  // console.log('Player\'s response to question 5 is \"' + userAnswerFive + '\".')
  //   // Define array 'answerFiveArray' with possible answers
  // var answerFiveArray = ['spending time with family', 'homebrewing', 'playing disc golf', 'skiing', 'rock climbing', 'welding'];
  //   // If statement tries to match userAnswerFive against answerFiveArray
  // if (answerFiveArray.indexOf(userAnswerFive.toLowerCase()) > -1) {
  //   // Do something
  //   alert('Correct, ' + userAnswerFive + ' is one of my hobbies!');
  //   //Log user's correct answer to console.
  //   console.log('User\'s answer to question 5, \"' + userAnswerFive + '\" matches an array element and is a correct response.');
  // } else {
  //   // Do something else
  //   alert('Incorrect, ' + userAnswerFive + ' is NOT one of my hobbies!');
  //   //Log user's incorrect answer to console.
  //   console.log('User\'s answer to question 5, \"' + userAnswerFive + '\" does NOT match an array element and is NOT a correct response.');
  // }
  //
  // Ask question 6
  // var userAnswerSix = prompt('Name a subject I taught.');
  //
  //   //Console returns player's answer 'userAnswerSix'
  //   console.log('Player\'s response to question 6 is \"' + userAnswerSix + '\".')
  //   // Define array 'answerSixArray' with possible answers
  // var answerSixArray = ['biology', 'chemistry', 'physics', 'astronomy'];
  //   // If statement tries to match userAnswerFive against answerFiveArray
  // if (answerSixArray.indexOf(userAnswerSix.toLowerCase()) !== -1) {
  //   // Do something
  //   alert('Correct, ' + userAnswerSix + ' is a subject I taught!');
  //   //Log user's correct answer to console.
  //   console.log('User\'s answer to question 6, \"' + userAnswerSix + '\" matches an array element and is a correct response.');
  // } else {
  //   // Do something else
  //   alert('Incorrect, ' + userAnswerSix + ' is NOT a subject I taught!');
  //   //Log user's incorrect answer to console.
  //   console.log('User\'s answer to question 6, \"' + userAnswerSix + '\" does NOT match an array element and is NOT a correct response.');
  // }

  // Ask question 7

  var numAnswerSevenTries = 0;
  do {
    numAnswerSevenTries += 1;
    console.log('This is try ' + numAnswerSevenTries + '.');
    var userAnswerSeven = prompt('How old am I?');
    console.log('Player\'s response to question 7 is \"' + userAnswerSeven + '\".');
    if (userAnswerSeven >31) {
      alert('Too high.  Guess again.');
      console.log('The user\'s last entry was too high.');
    } else if (userAnswerSeven <31) {
      alert('Too low.  Guess again.')
      console.log('The user\'s last entry was too low.');
    } else {}
  } while (userAnswerSeven != 31 && numAnswerSevenTries < 4)
console.log(numAnswerSevenTries);

}
