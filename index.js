document.querySelectorAll(".read-more").forEach((button) => {
  let isOpen = false; // Track initial state
  button.addEventListener("click", () => {
    const jobDetails = button.previousElementSibling;
    isOpen = !isOpen; // Toggle state
    jobDetails.style.display = isOpen ? "block" : "none"; // Set display based on state
    button.textContent = isOpen ? "Read Less" : "Read More"; // Update button text based on state
  });
});
function redirectToSite1() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdG8s3bAFDchunSmcR_x2S5VAL3xiJg2oQzn_WljcsRGmGo1Q/viewform",
    "http://127.0.0.1:5500/"
  );
}
function redirectToSite() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSfEQBaq0ja-m1HdbMIg4jY9hYQJVfvYmJnvUT1jp79PwgdAYg/viewform",
    "http://127.0.0.1:5500/"
  );
}
const apply = document.querySelectorAll(".apply");
apply.forEach((val) => {
  val.addEventListener("click", () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfEQBaq0ja-m1HdbMIg4jY9hYQJVfvYmJnvUT1jp79PwgdAYg/viewform",
      "_blank"
    );
  });
});
