const quoteID = document.querySelector('.quote-title span');
const quoteText = document.querySelector('.quote-text');
const btn = document.querySelector('.btn-click');
const apiURL = "https://api.adviceslip.com/advice";
//click event
btn.addEventListener("click", () => {
    //fetch data from api
    fetch(apiURL, {cache: "no-cache"})
    .then((response) => response.json())
    .then((response) => {
        let slip = response.slip;
        let id = slip.id;
        let advice = slip.advice;
        // inject to DOM
        quoteID.innerHTML = `${id}`;
        quoteText.innerHTML = `"${advice}"`
    })
    .catch((err)=> console.log(err));
});