const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
   "«Through three cheese trees three free fleas flew. While these fleas flew, freezy breeze blew. Freezy breeze made these three trees freeze. Freezy trees made these trees' cheese freeze. That's what made these three free fleas sneeze.»",
   "«If you must cross a coarse cross cow across a crowded cow crossing, cross the cross coarse cow across the crowded cow crossing carefully.»",
   "«How much wood would a woodchuck chuck if a woodchuck could chuck wood? He would chuck, he would, as much as he could, and chuck as much wood as a woodchuck would if a woodchuck could chuck wood.»",
   "«I thought a thought. But the thought I thought wasn’t the thought I thought I thought. If the thought I thought I thought had been the thought I thought, I wouldn't have thought I thought.»",
   "«Betty Botter bought some butter? But she said the butter’s bitter? If I put it in my batter, it will make my batter bitter? But a bit of better butter will make my batter better? So 'twas better Betty Botter bought a bit of better butter»",
   "«There was a fisherman named Fisher who fished for some fish in a fissure. Till a fish with a grin, pulled the fisherman in. Now they're fishing the fissure for Fisher.»",
   "«Luke Luck likes lakes. Luke's duck likes lakes. Luke Luck licks lakes. Luck's duck licks lakes. Duck takes licks in lakes Luke Luck likes. Luke Luck takes licks in lakes duck likes»",
];

let timerId;

button.addEventListener("click", function () {
   let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
   par.textContent = randomQuote;
   par.style.display = "block";
   document.querySelector(".heading").style.display = "none";


   if (timerId) {
      clearInterval(timerId);
   }

   const timer = 0.5;
   let amountTime = timer * 60;

   function calculateTime() {
      const countDown = document.querySelector("#countdown");
      let minutes = Math.floor(amountTime / 60);
      let seconds = amountTime % 60;

      if (seconds < 10) {
         seconds = "0" + seconds;
      }

      countDown.textContent = `${minutes} : ${seconds}`;
      amountTime--;

      if (amountTime < 0) {
         clearInterval(timerId);
         countDown.textContent = "0 : 00";
      }
   }

   document.querySelector("#icon").style.display = "block";
   calculateTime();
   timerId = setInterval(calculateTime, 1000);
});