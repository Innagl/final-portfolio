const button = document.querySelector("#btn");
button.addEventListener("click", calculateResult);

function calculateResult(e) {
    e.preventDefault();

    const amount = document.querySelector("#amount").value;
    const years = document.querySelector("#years").value;
    const rate = document.querySelector("#rate").value;

    if (amount === "" || years === "" || amount < 1 || years < 1) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter your information!",
          // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }

    let interestPerYear = amount * rate;
    let interestTotalPeriod = interestPerYear * years;
    let totalValue = amount + interestTotalPeriod;

    // interestTotalPeriod = interestTotalPeriod.toFixed(2);
    // totalValue = totalValue.toFixed(2);


    document.querySelector("#value").textContent = totalValue;
    document.querySelector("#interests").textContent = interestTotalPeriod;


}



// ANIMATION
gsap.from("#logo", {y: 0, rotation: 360, duration: 2, delay: 1, repeat: 100})