document.addEventListener("DOMContentLoaded", () => {
    const totalElement = document.querySelector(".total");
    const products = document.querySelectorAll(".card");
  
    let totalPrice = 0;
  
    products.forEach((product) => {
      const plusBtn = product.querySelector(".fa-plus-circle");
      const minusBtn = product.querySelector(".fa-minus-circle");
      const trashBtn = product.querySelector(".fa-trash-alt");
      const heartBtn = product.querySelector(".fa-heart");
      const quantityElement = product.querySelector(".quantity");
      const unitPrice = parseFloat(
        product.querySelector(".unit-price").textContent.replace("$", "").trim()
      );
  
      let quantity = 0;
  
      // Handle the "+" button
      plusBtn.addEventListener("click", () => {
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice(unitPrice);
      });
  
      // Handle the "-" button
      minusBtn.addEventListener("click", () => {
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotalPrice(-unitPrice);
        }
      });
  
      // Handle the trash button
      trashBtn.addEventListener("click", () => {
        if (quantity > 0) {
          updateTotalPrice(-unitPrice * quantity);
        }
        product.remove();
      });
  
      // Handle the heart button
      heartBtn.addEventListener("click", () => {
        heartBtn.classList.toggle("liked");
      });
    });
  
    // Update the total price
    function updateTotalPrice(amount) {
      totalPrice += amount;
      totalElement.textContent = `${totalPrice.toFixed(2)} $`;
    }
  });
  