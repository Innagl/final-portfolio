// PRINT LETTERS
let text = "SOLAR SYSTEM";

let i = 0;
const speed = 400;

function type() {
   if (i < text.length) {
      document.querySelector("#par").textContent += text.charAt(i);
      i++;
      setTimeout(type, speed)
   }
}

type();


// INPUT
const input = document.querySelector("#input");
const button = document.querySelector("#btn");

input.addEventListener("keypress", function (e) {
   if (e.keyCode === 13) {
      play();
   }
})


const answer = Math.floor(Math.random() * 9) + 1;
button.addEventListener("click", play);

function play() {
   const userNumber = document.querySelector("#input").value;
   if (userNumber < 1 || userNumber > 9) {

      Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "We have more planatsWe have 10 planets. Put a number from 1 to 9",
         //  footer: '<a href="#">Why do I have this issue?</a>'
      });

   } else if (isNaN(userNumber)) {
      Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "You need to input a number.",
         //  footer: '<a href="#">Why do I have this issue?</a>'
      });
   } else {


      if (userNumber < answer) {
         Swal.fire("This planet is further from the Sun!",
            "The computer is ahead for now.");
      } else if (userNumber > answer) {
         Swal.fire("This planet is closer to the sun!",
            "The computer is ahead for now.");
      } else {


         Swal.fire({
            title: "WIN!",
            // text: "Modal with a custom image.",
            imageUrl: "https://images.unsplash.com/photo-1531686264889-56fdcabd163f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmZldHRpfGVufDB8fDB8fHww",
            imageWidth: 600,
            imageHeight: 400,
            imageAlt: "Custom image"
         });
      }
   }
}


gsap.to(".planet", {
   duration: 6,
   ease: "bounce(0.4)",
   // ease: "back.out(10)",
   y: 25,
   yoyo: true,
   stagger: 1,
   repeat: -1
});