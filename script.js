//Button
document.getElementById("btn").addEventListener("click", response);
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
  "to fight the battles we never could",
];
//Function
function response() {
  //Question 1  *in stands for input  *q stands for question
  let inOne = document.getElementById("questionOne").value;
  let resultOne;
  if (
    inOne.toLowerCase() == answers[0] ||
    inOne.toLowerCase() == answers[1] ||
    inOne.toLowerCase() == answers[2]
  ) {
    resultOne = 1;
    document.getElementById("questionOne").style.borderColor = "green";
    document.getElementById("qOneResponse").innerHTML = "Correct!";
  } else if (inOne === "") {
    resultOne = 0;
    document.getElementById("questionOne").style.borderColor = "black";
    document.getElementById("qOneResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultOne = 0;
    document.getElementById("questionOne").style.borderColor = "red";
    document.getElementById("qOneResponse").innerHTML = "Incorrect!";
  }
  //Question 2
  let inTwo = document.getElementById("questionTwo").value;
  let resultTwo;
  if (inTwo.toLowerCase() == answers[3] || inTwo.toLowerCase() == answers[4]) {
    resultTwo = 1;
    document.getElementById("questionTwo").style.borderColor = "green";
    document.getElementById("qTwoResponse").innerHTML = "Correct!";
  } else if (inTwo === "") {
    resultTwo = 0;
    document.getElementById("questionTwo").style.borderColor = "black";
    document.getElementById("qTwoResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultTwo = 0;
    document.getElementById("questionTwo").style.borderColor = "red";
    document.getElementById("qTwoResponse").innerHTML = "Incorrect!";
  }
  //Question 3
  let inThree = document.getElementById("questionThree").value;
  let resultThree;
  if (inThree.toLowerCase() == answers[5]) {
    resultThree = 1;
    document.getElementById("questionThree").style.borderColor = "green";
    document.getElementById("qThreeResponse").innerHTML = "Correct!";
  } else if (inThree === "") {
    resultThree = 0;
    document.getElementById("questionThree").style.borderColor = "black";
    document.getElementById("qThreeResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultThree = 0;
    document.getElementById("questionThree").style.borderColor = "red";
    document.getElementById("qThreeResponse").innerHTML = "Incorrect!";
  }
  //Question 4
  let inFour = document.getElementById("questionFour").value;
  let resultFour;
  if (
    inFour.toLowerCase() == answers[6] ||
    inFour.toLowerCase() == answers[7] ||
    inFour.toLowerCase() == answers[8] ||
    inFour.toLowerCase() == answers[9] ||
    inFour.toLowerCase() == answers[10] ||
    inFour.toLowerCase() == answers[11]
  ) {
    resultFour = 1;
    document.getElementById("questionFour").style.borderColor = "green";
    document.getElementById("qFourResponse").innerHTML = "Correct!";
  } else if (inFour === "") {
    resultFour = 0;
    document.getElementById("questionFour").style.borderColor = "black";
    document.getElementById("qFourResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultFour = 0;
    document.getElementById("questionFour").style.borderColor = "red";
    document.getElementById("qFourResponse").innerHTML = "Incorrect!";
  }
  //Question 5
  let inFive = document.getElementById("questionFive").value;
  let resultFive;
  if (
    inFive.toLowerCase() == answers[12] ||
    inFive.toLowerCase() == answers[13] ||
    inFive.toLowerCase() == answers[14]
  ) {
    resultFive = 1;
    document.getElementById("questionFive").style.borderColor = "green";
    document.getElementById("qFiveResponse").innerHTML = "Correct!";
  } else if (inFive === "") {
    resultFive = 0;
    document.getElementById("questionFive").style.borderColor = "black";
    document.getElementById("qFiveResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultFive = 0;
    document.getElementById("questionFive").style.borderColor = "red";
    document.getElementById("qFiveResponse").innerHTML = "Incorrect!";
  }
  //Question 6
  let inSix = document.getElementById("questionSix").value;
  let resultSix;
  if (
    inSix.toLowerCase() == answers[15] ||
    inSix.toLowerCase() == answers[16]
  ) {
    resultSix = 1;
    document.getElementById("questionSix").style.borderColor = "green";
    document.getElementById("qSixResponse").innerHTML = "Correct!";
  } else if (inSix === "") {
    resultSix = 0;
    document.getElementById("questionSix").style.borderColor = "Black";
    document.getElementById("qSixResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultSix = 0;
    document.getElementById("questionSix").style.borderColor = "red";
    document.getElementById("qSixResponse").innerHTML = "Incorrect!";
  }
  //Question 7
  let inSeven = document.getElementById("questionSeven").value;
  let resultSeven;
  if (
    inSeven.toLowerCase() == answers[17] ||
    inSeven.toLowerCase() == answers[18] ||
    inSeven.toLowerCase() == answers[19]
  ) {
    resultSeven = 1;
    document.getElementById("questionSeven").style.borderColor = "green";
    document.getElementById("qSevenResponse").innerHTML = "Correct!";
  } else if (inSeven === "") {
    resultSeven = 0;
    document.getElementById("questionSeven").style.borderColor = "black";
    document.getElementById("qSevenResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultSeven = 0;
    document.getElementById("questionSeven").style.borderColor = "red";
    document.getElementById("qSevenResponse").innerHTML = "Incorrect!";
  }
  //Question 8
  let inEight = document.getElementById("questionEight").value;
  let resultEight;
  if (
    inEight.toLowerCase() == answers[20] ||
    inEight.toLowerCase() == answers[21] ||
    inEight.toLowerCase() == answers[22] ||
    inEight.toLowerCase() == answers[23]
  ) {
    resultEight = 1;
    document.getElementById("questionEight").style.borderColor = "green";
    document.getElementById("qEightResponse").innerHTML = "Correct!";
  } else if (inEight === "") {
    resultEight = 0;
    document.getElementById("questionEight").style.borderColor = "black";
    document.getElementById("qEightResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultEight = 0;
    document.getElementById("questionEight").style.borderColor = "red";
    document.getElementById("qEightResponse").innerHTML = "Incorrect!";
  }
  //Question 9
  let inNine = document.getElementById("questionNine").value;
  let resultNine;
  if (
    inNine.toLowerCase() == answers[24] ||
    inNine.toLowerCase() == answers[25]
  ) {
    resultNine = 1;
    document.getElementById("questionNine").style.borderColor = "green";
    document.getElementById("qNineResponse").innerHTML = "Correct!";
  } else if (inNine === "") {
    resultNine = 0;
    document.getElementById("questionNine").style.borderColor = "black";
    document.getElementById("qNineResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultNine = 0;
    document.getElementById("questionNine").style.borderColor = "red";
    document.getElementById("qNineResponse").innerHTML = "Incorrect!";
  }
  //Question 10
  let inTen = document.getElementById("questionTen").value;
  let resultTen;
  if (
    inTen.toLowerCase() == answers[26] ||
    inTen.toLowerCase() == answers[27]
  ) {
    resultTen = 1;
    document.getElementById("questionTen").style.borderColor = "green";
    document.getElementById("qTenResponse").innerHTML = "Correct!";
  } else if (inTen === "") {
    resultTen = 0;
    document.getElementById("questionTen").style.borderColor = "black";
    document.getElementById("qTenResponse").innerHTML = "PLEASE ENTER ANSWER";
  } else {
    resultTen = 0;
    document.getElementById("questionTen").style.borderColor = "red";
    document.getElementById("qTenResponse").innerHTML = "Incorret!";
  }
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
    document.getElementById("customizedGradeResponse").innerHTML =
      " Excellent!";
  } else if (totalMark < 3) {
    document.getElementById("customizedGradeResponse").innerHTML =
      " Did you even study?";
  } else if (totalMark === 5) {
    document.getElementById("customizedGradeResponse").innerHTML =
      " Just passed!";
  } else if (totalMark === 6 || totalMark === 7) {
    document.getElementById("customizedGradeResponse").innerHTML = " Not bad";
  } else if (totalMark === 4 || totalMark === 3) {
    document.getElementById("customizedGradeResponse").innerHTML = " Try again";
  } else if (totalMark === 10) {
    document.getElementById("customizedGradeResponse").innerHTML =
      " Perfection!";
  }
  //Marks
  document.getElementById("mark").innerHTML = totalMark + "/10 -";
  document.getElementById("percent").innerHTML = "(" + percent + " %)";
}
