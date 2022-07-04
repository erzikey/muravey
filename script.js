let phrases = [
  {
    text: "муравью хуй приделать",
    image: "https://i.ibb.co/8jZgFJS/image.jpg",
  },
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector(".button");
let phrase = document.querySelector(".phrase");
let advice = document.querySelector(".advice");
let image = document.querySelector(".image");

button.addEventListener("click", function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, "textContent", randomElement.text);
  smoothly(image, "src", randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = "33px";
  } else {
    advice.style.fontSize = "42px";
  }
});
