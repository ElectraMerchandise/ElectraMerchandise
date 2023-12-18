document.addEventListener('DOMContentLoaded', function () {
    // Function to update the cart count
    const updateCartCount = () => {
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = localStorage.getItem('cartCount') || 0;
    };

    // Function to handle the "ADD TO CART" button click
    const addToCart = (button) => {
        let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

        // Check if the button has already been clicked
        if (cartCount === 0) {
            cartCount++;
            localStorage.setItem('cartCount', cartCount);
            updateCartCount();

            // Change button text and disable it
            button.textContent = 'Added';
            button.disabled = true;
            button.style.backgroundColor = 'black';
        }
    };

    // Function to reset the cart count to zero on page load
    const resetCartCount = () => {
        localStorage.removeItem('cartCount');
    };

    // Attach click event listener to the "ADD TO CART" buttons on description pages
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', () => addToCart(button));
    });

    // Initialize cart count on page load and reset it
    resetCartCount();
    updateCartCount();
});
