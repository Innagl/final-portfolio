const input = document.querySelector("#input-field");

const song = document.querySelectorAll(".item");


input.addEventListener("keyup", function (event) {
   const word = event.target.value.toLocaleLowerCase();

   song.forEach(item => {
      item.querySelector("h3").textContent.toLocaleLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none")
   })
})