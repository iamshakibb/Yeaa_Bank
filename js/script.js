// login form disappear and dashboard appear
const logInBtn = document.querySelector(".log_btn");

logInBtn.addEventListener("click", () => {
  const emailInput = document.querySelector('.login_form [name="email"]').value;
  const passwordInput = document.querySelector('.login_form [name="password"]').value;
  if (emailInput.length === 0 || passwordInput.length === 0) {
    alert("please Enter the proper info");
  } else {
    const logoInForm = document.querySelector(".login");
    logoInForm.style.display = "none";
    const dashboard = document.querySelector(".dashboard");
    dashboard.style.display = "block";
  }
});
// login form disappear and dashboard appear

// this function is for getting the value of deposit and withdraw input .
function getInput(querySelector) {
  const val = document.querySelector(querySelector).value;
  document.querySelector(querySelector).value = "";
  return Math.floor(val);
}

//this function is for showing deposit withdraw and currentBalance value.
function balanceUpdate(querySelector, amount) {
  const currentAmount = document.querySelector(querySelector).innerText;
  let totalAmount = Math.floor(currentAmount) + Math.floor(amount);
  document.querySelector(querySelector).innerText = totalAmount;
}

// add deposit amount and current amount

const depositBtn = document.querySelector(".deposit_btn");

depositBtn.addEventListener("click", () => {
  depositInput = getInput('.deposit_input [name="deposit"]');
  balanceUpdate(".deposit span", depositInput);
  balanceUpdate(".current_balance span", depositInput);
});
// add deposit amount and current amount

// withdraw amount

const withdrawBtn = document.querySelector(".withdraw_btn");

withdrawBtn.addEventListener("click", () => {
  withdrawInput = getInput('.withdraw_input [name="withdraw"]');
  balanceUpdate(".withdraw span", withdrawInput);
  balanceUpdate(".current_balance span", -1 * withdrawInput);
});
// withdraw amount
