const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");

function increaseCounter() {
    const currentValue = counterValueEl.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber + 1;
    if (newValue > 5) {
        newValue = 5;
        counterEl.classList.add("counter--limit");
        counterTitleEl.innerHTML = "Limit reached! Buy <b>PRO</b> for more.";
    }
    counterValueEl.textContent = newValue;
}

increaseButtonEl.addEventListener("click", increaseCounter);

decreaseButtonEl.addEventListener("click", function() {
    counterEl.classList.remove("counter--limit");
    const currentValue = counterValueEl.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber - 1;
    if (newValue < 0) newValue = 0;
    counterValueEl.textContent = newValue;
});

resetButtonEl.addEventListener("click", function() {
    counterValueEl.textContent = 0;
});

document.addEventListener("keydown", increaseCounter);
