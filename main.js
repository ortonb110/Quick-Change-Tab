const btn = document.getElementById("btn");
const rateLevel = document.querySelectorAll("span");
const rateDescription = document.getElementById("description");
const inputText = document.getElementById("text");

let rateNumber;

let descriptions = ["Positive content", "Negative content", "Neutral content"];

const getNumber = () => {
  rateNumber = inputText.value;
};

const changeTab = () => {
  if (rateNumber <= 0 || rateNumber >= 4) {
    alert("Index is invalid!");
    inputText.value = "";
    inputText.focus();
  } else {
    for (let i = 0; i < rateLevel.length; i++) {
      rateLevel[i].classList.remove("active");
    }

    rateLevel[rateNumber - 1].classList.add("active");
    rateDescription.textContent = descriptions[rateNumber - 1];
    inputText.value = "";
    inputText.focus();
  }
};

btn.addEventListener("click", changeTab);

rateLevel.forEach((item, currentIndex) => {
  item.addEventListener("click", function () {
    rateDescription.textContent = "";
    for (let i = 0; i < rateLevel.length; i++) {
      rateLevel[i].classList.remove("active");
    }

    item.classList.add("active");
    rateDescription.textContent = descriptions[currentIndex];
  });
});
