let donationBtn = document.getElementById("donation-btn");
let historyBtn = document.getElementById("history-btn");
historyBtn.addEventListener("click", function () {
  historyBtn.classList.remove("bg-white", "border-black");
  historyBtn.classList.add("bg-customGreen", "border-none");
  donationBtn.classList.remove("customGreen", "border-none");
  donationBtn.classList.add("bg-white", "border-black");

  // hide the donation section and show the history section
  const donationSection = document.getElementById("donation-section");
  donationSection.classList.add("hidden");
  const showHistorySection = document.getElementById("history-section");
  showHistorySection.classList.remove("hidden");
});
donationBtn.addEventListener("click", function () {
  donationBtn.classList.remove("bg-white", "border-black");
  donationBtn.classList.add("bg-customGreen", "border-none");
  historyBtn.classList.remove("bg-customGreen", "border-none");
  historyBtn.classList.add("bg-white", "border-black");

  // hide the history section and show the donation section
  const donationSection = document.getElementById("donation-section");
  donationSection.classList.remove("hidden");
  const showHistorySection = document.getElementById("history-section");
  showHistorySection.classList.add("hidden");
});

/* Calculation and Condition logics */

const donateBtnNoakhali = document
  .getElementById("donate-btn-noakhali")
  .addEventListener("click", function () {
    const balance = getValueByInnerText("balance");
    const donationAmount = getValueById("donation-amount-noakhali");
    if (balance < donationAmount) {
      alert("You don't have enough balance");
      return;
    }
    /* conditions */
    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Please give number");
      return;
    }
    /* conditions */
    const currentBalance = balance - donationAmount;
    document.getElementById("balance").innerText = currentBalance;
    const totalDonation = getValueByInnerText("total-donation-noakhali");
    const newTotalDonation = donationAmount + totalDonation;
    document.getElementById("total-donation-noakhali").innerText =
      newTotalDonation;
    showAndHide("modal");

    /* history */
    const donateHistoryList = document.createElement("div");
    donateHistoryList.className = "bg-white p-4 border rounded-md";
    const heading = document.getElementById("noakhali-heading").innerText;
    donateHistoryList.innerHTML = `
     <p class="text-2xl">${donationAmount.toFixed(2)} Taka is ${heading} </p>
        <p class="text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
     `;
    const donateHistoryContainer = document.getElementById("history-section");
    donateHistoryContainer.insertBefore(
      donateHistoryList,
      donateHistoryContainer.firstChild
    );
  });
const donateBtnFeni = document
  .getElementById("donate-btn-feni")
  .addEventListener("click", function () {
    const balance = getValueByInnerText("balance");
    const donationAmount = getValueById("donation-amount-feni");
    /* conditions */
    if (balance < donationAmount) {
      alert("You don't have enough balance");
      return;
    }
    /* conditions */
    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Please give number");
      return;
    }

    const currentBalance = balance - donationAmount;
    document.getElementById("balance").innerText = currentBalance;
    const totalDonation = getValueByInnerText("total-donation-feni");
    const newTotalDonation = donationAmount + totalDonation;
    document.getElementById("total-donation-feni").innerText = newTotalDonation;
    showAndHide("modal");
    /* history */
    const donateHistoryList = document.createElement("div");
    donateHistoryList.className = "bg-white p-4 border rounded-md";
    const heading = getInnerText("feni-heading");
    donateHistoryList.innerHTML = `
     <p class="text-2xl">${donationAmount.toFixed(2)} Taka is ${heading} </p>
        <p class="text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
     `;
    const donateHistoryContainer = document.getElementById("history-section");
    donateHistoryContainer.insertBefore(
      donateHistoryList,
      donateHistoryContainer.firstChild
    );
  });

const donateBtnQuota = document
  .getElementById("quota-donate-btn")
  .addEventListener("click", function () {
    const balance = getValueByInnerText("balance");
    const donationAmount = getValueById("donation-amount-quota");
    /* conditions */
    if (balance < donationAmount) {
      alert("You don't have enough balance");
      return;
    }
    /* conditions */
    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Please give number");
      return;
    }

    const currentBalance = balance - donationAmount;
    document.getElementById("balance").innerText = currentBalance;
    const totalDonation = getValueByInnerText("total-donation-quota");
    const newTotalDonation = donationAmount + totalDonation;
    document.getElementById("total-donation-quota").innerText =
      newTotalDonation;
    /* modal */
    showAndHide("modal");
    /* history */
    const donateHistoryList = document.createElement("div");
    donateHistoryList.className = "bg-white p-4 border rounded-md";
    const heading = getInnerText("quota-heading");
    donateHistoryList.innerHTML = `
     <p class="text-2xl">${donationAmount.toFixed(2)} Taka is ${heading} </p>
        <p class="text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
     `;
    const donateHistoryContainer = document.getElementById("history-section");
    donateHistoryContainer.insertBefore(
      donateHistoryList,
      donateHistoryContainer.firstChild
    );
  });
/* close modal */
document.getElementById("close-modal").addEventListener("click", function () {
  const modal = document.getElementById("modal");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
});
