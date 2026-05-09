const app = document.querySelector(".app");
const stages = Array.from(document.querySelectorAll(".stage"));
const dots = Array.from(document.querySelectorAll(".dot"));
const cards = Array.from(document.querySelectorAll(".wish-card"));
const cardButton = document.querySelector("[data-card-next]");
let step = 0;
let cardIndex = 0;

function showStep(nextStep) {
  step = Math.max(0, Math.min(nextStep, stages.length - 1));
  app.dataset.step = String(step);

  stages.forEach((stage, index) => {
    stage.classList.toggle("is-active", index === step);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === step);
  });
}

function showCard(nextIndex) {
  cardIndex = Math.max(0, Math.min(nextIndex, cards.length - 1));

  cards.forEach((card, index) => {
    card.classList.toggle("is-current", index === cardIndex);
  });

  cardButton.textContent = cardIndex === cards.length - 1 ? "点亮最后的花园" : "翻下一张";
}

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => showStep(step + 1));
});

cardButton.addEventListener("click", () => {
  if (cardIndex < cards.length - 1) {
    showCard(cardIndex + 1);
    return;
  }

  showStep(step + 1);
});

document.querySelector("[data-replay]").addEventListener("click", () => {
  cardIndex = 0;
  showCard(0);
  showStep(0);
});

showStep(0);
showCard(0);
