
const cartCount = document.getElementById("cartCount");
const cartButton = document.getElementById("cartButton");
const message = document.getElementById("message");

let cartItems = 0;
let messageTimer;

function showMessage(text) {
  message.textContent = text;
  message.classList.add("show");

  clearTimeout(messageTimer);
  messageTimer = setTimeout(() => {
    message.classList.remove("show");
  }, 2500);
}

document.querySelectorAll(".add").forEach((button) => {
  button.addEventListener("click", () => {
    cartItems += 1;
    cartCount.textContent = cartItems;

    showMessage(`${button.dataset.name} added to your demo cart.`);
  });
});

cartButton.addEventListener("click", () => {
  showMessage(
    cartItems === 0
      ? "Your cart is empty."
      : `Your cart contains ${cartItems} item(s).`
  );
});

document.getElementById("year").textContent =
  new Date().getFullYear();
