//setTimeout()

// setTimeout(function, milliseonds)

const speechBubble = document.querySelector(".bubble");

const textTime = 3000;

function showText() {
  speechBubble.innerHTML = "Hey dude!";
}

function deleteText() {
  speechBubble.innerHTML = "";
}

setTimeout(showText, textTime);

setTimeout(deleteText, 10000);

const bubble = document.querySelector(".bubble");
const speech = document.querySelector(".speech");

const time = 12000;

const bubbleBye = function bubbleGone() {
  bubble.style.display = "none";
  speech.style.display = "none";
};

setTimeout(bubbleBye, time);
