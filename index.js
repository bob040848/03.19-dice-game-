const dice = document.getElementById("dice-button");
const dicegame = () => {
  let randomDice = Math.floor(Math.random() * 6 + 1);
  let diceLocation = "img/" + "dice-" + randomDice + ".png";
  let images1 = document.querySelectorAll("img")[0];
  images1.setAttribute("src", diceLocation);

  let randomDice2 = Math.floor(Math.random() * 6 + 1);
  let diceLocation2 = "img/" + "dice-" + randomDice2 + ".png";
  let images2 = document.querySelectorAll("img")[1];
  images2.setAttribute("src", diceLocation2);

  if (randomDice > randomDice2) {
    document.querySelector("h1").innerHTML = "Player-1 Win!";
  } else if (randomDice < randomDice2) {
    document.querySelector("h1").innerHTML = "Player-2 Win!";
  } else if ((randomDice = randomDice2)) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else {
    document.querySelector("h1").innerHTML = "Error";
  }

  dice.innerHTML = "Play Again";
};
