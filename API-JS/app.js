// const URL ="https://catfact.ninja/fact";
// const factspara=document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// const getFacts =async () =>{
//     console.log("getting data....")
//     let response = await fetch(URL);
//     console.log(response); //JSON format
//     let data = await response.json();
//     factspara.innerText=data.fact;
// };

// function getFacts(){
//     fetch(URL)
//         .then((response)=>{
//             return response.json();
//         })
//         .then((data)=>{
//             console.log(data);
//             factspara.innerText=data.fact;
//         });
// }
// btn.addEventListener("click",getFacts);

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

const fromCurr = document.querySelector("select[name='from']");
const toCurr = document.querySelector("select[name='to']");

const msg = document.querySelector(".msg");

const amount = document.querySelector(".amount input");


// Update country flags
const updateFlag = (element) => {
    let currCode = element.value;

    let countryCode = countryList[currCode];

    let img = element.parentElement.querySelector("img");

    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};


// Populate dropdowns
for (let select of dropdowns) {

    for (let currCode in countryList) {

        let newOption = document.createElement("option");

        newOption.innerText = currCode;
        newOption.value = currCode;

        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}


// Set default currencies
fromCurr.value = "USD";
toCurr.value = "INR";


// Fetch currency data with fallback
const fetchCurrencyData = async (fromCurrency) => {

    const URL = `${BASE_URL}${fromCurrency}.json`;

    let response = await fetch(URL);

    if (!response.ok) {
        throw new Error("Unable to fetch currency data");
    }

    return await response.json();
};


// Get exchange rate
const updateExchangeRate = async () => {

    let amtVal = Number(amount.value);

    if (!Number.isFinite(amtVal) || amtVal < 0) {
        msg.innerText = "Please enter a valid amount";
        return;
    }

    let fromCurrency = fromCurr.value.toLowerCase();

    let toCurrency = toCurr.value.toLowerCase();

    try {

        msg.innerText = "Getting exchange rate...";

        let data = await fetchCurrencyData(fromCurrency);

        let rate = data[fromCurrency][toCurrency];

        if (rate === undefined) {
            throw new Error("Exchange rate not available");
        }

        let finalAmount = amtVal * rate;

        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;

    } catch (error) {

        console.error(error);

        msg.innerText = "Unable to get exchange rate. Please try again.";

    }
};


// Button click event
btn.addEventListener("click", (evt) => {

    evt.preventDefault();

    updateExchangeRate();

});


// Update rate when currencies change
fromCurr.addEventListener("change", updateExchangeRate);

toCurr.addEventListener("change", updateExchangeRate);


// Initial flags and exchange rate
updateFlag(fromCurr);
updateFlag(toCurr);

updateExchangeRate();