function calculateTotal() {
    const quantity = Number(document.getElementById("quantity").value);
    const price = Number(document.getElementById("price").value);
    const totalPriceElement = document.getElementById("totalPrice");
    const errorMessage = document.getElementById("errorMessage");

    if (quantity < 0 || price < 0 || Number.isNaN(quantity) || Number.isNaN(price)) {
        errorMessage.textContent = "Quantity and price must be valid non-negative values.";
        totalPriceElement.textContent = "₹0.00";
        return;
    }

    errorMessage.textContent = "";

    const total = quantity * price;
    totalPriceElement.textContent = `₹${total.toFixed(2)}`;
}

document.getElementById("quantity").addEventListener("input", calculateTotal);
document.getElementById("price").addEventListener("input", calculateTotal);

calculateTotal();
