// function convertCurrency() {
//   let amount = parseFloat(document.getElementById("amount").value);
//   let fromCurrency = document.getElementById("fromCurrency").value;
//   let toCurrency = document.getElementById("toCurrency").value;

//   // Replace this with actual conversion rates or an API call
//   let conversionRate = 1.2; // Example conversion rate

//   let result = amount * conversionRate;

// //   document.getElementById("result").innerHTML =
//  document.getElementById("result").innerText = `${result} ${to}`;}

async function convert() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/de5c65e2d7930d164bdabac6/latest/${from}`
  );
  const data = await response.json();
  const rate = data.conversion_rates[to];
  const result = (amount * rate).toFixed(2);

  document.getElementById("result").innerText = `${result} ${to}`;
}
