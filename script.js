let currentIndex = 1; // card1 and card2 is the first front/back pair
let flipState = false;

function showCard(index) {
  const front = document.getElementById("frontImage");
  const back = document.getElementById("backImage");

  front.src = `cards/card${index}.jpg`;
  back.src = `cards/card${index + 1}.jpg`;

  const card = document.getElementById("flipCardInner");
  card.classList.remove("flipped");
  flipState = false;
}

function flipCard() {
  const card = document.getElementById("flipCardInner");
  flipState = !flipState;
  card.classList.toggle("flipped", flipState);
}

function nextCard() {
  currentIndex += 2;
  if (currentIndex === 3) currentIndex = 5; // skip card15/card16
  if (currentIndex > 53) currentIndex = 1;
  showCard(currentIndex);
}

function prevCard() {
  currentIndex -= 2;
  if (currentIndex === 3) currentIndex = 1; // skip back over card15/card16
  if (currentIndex < 1) currentIndex = 53;
  showCard(currentIndex);
}


window.onload = () => showCard(currentIndex);
