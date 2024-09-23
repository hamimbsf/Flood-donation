const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
historyBtn.addEventListener("click", function () {
  // historyBtn.classList.add("custom-green", "border-none");
  // donationBtn.classList.remove("custom-green", "border-none");
  // donationBtn.classList.add("bg-white", "border-1", "border-black");

  // hide the donation section and show the history section
  const donationSection = document.getElementById("donation-section");
  donationSection.classList.add("hidden");
});
donationBtn.addEventListener("click", function () {
  // donationBtn.classList.add("custom-green", "border-none");
  // historyBtn.classList.remove("custom-green", "border-none");
  // historyBtn.classList.add("bg-white", "border-1", "border-black");

  // hide the history section and show the donation section
  const donationSection = document.getElementById("donation-section");
  donationSection.classList.remove("hidden");
});

/* Calculation and Condition logics */

document
  .getElementById("donate-btn-noakhali")
  .addEventListener("click", function () {
    const balance = getValueByInnerText("balance");
    const donationAmount = getValueById("donation-amount-noakhali");
    if (balance < donationAmount) {
      alert("You don't have enough balance");
      return;
    }

    const currentBalance = balance - donationAmount;
    document.getElementById("balance").innerText = currentBalance;
    const totalDonation = getValueByInnerText("total-donation-noakhali");
    const newTotalDonation = donationAmount + totalDonation;
    document.getElementById("total-donation-noakhali").innerText = newTotalDonation;
    // console.log(balance, donationAmount, currentBalance);
  });
document
  .getElementById("donate-btn-feni")
  .addEventListener("click", function () {
    const balance = getValueByInnerText("balance");
    const donationAmount = getValueById("donation-amount-feni");
    if (balance < donationAmount) {
      alert("You don't have enough balance");
      return;
    }

    const currentBalance = balance - donationAmount;
    document.getElementById("balance").innerText = currentBalance;
    const totalDonation = getValueByInnerText("total-donation-feni");
    const newTotalDonation = donationAmount + totalDonation;
    document.getElementById("total-donation-feni").innerText = newTotalDonation;
    console.log(balance, donationAmount, currentBalance);
    console.log("clicked");
    
  });
document
  .getElementById("quota-donate-btn")
  .addEventListener("click", function () {
    const balance = getValueByInnerText("balance");
    const donationAmount = getValueById("donation-amount-quota");
    if (balance < donationAmount) {
      alert("You don't have enough balance");
      return;
    }

    const currentBalance = balance - donationAmount;
    document.getElementById("balance").innerText = currentBalance;
    const totalDonation = getValueByInnerText("total-donation-quota");
    const newTotalDonation = donationAmount + totalDonation;
    document.getElementById("total-donation-quota").innerText = newTotalDonation;
    console.log(balance, donationAmount, currentBalance);
    console.log("clicked");
    
  });
