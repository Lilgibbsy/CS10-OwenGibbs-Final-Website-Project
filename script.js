//Button
document.getElementById("btn").addEventListener("click", response);
//answer array
const answers = [
  "thor",
  "thorodinson",
  "thor odinson",
  "black widow",
  "blackwidow",
  "super",
  "bow",
  "abow",
  "a bow",
  "a bow and arrow",
  "bow and arrow",
  "bow n arrow",
  "thehulk",
  "the hulk",
  "hulk",
  "nickfury",
  "nick fury",
  "thor",
  "thorodinson",
  "thor odinson",
  "ironman",
  "iron man",
  "tony stark",
  "tonystark",
  "captain america",
  "captainamerica",
  "the idea was to bring together a group of of remarkable people to see if they could become something more. to see if they could work together when we needed them to, to fight the battles that we never could",
  "to fight the battles that we never could",
];
//Function
function response() {
  //Question 1  *in stands for input  *q stands for question
  //Input
  let inOne = document.getElementById("questionOne").value;
  let resultOne;
  //Process
  if (
    inOne.toLowerCase() == answers[0] ||
    inOne.toLowerCase() == answers[1] ||
    inOne.toLowerCase() == answers[2]
  ) {
    resultOne = 1;
    //Output
    document.getElementById("questionOne").style.borderColor = "green";
    document.getElementById("qOneResponse").innerHTML = "Correct!";
  } else if (inOne === "") {
    resultOne = 0;
    //Output
    document.getElementById("questionOne").style.borderColor = "black";
    document.getElementById("qOneResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultOne = 0;
    //Output
    document.getElementById("questionOne").style.borderColor = "red";
    document.getElementById("qOneResponse").innerHTML = "Incorrect!";
  }
  //Question 2
  //Input
  let inTwo = document.getElementById("questionTwo").value;
  let resultTwo;
  //Process
  if (inTwo.toLowerCase() == answers[3] || inTwo.toLowerCase() == answers[4]) {
    resultTwo = 1;
    //Output
    document.getElementById("questionTwo").style.borderColor = "green";
    document.getElementById("qTwoResponse").innerHTML = "Correct!";
  } else if (inTwo === "") {
    resultTwo = 0;
    //Output
    document.getElementById("questionTwo").style.borderColor = "black";
    document.getElementById("qTwoResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultTwo = 0;
    //Output
    document.getElementById("questionTwo").style.borderColor = "red";
    document.getElementById("qTwoResponse").innerHTML = "Incorrect!";
  }
  //Question 3
  //Input
  let inThree = document.getElementById("questionThree").value;
  let resultThree;
  //Process
  if (inThree.toLowerCase() == answers[5]) {
    resultThree = 1;
    //Output
    document.getElementById("questionThree").style.borderColor = "green";
    document.getElementById("qThreeResponse").innerHTML = "Correct!";
  } else if (inThree === "") {
    resultThree = 0;
    //Output
    document.getElementById("questionThree").style.borderColor = "black";
    document.getElementById("qThreeResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultThree = 0;
    //Output
    document.getElementById("questionThree").style.borderColor = "red";
    document.getElementById("qThreeResponse").innerHTML = "Incorrect!";
  }
  //Question 4
  //Input
  let inFour = document.getElementById("questionFour").value;
  let resultFour;
  //Process
  if (
    inFour.toLowerCase() == answers[6] ||
    inFour.toLowerCase() == answers[7] ||
    inFour.toLowerCase() == answers[8] ||
    inFour.toLowerCase() == answers[9] ||
    inFour.toLowerCase() == answers[10] ||
    inFour.toLowerCase() == answers[11]
  ) {
    resultFour = 1;
    //Output
    document.getElementById("questionFour").style.borderColor = "green";
    document.getElementById("qFourResponse").innerHTML = "Correct!";
  } else if (inFour === "") {
    resultFour = 0;
    //Output
    document.getElementById("questionFour").style.borderColor = "black";
    document.getElementById("qFourResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultFour = 0;
    //Output
    document.getElementById("questionFour").style.borderColor = "red";
    document.getElementById("qFourResponse").innerHTML = "Incorrect!";
  }
  //Question 5
  //Input
  let inFive = document.getElementById("questionFive").value;
  let resultFive;
  //Process
  if (
    inFive.toLowerCase() == answers[12] ||
    inFive.toLowerCase() == answers[13] ||
    inFive.toLowerCase() == answers[14]
  ) {
    resultFive = 1;
    //Output
    document.getElementById("questionFive").style.borderColor = "green";
    document.getElementById("qFiveResponse").innerHTML = "Correct!";
  } else if (inFive === "") {
    resultFive = 0;
    //Output
    document.getElementById("questionFive").style.borderColor = "black";
    document.getElementById("qFiveResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultFive = 0;
    //Output
    document.getElementById("questionFive").style.borderColor = "red";
    document.getElementById("qFiveResponse").innerHTML = "Incorrect!";
  }
  //Question 6
  //Input
  let inSix = document.getElementById("questionSix").value;
  let resultSix;
  //Process
  if (
    inSix.toLowerCase() == answers[15] ||
    inSix.toLowerCase() == answers[16]
  ) {
    resultSix = 1;
    //Output
    document.getElementById("questionSix").style.borderColor = "green";
    document.getElementById("qSixResponse").innerHTML = "Correct!";
  } else if (inSix === "") {
    resultSix = 0;
    //Output
    document.getElementById("questionSix").style.borderColor = "Black";
    document.getElementById("qSixResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultSix = 0;
    //Output
    document.getElementById("questionSix").style.borderColor = "red";
    document.getElementById("qSixResponse").innerHTML = "Incorrect!";
  }
  //Question 7
  //Input
  let inSeven = document.getElementById("questionSeven").value;
  let resultSeven;
  //Process
  if (
    inSeven.toLowerCase() == answers[17] ||
    inSeven.toLowerCase() == answers[18] ||
    inSeven.toLowerCase() == answers[19]
  ) {
    resultSeven = 1;
    //Output
    document.getElementById("questionSeven").style.borderColor = "green";
    document.getElementById("qSevenResponse").innerHTML = "Correct!";
  } else if (inSeven === "") {
    resultSeven = 0;
    //Output
    document.getElementById("questionSeven").style.borderColor = "black";
    document.getElementById("qSevenResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultSeven = 0;
    //Output
    document.getElementById("questionSeven").style.borderColor = "red";
    document.getElementById("qSevenResponse").innerHTML = "Incorrect!";
  }
  //Question 8
  //Input
  let inEight = document.getElementById("questionEight").value;
  let resultEight;
  //Process
  if (
    inEight.toLowerCase() == answers[20] ||
    inEight.toLowerCase() == answers[21] ||
    inEight.toLowerCase() == answers[22] ||
    inEight.toLowerCase() == answers[23]
  ) {
    resultEight = 1;
    //Output
    document.getElementById("questionEight").style.borderColor = "green";
    document.getElementById("qEightResponse").innerHTML = "Correct!";
  } else if (inEight === "") {
    resultEight = 0;
    //Output
    document.getElementById("questionEight").style.borderColor = "black";
    document.getElementById("qEightResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultEight = 0;
    //Output
    document.getElementById("questionEight").style.borderColor = "red";
    document.getElementById("qEightResponse").innerHTML = "Incorrect!";
  }
  //Question 9
  //Input
  let inNine = document.getElementById("questionNine").value;
  let resultNine;
  //Process
  if (
    inNine.toLowerCase() == answers[24] ||
    inNine.toLowerCase() == answers[25]
  ) {
    resultNine = 1;
    //Output
    document.getElementById("questionNine").style.borderColor = "green";
    document.getElementById("qNineResponse").innerHTML = "Correct!";
  } else if (inNine === "") {
    resultNine = 0;
    //Output
    document.getElementById("questionNine").style.borderColor = "black";
    document.getElementById("qNineResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultNine = 0;

    //Output
    document.getElementById("questionNine").style.borderColor = "red";
    document.getElementById("qNineResponse").innerHTML = "Incorrect!";
  }
  //Question 10
  //Input
  let inTen = document.getElementById("questionTen").value;
  let resultTen;
  //Process
  if (
    inTen.toLowerCase() == answers[26] ||
    inTen.toLowerCase() == answers[27]
  ) {
    resultTen = 1;
    //Output
    document.getElementById("questionTen").style.borderColor = "green";
    document.getElementById("qTenResponse").innerHTML = "Correct!";
  } else if (inTen === "") {
    resultTen = 0;
    //Output
    document.getElementById("questionTen").style.borderColor = "black";
    document.getElementById("qTenResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultTen = 0;
    //Output
    document.getElementById("questionTen").style.borderColor = "red";
    document.getElementById("qTenResponse").innerHTML = "Incorret!";
  }

  //Process

  //Variables for marks
  totalMark =
    resultOne +
    resultTwo +
    resultThree +
    resultFour +
    resultFive +
    resultSix +
    resultSeven +
    resultEight +
    resultNine +
    resultTen;
  percent =
    ((resultOne +
      resultTwo +
      resultThree +
      resultFour +
      resultFive +
      resultSix +
      resultSeven +
      resultEight +
      resultNine +
      resultTen) /
      10) *
    100;
  //Customized responeses depending on the mark
  if (totalMark === 8 || totalMark === 9) {
    //Ouput
    document.getElementById("customizedGradeResponse").innerHTML =
      " Excellent!";
  } else if (totalMark < 3) {
    //Ouput
    document.getElementById("customizedGradeResponse").innerHTML =
      " Did you even study?";
  } else if (totalMark === 5) {
    //Ouput
    document.getElementById("customizedGradeResponse").innerHTML =
      " Just passed!";
  } else if (totalMark === 6 || totalMark === 7) {
    //Ouput
    document.getElementById("customizedGradeResponse").innerHTML = " Not bad";
  } else if (totalMark === 4 || totalMark === 3) {
    //Ouput
    document.getElementById("customizedGradeResponse").innerHTML = " Try again";
  } else if (totalMark === 10) {
    //Ouput
    document.getElementById("customizedGradeResponse").innerHTML =
      " Perfection!";
  }
  //Marks
  //Ouput
  document.getElementById("mark").innerHTML = totalMark + "/10 -";
  document.getElementById("percent").innerHTML = "(" + percent + " %)";
}
//Cheat sheet
console.log("Cheat sheet for the quiz");
console.log("Question 1");
console.log(answers.slice(0, 3));
console.log("Question 2");
console.log(answers.slice(3, 5));
console.log("Question 3");
console.log(answers.slice(5, 6));
console.log("Question 4");
console.log(answers.slice(6, 12));
console.log("Question 5");
console.log(answers.slice(12, 15));
console.log("Question 6");
console.log(answers.slice(15, 17));
console.log("Question 7");
console.log(answers.slice(17, 20));
console.log("Question 8");
console.log(answers.slice(20, 24));
console.log("Question 9");
console.log(answers.slice(24, 26));
console.log("Question 10");
console.log(answers.slice(26, 28));
console.log("All answers are case insensitive");
