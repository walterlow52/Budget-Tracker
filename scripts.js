let total = document.getElementById("total");
let cost = document.getElementById("cost");
const total_amount = document.getElementById("totalamount");
const total_expense = document.getElementById("totalexpense");
const expense = document.getElementById("expense");
const budget_amount = document.getElementById("amount");
const expense_incurred = document.getElementById("payment");
const balance = document.getElementById("balance");
const list = document.getElementById("expenditure");
let x = 0;

total_expense.addEventListener("click", () => {
  x = total.value;
  budget_amount.innerHTML = x;
  balance.innerText = x - expense_incurred.innerText;
  total.value = "";
});
