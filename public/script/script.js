export const script = () => {
  const cards = document.querySelectorAll(".card"),
    timeTag = document.querySelector(".time b"),
    flipsTag = document.querySelector(".flips b"),
    decks = document.querySelectorAll(".deck"),
    refreshBtn = document.querySelector(".details button");

  let maxTime = 300;
  let timeLeft = maxTime;
  let flips = 0;
  let matchedCard = 0;
  let disableDeck = false;
  let isPlaying = false;
  let cardOne, cardTwo, timer;

  function initTimer() {
    if (timeLeft <= 0) {
      return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
  }

  function flipCard({ target: clickedCard }) {
    if (!isPlaying) {
      isPlaying = true;
      timer = setInterval(initTimer, 1000);
    }
    if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
      flips++;
      flipsTag.innerText = flips;
      clickedCard.classList.add("flip");
      if (!cardOne) {
        return (cardOne = clickedCard);
      }
      cardTwo = clickedCard;
      disableDeck = true;
      let cardOneImg = cardOne.querySelector(".back-view img").name,
        cardTwoImg = cardTwo.querySelector(".back-view img").name;
      matchCards(cardOneImg, cardTwoImg);
    }
  }

  function matchCards(img1, img2) {
    if (img1 === img2) {
      matchedCard++;
      if (matchedCard == 36 && timeLeft > 0) {
        return clearInterval(timer);
      }
      cardOne.removeEventListener("click", flipCard);
      cardTwo.removeEventListener("click", flipCard);
      cardOne = cardTwo = "";
      return (disableDeck = false);
    }

    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
      cardOne.classList.remove("shake", "flip");
      cardTwo.classList.remove("shake", "flip");
      cardOne = cardTwo = "";
      disableDeck = false;
    }, 1200);
  }

  function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;
    // Shuffle only Question Cards
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    cards.forEach((card, index) => {
      card.classList.remove("flip");
      let imgTag = card.querySelector(".back-view img");
      setTimeout(() => {
        imgTag.src = `/images/questions/q${arr[index]}.png`;

        imgTag.name = arr[index];
      }, 500);
      card.addEventListener("click", flipCard);
    });

    // Shuffle only Answer Cards
    let w = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    w.sort(() => (Math.random() > 0.5 ? 1 : -1));
    decks.forEach((card, index) => {
      card.classList.remove("flip");
      let imgTag = card.querySelector(".back-view img");
      setTimeout(() => {
        if (imgTag.id == "ans") {
          imgTag.src = `/images/answers/a${w[index]}.png`;
          imgTag.name = w[index];
        }
      }, 500);
      card.addEventListener("click", flipCard);
    });
  }

  shuffleCard();

  refreshBtn.addEventListener("click", shuffleCard);
   // Question Cards
  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });
  // Answer Cards
  decks.forEach((card) => {
    card.addEventListener("click", flipCard);
  });
};
