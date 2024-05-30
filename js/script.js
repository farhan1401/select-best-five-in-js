function playerNameSelect(playerNameId) {
  const playerList = document.getElementById("player-list");
  const playerNameElement = document.getElementById(playerNameId);
  const playerName = playerNameElement.innerText;

  const playerNames = playerList.getElementsByTagName("li");
  for (let i = 0; i < playerNames.length; i++) {
    if (playerNames[i].innerText === playerName) {
      alert("Player already selected!");
      return;
    }
  }

  const li = document.createElement("li");
  li.innerText = playerName;
  playerList.appendChild(li);
}

document.getElementById("messi-btn").addEventListener("click", function () {
  const playerName = playerNameSelect("messi-name");
});

document.getElementById("neymar-btn").addEventListener("click", function () {
  const playerName = playerNameSelect("neymar-name");
});

document.getElementById("mbappe-btn").addEventListener("click", function () {
  const playerName = playerNameSelect("mbappe-name");
});

document.getElementById("vitor-btn").addEventListener("click", function () {
  const playerName = playerNameSelect("vitor-name");
});

document.getElementById("ramos-btn").addEventListener("click", function () {
  const playerName = playerNameSelect("ramos-name");
});

document.getElementById("reneto-btn").addEventListener("click", function () {
  const playerName = playerNameSelect("reneto-name");
});

function getInputFieldValueById(inputFieldId) {
  const perPlayerElement = document.getElementById(inputFieldId);
  const perPlayerValueString = perPlayerElement.value;
  const perPlayerValue = parseInt(perPlayerValueString);
  perPlayerElement.value = "";
  return perPlayerValue;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const perPlayerValue = getInputFieldValueById("per-player");

  const playerList = document.getElementById("player-list");
  const playerNames = playerList.getElementsByTagName("li");
  const playerName = playerNames.length;
  const calculatePlayerValue = perPlayerValue * playerName;
  if (isNaN(calculatePlayerValue)) {
    alert("please provid a valid number");
    return;
  }
  const playerExpenseElement = document.getElementById("player-expense");
  playerExpenseElement.innerText = calculatePlayerValue;
});

document
  .getElementById("calculate-total-btn")
  .addEventListener("click", function () {
    const playerExpenseElement = document.getElementById("player-expense");
    const playerExpenseString = playerExpenseElement.innerText;
    const playerExpense = parseFloat(playerExpenseString);

    const managerFieldElement = getInputFieldValueById("manager-field");
    const coatchFieldElement = getInputFieldValueById("coatch-field");

    const totalElement =
      playerExpense + managerFieldElement + coatchFieldElement;
    if (isNaN(totalElement)) {
      alert("please provid a valid number");
      return;
    }
    const total = document.getElementById("total");
    total.innerText = totalElement;
  });
