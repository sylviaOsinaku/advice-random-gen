const adviceText = document.querySelector(".adviceText");
console.log(adviceText);
const iconDice = document.querySelector(".iconDice");
const adviceId = document.querySelector(".advice-id");
console.log(iconDice);

`https://api.adviceslip.com/advice/{slip_id}`;
const getRandomNumber = function () {
  const randomNum = Math.floor(Math.random() * 224) + 1;
  console.log(randomNum);
  return randomNum;
};

const displayAdvice = function (data) {
  adviceText.textContent = `"${data.slip.advice}"`;
  adviceId.textContent = data.slip.id;
};

const fetchAdvice = function () {
  fetch(`https://api.adviceslip.com/advice/${getRandomNumber()}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch advice ${response.status}`);
      console.log(response);
      return response.json();
    })
    .then((data) => {
      displayAdvice(data);
      console.log(data.slip);
    })
    .catch((err) => console.log(`something went wrong ${err}`))
    .finally(() => (adviceText.style.opacity = 1));
};

iconDice.addEventListener("click", function () {
  console.log("hey");
  fetchAdvice();
});
