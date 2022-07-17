const scores = ["Hole-in-one!", "Double Eagle", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
const scoreBtn = document.querySelector("#scoreBtn");
const scoreTxt = document.querySelector("#scoreTxt");
const parLbl = document.querySelector("#parLbl");
const strokeLbl = document.querySelector("#strokeLbl");
const holePar = document.querySelector("#holePar");
const holeStroke = document.querySelector("#holeStroke");

let holeNum = 1;
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

var table = document.createElement('table');
table.classList.add('table');

var thead = document.createElement('thead');
var headRow = document.createElement('tr');
var columnNames = ["Hole", "Strokes"];

for (var i = 0; i < 2; i++) {
  var th = document.createElement('th');
  th.appendChild(document.createTextNode(columnNames[i]));
  headRow.appendChild(th);
}

thead.appendChild(headRow);

var tbody = document.createElement('tbody');

for (var i = 0; i < 18; i++) {
  var tr = document.createElement('tr');

  for (var j = 0; j < 2; j++) {
    var td = document.createElement('td');

    if (j == 1) {
      td.classList.add("input");
      var input = document.createElement('input');
      input.type = "text";
      td.appendChild(input);
      tr.appendChild(td);
      input.style.width = "25px";
      input.style.backgroundColor = "rgb(171, 182, 178)";
      continue;
    }

    td.appendChild(document.createTextNode(holeNum++));
    tr.appendChild(td);
  }

  tbody.appendChild(tr);
}

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table)