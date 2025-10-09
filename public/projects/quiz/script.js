const button = document.querySelector("#submitBtn");
button.addEventListener("click", result);

const buttonNext = document.querySelector("#btnNext");
buttonNext.addEventListener("click", goNext);

const par = document.querySelector("#show");

function result(e) {
   e.preventDefault();
   let points = 0;

   if (document.querySelector("#answerThree").checked) {
      points++;
   }
   if (document.querySelector("#answerTwo").checked) {
      points++;
   }
   if (document.querySelector("#answerFive").checked) {
      points++;
   }
   if (document.querySelector("#answerOne").checked) {
      points++;
   }
   if (document.querySelector("#answerFour").checked) {
      points++;
   }
   par.textContent = "Your points: " + points;
}

let question = 1;

function goNext(e) {
   if (question == 1) {
      document.querySelector('#divFirstQuestion').style.display = "none";
      document.querySelector('#divSecondQuestion').style.display = "block";
   }
   if (question == 2) {
      document.querySelector('#divSecondQuestion').style.display = "none";
      document.querySelector('#divThirdQuestion').style.display = "block";
   }
   if (question == 3) {
      document.querySelector('#divThirdQuestion').style.display = "none";
      document.querySelector('#divFourthQuestion').style.display = "block";
   }
   if (question == 4) {
      document.querySelector('#divFourthQuestion').style.display = "none";
      document.querySelector('#divFifthQuestion').style.display = "block";
      document.querySelector("#btnNext").style.display = "none";
      document.querySelector("#submitBtn").style.display = "block";
   }
   question++;
}