document.addEventListener("DOMContentLoaded", () => {
    const itemList = document.getElementById('item-list');
    const cartMessage = document.getElementById('cart-message');

    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

    const createItemButton = (item) => {
        const button = document.createElement('button');
        button.textContent = item;
        button.addEventListener('click', () => addToCart(item));
        return button;
    };

    const addToCart = (item) => {
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        cart.push(item);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        updateCartMessage();
    };

    const updateCartMessage = () => {
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        if (cart.length > 0) {
            cartMessage.textContent = `You previously had ${cart.length} items in your cart`;
        } else {
            cartMessage.textContent = '';
        }
    };

    items.forEach(item => {
        const itemButton = createItemButton(item);
        itemList.appendChild(itemButton);
    });

    updateCartMessage();
});
