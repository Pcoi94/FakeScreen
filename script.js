var percentageElement = document.getElementById("percentage");
var percentage = 0;

function process() {
  percentage += parseInt(Math.random() * 10);
  if (percentage > 100) {
    percentage = 100;
  }
  percentageElement.innerText = percentage;
  processInterval();
}

function processInterval() {
  setTimeout(process, Math.random() * 100000)
}
processInterval();