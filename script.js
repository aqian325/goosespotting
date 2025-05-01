
const cardImages = [
  "card1.jpg", "card2.jpg", "card3.jpg", "card4.jpg", "card5.jpg", "card6.jpg",
  "card7.jpg", "card8.jpg", "card9.jpg", "card10.jpg", "card11.jpg", "card12.jpg",
  "card13.jpg", "card14.jpg",
  "card17.jpg", "card18.jpg", "card19.jpg", "card20.jpg", "card21.jpg", "card22.jpg",
  "card23.jpg", "card24.jpg", "card25.jpg", "card26.jpg", "card27.jpg", "card28.jpg",
  "card29.jpg", "card30.jpg", "card31.jpg", "card32.jpg", "card33.jpg", "card34.jpg",
  "card35.jpg", "card36.jpg", "card37.jpg", "card38.jpg", "card39.jpg", "card40.jpg",
  "card41.jpg", "card42.jpg", "card43.jpg", "card44.jpg", "card45.jpg", "card46.jpg",
  "card47.jpg", "card48.jpg", "card49.jpg", "card50.jpg", "card51.jpg", "card52.jpg",
  "card53.jpg", "card54.jpg"
];

let currentIndex = 0;

function showCard(index) {
  const img = document.getElementById("cardImage");
  img.src = "cards/" + cardImages[index];
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cardImages.length;
  showCard(currentIndex);
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cardImages.length) % cardImages.length;
  showCard(currentIndex);
}

window.onload = () => showCard(currentIndex);
