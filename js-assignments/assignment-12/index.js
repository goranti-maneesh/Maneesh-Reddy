const regex = {
      input: /^[0-9]+$/g,
};
let i;
let withdrawWarning = document.getElementById("withdrawWarning");
let onblurArray;
let depositButton = document.getElementById("depositButton");
let withdrawButton = document.getElementById("withdrawButton");
let showBalanceButton = document.getElementById("showBalanceButton");
let historyButton = document.getElementById("historyButton");
let inputDeposit = document.getElementById("inputDeposit");
let depositSubmitButton = document.getElementById("depositSubmitButton");
let deposit = document.getElementById("deposit");
let inputWithdraw = document.getElementById("inputWithdraw");
let withdraw = document.getElementById("withdraw");
let withdrawSubmitButton = document.getElementById("withdrawSubmitButton");
let showBankBalance = document.getElementById("showBankBalance");
let showBalance = document.getElementById("showBalance");
let table = document.getElementById("table");
let depositTimer = document.getElementById("depositTimer");
let depositTimeLeft = document.getElementById("depositTimeLeft");
let withdrawTimer = document.getElementById("withdrawTimer");
let withdrawTimeLeft = document.getElementById("withdrawTimeLeft");

class ATM {
      constructor() {
            this.mode = "";
            this.balance = 0;
            this.transactionHistory = "";
            this.inputDepositValue = 0;
            this.inputWithdrawValue = 0;
      }
      makeWithdrawal() {
            withdraw.style.display = "flex";

            i = 10;
            let withdrawSetInterval = setInterval(() => {
                  withdrawTimer.style.display = "flex";
                  withdrawTimeLeft.innerHTML = i;
                  i -= 1;
                  if (i === 0) {
                        //withdrawTimer.style.display = "none";
                        //withdraw.style.display = "none";
                        clearInterval(withdrawSetInterval);
                  }
            });

            withdrawSubmitButton.onclick = () => {
                  withdrawTimer.style.display = "none";
                  this.mode = "withdraw";
                  this.inputWithdrawValue = inputWithdraw.value;

                  if ((this.inputWithdrawValue.match(regex.input)) && (this.inputWithdrawValue <= this.balance)) {
                        this.balance = this.balance - Number(this.inputWithdrawValue);
                        createTable(this.mode, this.inputWithdrawValue, this.balance);
                  }
                  else {
                        withdrawWarning.style.display = "flex";
                        withdrawWarning.innerHTML = "Insufficient balance";
                  }
            };
            inputWithdraw.value = "";
      }
      makeDeposit() {
            deposit.style.display = "flex";

            i = 10;
            let depositSetInterval = setInterval(() => {
                  depositTimer.style.display = "flex";
                  depositTimeLeft.innerHTML = i;
                  i -= 1;
                  if (i === 0) {
                        //depositTimer.style.display = "none";
                        //deposit.style.display = "none";
                        clearInterval(depositSetInterval);
                  }
            });

            depositSubmitButton.onclick = () => {
                  depositTimer.style.display = "none";
                  this.mode = "Deposit";
                  this.inputDepositValue = inputDeposit.value;
                  if (this.inputDepositValue.match(regex.input)) {
                        this.balance = this.balance + Number(this.inputDepositValue);
                        createTable(this.mode, this.inputDepositValue, this.balance);
                  }
            };
            inputDeposit.value = "";
      }
      showBalance() {
            showBalance.style.display = "flex";
            showBankBalance.innerHTML = this.balance;
      }
}

class transactions {
      constructor() {}
      showHistory() {
            table.style.display = "flex";
      }
}

let ATMCard = new ATM();
let allTransactions = new transactions;


withdrawButton.onclick = () => {
      ATMCard.makeWithdrawal();
      updateButton(withdrawButton);
      onblurArray = [depositButton, showBalanceButton, historyButton, deposit, showBalance, table, depositTimer, depositTimeLeft];
      onblurButton(onblurArray);
};

depositButton.onclick = () => {
      ATMCard.makeDeposit();
      updateButton(depositButton);
      onblurArray = [withdrawButton, showBalanceButton, historyButton, withdraw, withdrawWarning, showBalance, table, withdrawTimer, withdrawTimeLeft];
      onblurButton(onblurArray);
};

showBalanceButton.onclick = () => {
      ATMCard.showBalance();
      updateButton(showBalanceButton);
      onblurArray = [withdrawButton, depositButton, historyButton, deposit, withdraw, withdrawWarning, table, depositTimer, depositTimeLeft, withdrawTimer, withdrawTimeLeft];
      onblurButton(onblurArray);
};

historyButton.onclick = () => {
      allTransactions.showHistory();
      updateButton(historyButton);
      onblurArray = [withdrawButton, depositButton, showBalanceButton, deposit, withdraw, withdrawWarning, showBalance, depositTimer, depositTimeLeft, withdrawTimer, withdrawTimeLeft];
      onblurButton(onblurArray);
};

let updateButton = (event) => {
      event.style.backgroundColor = "#326fd1";
      event.style.color = "white";
};

let onblurButton = (onblurButton) => {
      for (let i = 0; i < 3; i++) {
            onblurButton[i].style.backgroundColor = "white";
            onblurButton[i].style.color = "#326fd1";
      }
      for (let i = 3; i < onblurButton.length; i++) {
            onblurButton[i].style.display = "none";
      }
};

let createTable = (mode, amount, balance) => {
      let row = table.insertRow();
      row.className = "table";
      let cell1 = row.insertCell();
      let cell2 = row.insertCell();
      let cell3 = row.insertCell();
      cell1.innerHTML = mode;
      cell2.innerHTML = amount;
      cell3.innerHTML = balance;
};
