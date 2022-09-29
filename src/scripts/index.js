let selectedCrypto = "";
let selectedCurrency = "";

const asyncCrypto = async () => {
  // const crypro = await cryptoSelected();
  // console.log("Crypto is ", crypro);

  if (!selectedCrypto || !selectedCurrency) return;

  const response = await fetch(
    `https://api.coinbase.com/v2/prices/${selectedCrypto}-${selectedCurrency}/spot`
  );

  const data = await response.json();
  // console.log(data.data.amount);
  calculation(+data.data.amount);
};

// function cryptoSelected() {
//   return new Promise(() => {

document.querySelector("#select-crypto").addEventListener("change", (e) => {
  selectedCrypto = e.target.value;
  asyncCrypto();
});

document.querySelector("#select-currency").addEventListener("change", (e) => {
  selectedCurrency = e.target.value;
  asyncCrypto();
});

function calculation(data) {
  // console.log(data);
  const input = document.querySelector("#input1");
  const output = document.querySelector("#output");
  output.value = data * input.value;
  if (!input) return;
  input.addEventListener("change", () => {
    // console.log(input.value);
    output.value = data * input.value;
  });
}
