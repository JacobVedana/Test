// Sample JavaScript for adding products dynamically and handling "Add to Cart" functionality

const products = [
    { name: "Product 1", price: 19.99, image: "product1.jpg" },
    { name: "Product 2", price: 29.99, image: "product2.jpg" },
    { name: "Product 3", price: 39.99, image: "product3.jpg" },
    { name: "Product 4", price: 49.99, image: "product4.jpg" }
];

const productsContainer = document.querySelector('.products');
const cartItemsContainer = document.querySelector('#cart-items');
const totalPriceElement = document.querySelector('#total-price');
const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('#nav-links');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
let cart = [];

// Function to create product elements
function createProduct(product) {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
        <img src="images/${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button>Add to Cart</button>
    `;
    div.querySelector('button').addEventListener('click', () => addToCart(product));
    return div;
}

// Render products
function renderProducts() {
    products.forEach(product => {
        const productElement = createProduct(product);
        productsContainer.appendChild(productElement);
    });
}

// Add to Cart function
function addToCart(product) {
    cart.push(product);
    renderCart();
}

// Render Cart
function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
        total += item.price;
    });
    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Menu toggle functionality
menuToggle.addEventListener('click', () => {
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
});

// Dark mode toggle functionality
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});

// Call renderProducts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});