const scores = ["Hole-in-one!", "Double Eagle", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
const scoreBtn = document.querySelector("#scoreBtn");
const scoreTxt = document.querySelector("#scoreTxt");
const parLbl = document.querySelector("#parLbl");
const strokeLbl = document.querySelector("#strokeLbl");
const holePar = document.querySelector("#holePar");
const holeStroke = document.querySelector("#holeStroke");
const nightBtn = document.getElementById("dnBtn");
const holeOne = document.querySelector(".hole-one");
const holeTwo = document.querySelector(".hole-two");
const holeThree = document.querySelector(".hole-three");
const holeFour = document.querySelector(".hole-four");
const holeFive = document.querySelector(".hole-five");
const holeSix = document.querySelector(".hole-six");
const holeSeven = document.querySelector(".hole-seven");
const holeEight = document.querySelector(".hole-eight");
const holeNine = document.querySelector(".hole-nine");
const holeTen = document.querySelector(".hole-ten");
const holeEleven = document.querySelector(".hole-eleven");
const holeTwelve = document.querySelector(".hole-twelve");
const holeThirteen = document.querySelector(".hole-thirteen");
const holeFourteen = document.querySelector(".hole-fourteen");
const holeFifteen = document.querySelector(".hole-fifteen");
const holeSixteen = document.querySelector(".hole-sixteen");
const holeSeventeen = document.querySelector(".hole-seventeen");
const holeEighteen = document.querySelector(".hole-eighteen");
const scoreOne = document.querySelector(".score-one");
const scoreTwo = document.querySelector(".score-two");
const scoreThree = document.querySelector(".score-three");
const scoreFour = document.querySelector(".score-four");
const scoreFive = document.querySelector(".score-five");
const scoreSix = document.querySelector(".score-six");
const scoreSeven = document.querySelector(".score-seven");
const scoreEight = document.querySelector(".score-eight");
const scoreNine = document.querySelector(".score-nine");
const scoreTen = document.querySelector(".score-ten");
const scoreEleven = document.querySelector(".score-eleven");
const scoreTwelve = document.querySelector(".score-twelve");
const scoreThirteen = document.querySelector(".score-thirteen");
const scoreFourteen = document.querySelector(".score-fourteen");
const scoreFifteen = document.querySelector(".score-fifteen");
const scoreSixteen = document.querySelector(".score-sixteen");
const scoreSeventeen = document.querySelector(".score-seventeen");
const scoreEighteen = document.querySelector(".score-eighteen");
const dnBtn = document.querySelector("#dnBtn");
const bgDiv = document.querySelector(".container");

let bgState = 1;
let par;
let strokes;
let holeScore = "";

function checkValues() {

    par = holePar.value;
    strokes = holeStroke.value;

    par = Number(par);
    strokes = Number(strokes);

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

function setValues() {
    par = holePar.value;
    strokes = holeStroke.value;

    par = Number(par);
    strokes = Number(strokes);

    function scoreRun(par, strokes) {
        if (!par || !strokes) {
            return scoreTxt.textContent = "Missing or Invalid Values!";
        } else if (strokes == 1) {
            holeScore = scores[0];
            scoreTxt.textContent = `You got a ${scores[0]}!`;
        } else if (strokes <= par -3) {
            holeScore = scores[1];
            scoreTxt.textContent = `You got a ${scores[1]}!`;
        } else if (strokes <= par -2) {
            holeScore = scores[2];
            scoreTxt.textContent = `You got an ${scores[2]}!`;
        } else if (strokes == par -1) {
            holeScore = scores[3];
            scoreTxt.textContent = `You got a ${scores[3]}!`;
        } else if (strokes === par) {
            holeScore = scores[4];
            scoreTxt.textContent = `You're on ${scores[4]}!`;
        } else if (strokes == par + 1) {
            holeScore = scores[5];
            scoreTxt.textContent = `That's a ${scores[5]}!`;
        } else if (strokes == par + 2) {
            holeScore = scores[6];
            scoreTxt.textContent = `That's a ${scores[6]}!`;
        } else if (strokes >= par + 3) {
            holeScore = scores[7];
            scoreTxt.textContent = `Pack up and ${scores[7]}`;
        }
      }

      scoreRun(par, strokes);

    if(holeOne.textContent === '-'){
      holeOne.textContent = strokes;
      scoreOne.textContent = holeScore;

    } else if(holeOne.textContent >= 1 && holeTwo.textContent === '-') {
      holeTwo.textContent = strokes;
      scoreTwo.textContent = holeScore;

    } else if(holeTwo.textContent >= 1 && holeThree.textContent === '-') {
      holeThree.textContent = strokes;
      scoreThree.textContent = holeScore;

    } else if(holeThree.textContent >= 1 && holeFour.textContent === '-') {
      holeFour.textContent = strokes;
      scoreFour.textContent = holeScore;

    } else if(holeFour.textContent >= 1 && holeFive.textContent === '-') {
      holeFive.textContent = strokes;
      scoreFive.textContent = holeScore;

    } else if(holeFive.textContent >= 1 && holeSix.textContent === '-') {
      holeSix.textContent = strokes;
      scoreSix.textContent = holeScore;

    } else if(holeSix.textContent >= 1 && holeSeven.textContent === '-') {
      holeSeven.textContent = strokes;
      scoreSeven.textContent = holeScore;

    } else if(holeSeven.textContent >= 1 && holeEight.textContent === '-') {
      holeEight.textContent = strokes;
      scoreEight.textContent = holeScore;

    } else if(holeEight.textContent >= 1 && holeNine.textContent === '-') {
      holeNine.textContent = strokes;
      scoreNine.textContent = holeScore;

    } else if(holeNine.textContent >= 1 && holeTen.textContent === '-') {
      holeTen.textContent = strokes;
      scoreTen.textContent = holeScore;

    } else if(holeTen.textContent >= 1 && holeEleven.textContent === '-') {
      holeEleven.textContent = strokes;
      scoreEleven.textContent = holeScore;

    } else if(holeEleven.textContent >= 1 && holeTwelve.textContent === '-') {
      holeTwelve.textContent = strokes;
      scoreTwelve.textContent = holeScore;

    } else if(holeTwelve.textContent >= 1 && holeThirteen.textContent === '-') {
      holeThirteen.textContent = strokes;
      scoreThirteen.textContent = holeScore;

    } else if(holeThirteen.textContent >= 1 && holeFourteen.textContent === '-') {
      holeFourteen.textContent = strokes;
      scoreFourteen.textContent = holeScore;

    } else if(holeFourteen.textContent >= 1 && holeFifteen.textContent === '-') {
      holeFifteen.textContent = strokes;
      scoreFifteen.textContent = holeScore;

    } else if(holeFifteen.textContent >= 1 && holeSixteen.textContent === '-') {
      holeSixteen.textContent = strokes;
      scoreSixteen.textContent = holeScore;

    } else if(holeSixteen.textContent >= 1 && holeSeventeen.textContent === '-') {
      holeSeventeen.textContent = strokes;
      scoreSeventeen.textContent = holeScore;

    } else{
      holeEighteen.textContent = strokes;
      scoreEighteen.textContent = holeScore;

    }
    strokes = 0;
    holePar.value = "";
    holeStroke.value = "";
}

function resetValues() {
  strokes = 0;
  scoreTxt.textContent = "Score Here:";
  holePar.value = "";
  holeStroke.value = "";
  holeOne.textContent = '-'
  holeTwo.textContent = '-'
  holeThree.textContent = '-'
  holeFour.textContent = '-'
  holeFive.textContent = '-'
  holeSix.textContent = '-'
  holeSeven.textContent = '-'
  holeEight.textContent = '-'
  holeNine.textContent = '-'
  holeTen.textContent = '-'
  holeEleven.textContent = '-'
  holeTwelve.textContent = '-'
  holeThirteen.textContent = '-'
  holeFourteen.textContent = '-'
  holeFifteen.textContent = '-'
  holeSixteen.textContent = '-'
  holeSeventeen.textContent = '-'
  holeEighteen.textContent = '-'

  scoreOne.textContent = '-'
  scoreTwo.textContent = '-'
  scoreThree.textContent = '-'
  scoreFour.textContent = '-'
  scoreFive.textContent = '-'
  scoreSix.textContent = '-'
  scoreSeven.textContent = '-'
  scoreEight.textContent = '-'
  scoreNine.textContent = '-'
  scoreTen.textContent = '-'
  scoreEleven.textContent = '-'
  scoreTwelve.textContent = '-'
  scoreThirteen.textContent = '-'
  scoreFourteen.textContent = '-'
  scoreFifteen.textContent = '-'
  scoreSixteen.textContent = '-'
  scoreSeventeen.textContent = '-'
  scoreEighteen.textContent = '-'
}

function dayNight() {
  if(bgState === 1){
    bgDiv.style.backgroundColor = "rgba(237,245,225,0.70)";
    document.body.style.color = "#05386B";
    dnBtn.style.backgroundColor = "#05386B";
    holePar.style.backgroundColor = "#05386B";
    holeStroke.style.backgroundColor = "#05386B";
    holePar.style.color = "#EDF5E1";
    holeStroke.style.color = "#EDF5E1";
    bgState = 2;
  } else if(bgState === 2) {
    bgDiv.style.backgroundColor = "rgba(5,56,107,.80)";
    document.body.style.color = "#EDF5E1";
    dnBtn.style.backgroundColor = "#EDF5E1";
    holePar.style.backgroundColor = "#EDF5E1";
    holeStroke.style.backgroundColor = "#EDF5E1";
    holePar.style.color = "#05386B";
    holeStroke.style.color = "#05386B";
    bgState = 1;
  }
}