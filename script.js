/* ===============================
   SUBCATEGORY DATA WITH IMAGES
================================ */

const subcategories = {
    "Cooking Essentials": [
        { name: "Rice", image: "images/Rice.jpg" },
        { name: "Atta", image: "images/Atta.jpg" },
        { name: "Oil", image: "images/Oil.jpg" },
        { name: "Pulses", image: "images/Pulses.jpg" },
        { name: "Spices", image: "images/Spices.jpg" },
        { name: "Tea", image: "images/Tea.jpg" }
    ],
    
    "Snacks & Beverages": [
        { name: "Chips", image: "images/Chips.jpg" },
        { name: "Biscuits", image: "images/Biscuits.jpg" },
        { name: "Chocolates", image: "images/Chocolates.jpg" },
        { name: "Namkeen", image: "images/Namkeen.jpg" },
        { name: "Sweets", image: "images/Sweets.jpg" }
    ],
    
    "Personal Care": [
        { name: "Soap", image: "images/Soap.jpg" },
        { name: "Shampoo", image: "images/Shampoo.jpg" },
        { name: "Face Wash", image: "images/Face Wash.jpg" },
        { name: "Hair Care", image: "images/Hair Care.jpg" },
        { name: "Oral Care", image: "images/Oral Care.jpg" }
    ],
    
    "Soft Drinks": [
        { name: "Juice", image: "images/Juice.jpg" },
        { name: "Cold Drinks", image: "images/Cold Drinks.jpg" },
        { name: "Energy Drinks", image: "images/Energy Drinks.jpg" }
    ],
    
    "Dairy Products": [
        { name: "Milk", image: "images/Milk.jpg" },
        { name: "Butter", image: "images/Butter.jpg" },
        { name: "Paneer", image: "images/Paneer.jpg" }
    ],
    
    "Bakery Items": [
        { name: "Rusk", image: "images/Rusk.jpg" },
        { name: "Cookies", image: "images/Cookies.jpg" },
        { name: "Bread", image: "images/Bread.jpg" }
    ],
    
    "Fruits & Vegetables": [
        { name: "Fruits", image: "images/Fruits.jpg" },
        { name: "Vegetables", image: "images/Vegetables.jpg" },
        { name: "Green Vegetables", image: "images/Green Vegetables.jpg" }
    ],
    
    "Frozen Foods": [
        { name: "Ice Cream", image: "images/Ice Cream.jpg" },
        { name: "Shakes", image: "images/Shakes.jpg" }
    ],
    
    "Cleaning Essentials": [
        { name: "Detergent & Laundry", image: "images/Detergent & Laundry.jpg" },
        { name: "Toilet Cleaner", image: "images/Toilet Cleaner.jpg" },
        { name: "Floor Cleaner", image: "images/Floor Cleaner.jpg" },
        { name: "Dishwash Liquids", image: "images/Dishwash Liquids.jpg" }
    ],
    
    "Dry Fruits": [
        { name: "Dry Fruits", image: "images/Dry Fruits.jpg" },
        { name: "Nuts", image: "images/Nuts.jpg" }
    ],
    
    "Health & Wellness": [
        { name: "Protein & Vitamin Supplements", image: "images/Protein & Vitamin Supplements.jpg" },
        { name: "Ayurveda", image: "images/Ayurveda.jpg" },
        { name: "Baby Care", image: "images/Baby Care.jpg" },
        { name: "Probiotics", image: "images/Probiotics.jpg" }
    ],
    
    "Stationery": [
        { name: "Pen & Pencils", image: "images/Pen & Pencils.jpg" },
        { name: "Envelopes", image: "images/Envelopes.jpg" },
        { name: "Storage", image: "images/Storage.jpg" }
    ]
    
    
};


/* ===============================
   DOM READY
================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* CATEGORY CLICK */
    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const category = card.getAttribute("data-category");
            goToCategory(category);
        });
    });

    startHeroSlider();
});


/* ===============================
   SHOW SUBCATEGORIES
================================ */

function goToCategory(categoryName) {

    const section = document.getElementById("subcategorySection");
    const grid = document.getElementById("subcategoryGrid");
    const title = document.getElementById("subcategoryTitle");

    if (!section || !grid || !title) return;

    grid.innerHTML = "";
    title.textContent = categoryName + " - Subcategories";

    if (!subcategories[categoryName]) return;

    subcategories[categoryName].forEach(sub => {

        const card = document.createElement("div");
        card.classList.add("subcategory-card");

        card.innerHTML = `
            <img src="${sub.image}" alt="${sub.name}">
            <h3>${sub.name}</h3>
        `;

        card.addEventListener("click", () => {
            filterBySubcategory(categoryName, sub.name);
        });

        grid.appendChild(card);
    });

    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
}


/* ===============================
   FILTER PRODUCTS
================================ */
function filterBySubcategory(category, subcategory) {

    const filtered = window.products.filter(product =>
        product.category.toLowerCase().trim() === category.toLowerCase().trim() &&
        product.subcategory.toLowerCase().trim() === subcategory.toLowerCase().trim()
    );

    console.log("Filtered products:", filtered);

    displayProducts(filtered);
}


/* ===============================
   DISPLAY PRODUCTS WITH BUY BUTTON
================================ */

function displayProducts(productList) {

    const grid = document.getElementById("productContainer");
    if (!grid) return;

    grid.innerHTML = "";

    if (!productList || productList.length === 0) {
        grid.innerHTML = "<p style='text-align:center;'>No products found in this subcategory.</p>";
        return;
    }

    productList.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description || "No description available."}</p>
            <p><strong>₹${product.price}</strong></p>
            <p>Stock: ${product.stock}</p>
            <button class="buy-btn">Buy Now</button>
        `;

        const buyBtn = card.querySelector(".buy-btn");

        buyBtn.addEventListener("click", () => {
            addToCart(product);
        });

        grid.appendChild(card);
    });
}


/* ===============================
   ADVANCED CART SYSTEM
================================ */

let cart = [];

/* ADD TO CART */
function addToCart(product) {

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
    alert(product.name + " added to cart!");
}

/* UPDATE CART COUNT */
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartSpan = document.querySelector(".cart-icon span");
    if (cartSpan) {
        cartSpan.textContent = totalItems;
    }
}



/* ===============================
   OPEN CART
================================ */

function openCart() {

    const cartSection = document.getElementById("cartSection");
    const cartItemsDiv = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItemsDiv.innerHTML = "";

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.textContent = "";
        cartSection.style.display = "block";
        return;
    }

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
            <div>
                <button onclick="decreaseQty(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQty(${item.id})">+</button>
            </div>
            <p>Subtotal: ₹${item.price * item.quantity}</p>
            <hr>
        `;

        cartItemsDiv.appendChild(div);
    });

    cartTotal.textContent = "Total: ₹" + total;

    cartSection.style.display = "block";
    cartSection.scrollIntoView({ behavior: "smooth" });
}


/* INCREASE */
function increaseQty(id) {
    const item = cart.find(p => p.id === id);
    if (item) {
        item.quantity++;
        updateCartCount();
        openCart();
    }
}

/* DECREASE */
function decreaseQty(id) {
    const item = cart.find(p => p.id === id);
    if (item) {
        item.quantity--;
        if (item.quantity <= 0) {
            cart = cart.filter(p => p.id !== id);
        }
        updateCartCount();
        openCart();
    }
}

/* ===============================
   HERO AUTO SLIDER
================================ */

function startHeroSlider() {
    const slides = document.querySelectorAll(".slide");
    if (!slides.length) return;

    let index = 0;

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 4000);
}


/* ===============================
   CHECKOUT
================================ */

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully! 🎉");

    cart = [];
    updateCartCount();
    openCart();
}

/* ===============================
   SEARCH FUNCTIONALITY
================================ */

const searchInput = document.querySelector(".header-search input");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchValue = this.value.toLowerCase().trim();

        if (!window.products) return;

        const filteredProducts = window.products.filter(product =>
            product.name.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue) ||
            product.subcategory.toLowerCase().includes(searchValue) ||
            (product.description && product.description.toLowerCase().includes(searchValue))
        );

        displayProducts(filteredProducts);
    });
}