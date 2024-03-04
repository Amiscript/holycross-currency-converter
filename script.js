function convertCurrency() {
  let amount = parseFloat(document.getElementById("amount").value);
  let fromCurrency = document.getElementById("fromCurrency").value;
  let toCurrency = document.getElementById("toCurrency").value;

  // Replace this with actual conversion rates or an API call
  let conversionRate = 1.2; // Example conversion rate

  let result = amount * conversionRate;

  document.getElementById("result").innerHTML =
    amount + " " + fromCurrency + " = " + result.toFixed(2) + " " + toCurrency;
}
