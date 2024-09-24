let mainBalance = 5500; // Main balance starting value

function donate(inputId, defaultAmount) {
  const inputElement = document.getElementById(inputId);
  let donationAmount = parseInt(inputElement.value);

  // If no amount entered, use the defaultAmount
  if (isNaN(donationAmount) || donationAmount <= 0) {
    donationAmount = defaultAmount;
  }

  if (donationAmount > 0 && donationAmount <= mainBalance) {
    // Deduct the donation from the main balance
    mainBalance -= donationAmount;
    document.getElementById("mainBalance").innerText = `${mainBalance} BDT`;

    // Reset the input field
    inputElement.value = "";

    // Show the modal
    showModal();
  } else {
    alert(
      "Please enter a valid donation amount or ensure you have enough balance."
    );
  }
}

// Function to show the modal
function showModal() {
  const modal = document.getElementById("donationModal");
  modal.classList.remove("hidden");
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("donationModal");
  modal.classList.add("hidden");
}
