const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
"«I'm on a seafood diet. I see food, and I eat it.»", 
"«Laughter is the best medicine, but if you laugh for no reason, you might need medicine.»", 
"«The best way to predict your future is to create it. Or just ask a fortune cookie.»", 
"«Life is short. Smile while you still have teeth.»", 
"«If you think nobody cares if you’re alive, try missing a couple of car payments.»", 
"«A day without laughter is a day wasted.»", 
"«I’m not arguing, I’m just explaining why I’m right.»", 
"«Common sense is like deodorant. The people who need it most never use it.»", 
]

  
button.addEventListener("click", function () {

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
    document.querySelector("#icon").style.display = "block";
    document.querySelector("#heading").style.display = "none";
    
 
 
 }) 
  
   