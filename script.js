console.log("Connected");
document
  .getElementById("interview-filter")
  .addEventListener("click", function () {
    window.location.href = "interview.html";
  });
document
  .getElementById("rejected-filter")
  .addEventListener("click", function () {
    window.location.href = "rejected.html";
  });
document.getElementById("all-filter").addEventListener("click", function () {
  window.location.href = "index.html";
});

// Showing Job Count and Update
function updateCount() {
  const cards = document.getElementsByClassName("job-card");
  const count = cards.length;

  document.getElementById("job-count").innerText = count;
  document.getElementById("availableJobCount").innerText = count + " Jobs";
}

updateCount();

//Delete Button Functionality
const deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const card = button.closest(".job-card");
    card.remove();
    updateCount();
  });
});
