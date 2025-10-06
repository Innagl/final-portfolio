const button = document.querySelector("#btn");
button.addEventListener("click", function(e) {
  calculateResult(e);
});


function calculateResult(e) {
  e.preventDefault();
  const priceHome = document.querySelector("#totalCost").value;
  const downPayment = document.querySelector("#downPayment").value;
  const term = document.querySelector("#term").value;
  const annualRate = document.querySelector("#rate").value;

  if (priceHome === "" || downPayment === "" || priceHome < 1 || downPayment < 1) {
    // alert("Error");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter your information!",
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
    return;
  }


  const loan = priceHome - downPayment;
  const monthlyRate = annualRate / 12;
  const numberPayments = term * 12;

  const discountFactor = Math.pow(1 + monthlyRate, -numberPayments);
  const monthlyRateAdjustment = 1 - discountFactor;

  const monthlyPayment = (loan * monthlyRate) / monthlyRateAdjustment;



  document.querySelector("#monthly").textContent = monthlyPayment.toFixed(2);



}