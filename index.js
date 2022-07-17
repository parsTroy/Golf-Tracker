const scores = ["Hole-in-one!", "Double Eagle", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
const scoreBtn = document.querySelector("#scoreBtn");
const scoreTxt = document.querySelector("#scoreTxt");
const parLbl = document.querySelector("#parLbl");
const strokeLbl = document.querySelector("#strokeLbl");
const holePar = document.querySelector("#holePar");
const holeStroke = document.querySelector("#holeStroke");

let par;
let strokes;

function setValues() {

    par = holePar.value;
    strokes = holeStroke.value;

    par = Number(par)
    strokes = Number(strokes)

    function scoreRun(par, strokes) {
        if (!par || !strokes) {
            return scoreTxt.textContent = "Missing or Invalid Values!";
        } else if (strokes == 1) {
          return scoreTxt.textContent = `You got a ${scores[0]}!`;
        } else if (strokes <= par -3) {
            return scoreTxt.textContent = `You got a ${scores[1]}!`;
        } else if (strokes <= par -2) {
          return scoreTxt.textContent = `You got an ${scores[2]}!`;
        } else if (strokes == par -1) {
          return scoreTxt.textContent = `You got a ${scores[3]}!`;
        } else if (strokes === par) {
          return scoreTxt.textContent = `You're on ${scores[4]}!`;
        } else if (strokes == par + 1) {
          return scoreTxt.textContent = `That's a ${scores[5]}!`;
        } else if (strokes == par + 2) {
          return scoreTxt.textContent = `That's a ${scores[6]}!`;
        } else if (strokes >= par + 3) {
          return scoreTxt.textContent = `Pack up and ${scores[7]}`;
        }
      }
      scoreRun(par, strokes);
}