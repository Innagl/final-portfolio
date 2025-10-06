const timer = 2;

let amountTime = timer * 60;

function calculateTime() {
   const countDown = document.querySelector("#countdown");
   let minutes = Math.floor(amountTime / 60)
   let seconds = amountTime % 60;

   if (seconds < 10) {
      seconds = "0" + seconds;
   }

   countDown.textContent = `${minutes} : ${seconds}`
   amountTime--;

   if (amountTime < 0) {

      stopTimer();

      amountTime = 0;

      function stopTimer() {
         clearInterval(timerId)
      }
   }

}

let timerId = setInterval(calculateTime, 1000)