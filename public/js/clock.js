const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();


document.addEventListener("click", (event) => {
    const starDiv = document.createElement('div');

    starDiv.classList.add("star")

    starDiv.style.top = randomInt(2, 98) + "%";
    starDiv.style.left = randomInt(2, 98) + "%";
    
    document.body.append(starDiv);
})

function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloat(min, max, fixed) {
    let float = Math.random() * (max - min + 1) + min;
    return float.toFixed(fixed);
}