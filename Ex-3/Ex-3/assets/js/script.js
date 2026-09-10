// Whithout validation, the code would look like this:

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.getElementById('addToCart');
    const checkoutButton = document.getElementById('checkout');
    const quantityInput = document.getElementById('quantity');

    // Function to validate quantity
    function validateQuantity() {
        const quantity = parseInt(quantityInput.value);
        if (isNaN(quantity) || quantity < 1) {
            alert("Please enter a valid quantity (greater than 0).");
            quantityInput.focus();
            return false;
        }
        return true;
    }
    // Event listener for Add to Cart button
    addToCartButton.addEventListener('click', function () {
        if (validateQuantity()) {
            alert("Item added to cart successfully!");
            // Here you can add code to actually add the item to the cart
        }
    });
    // Event listener for Checkout button
    checkoutButton.addEventListener('click', function () {
        if (validateQuantity()) {
            alert("Proceeding to checkout...");
            // Here you can add code to handle the checkout process
        }
    });
});

// With validation, the code ensures that the quantity entered by the user is a valid number greater than 0 before allowing them to add items to the cart or proceed to checkout. If the input is invalid, an alert is shown, and the focus is returned to the quantity input field for correction.

// ============================================================
// script.js
// Client-side validation for the Shopping Cart quantity field
// ============================================================

// Wait until the whole page (HTML) has loaded before running any code
document.addEventListener('DOMContentLoaded', function () {

    // Step 1: Grab the elements we need from the page by their IDs
    const quantityInput   = document.getElementById('quantity');
    const quantityError   = document.getElementById('quantityError');
    const addToCartButton = document.getElementById('addToCart');
    const checkoutButton  = document.getElementById('checkout');


    // Step 2: One reusable function that checks if the quantity is valid
    // Returns true if valid, false if invalid
    function validateQuantity() {
        const quantity = parseInt(quantityInput.value); // convert text -> number

        if (isNaN(quantity) || quantity < 1) {
            // Invalid case: not a number, OR less than 1
            quantityError.textContent = "Please enter a valid quantity (greater than 0).";
            quantityInput.classList.add('is-invalid');   // Bootstrap red border
            quantityInput.focus();
            return false;
        }

        // Valid case: clear any old error message
        quantityError.textContent = "";
        quantityInput.classList.remove('is-invalid');
        return true;
    }


    // Step 3: Real-time validation as the user types
    // (This runs on every keystroke, not just on button click)
    quantityInput.addEventListener('input', function () {
        validateQuantity();
    });


    // Step 4: Validate when "Add to Cart" is clicked
    addToCartButton.addEventListener('click', function () {
        if (validateQuantity()) {
            alert("Item added to cart successfully!");
            // In a real app, you would add code here to store the item in the cart
        }
    });


    // Step 5: Validate when "Checkout Now" is clicked
    checkoutButton.addEventListener('click', function () {
        if (validateQuantity()) {
            alert("Proceeding to checkout...");
            // In a real app, you would add code here to handle checkout
        }
    });

});
