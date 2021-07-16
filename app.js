const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
randomColor=[];

btn.addEventListener("click", function () {
  const randomColor = colors[getRandomNumber()];
  // console.log(randomNumber);

  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
