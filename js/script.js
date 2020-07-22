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

// add deposit amount

const depositBtn = document.querySelector(".deposit_btn");

depositBtn.addEventListener("click", () => {
  const depositInput = parseFloat(document.querySelector('.amount_form [name="deposit"]').value);
  const currentAmount = parseFloat(document.querySelector(".deposit span").innerText);
  let totalAmount = depositInput + currentAmount;
  document.querySelector(".deposit span").innerText = totalAmount;
  document.querySelector('.amount_form [name="deposit"]').value = "";
});
