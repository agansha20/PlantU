// ================================
// CART ARRAY
// ================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

displayCart();


// ================================
// ADD TO CART
// ================================

function addToCart(name, price) {

    let product = {
        name: name,
        price: price
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    alert(name + " Added To Cart");
}


// ================================
// DISPLAY CART
// ================================

function displayCart() {

    let cartContainer = document.querySelector(".cart-container");

    let total = 0;

    let html = "<h3>My Cart</h3><br>";

    if (cart.length == 0) {

        html += "<p>Your Cart Is Empty</p>";

    }

    else {

        for (let i = 0; i < cart.length; i++) {

            html += `

            <div class="cart-item">

                <p>
                    ${cart[i].name}
                </p>

                <p>
                    ₹${cart[i].price}
                </p>

                <button onclick="removeItem(${i})">
                    Remove
                </button>

                <hr><br>

            </div>

            `;

            total += cart[i].price;

        }

        html += `

<h2>Total : ₹${total}</h2>

<br>

<button onclick="checkout()">
    Checkout
</button>

<button onclick="clearCart()">
    Clear Cart
</button>

`;

    }

    cartContainer.innerHTML = html;

}

// ================================
// REMOVE ITEM
// ================================

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


// ================================
// CLEAR CART
// ================================

function clearCart() {

    if (confirm("Clear all items from cart?")) {

        cart = [];

        localStorage.setItem("cart", JSON.stringify(cart));

        displayCart();

    }

}


// ================================
// CHECKOUT
// ================================

function checkout() {

    if (cart.length == 0) {

        alert("Your Cart is Empty");

        return;

    }

    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        total += cart[i].price;

    }

    alert("Order Placed Successfully!\n\nTotal Amount : ₹" + total);

    cart = [];

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

// ================================
// SEARCH PRODUCTS
// ================================

let search = document.getElementById("search");

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(function(card){

        let name = card.querySelector("h3").textContent.toLowerCase();

        if(name.includes(value)){

            card.style.display = "";

        }
        else{

            card.style.display = "none";

        }

    });

});

// ================================
// SHOP NOW BUTTON
// ================================

let shopButton = document.querySelector(".hero-content button");

shopButton.addEventListener("click", function () {

    document.getElementById("products").scrollIntoView({

        behavior: "smooth"

    });

});


// ================================
// ACCOUNT DETAILS
// ================================

window.onload = function () {

    displayCart();

    let username = localStorage.getItem("username");

    if (username) {

        document.getElementById("usernameDisplay").textContent = username;

    }

}

// ================================
// EDIT PROFILE
// ================================

function editProfile() {

    let newName = prompt("Enter New Username");

    if (newName && newName.trim() !== "") {

        localStorage.setItem("username", newName);

        document.getElementById("usernameDisplay").textContent = newName;
    
        alert("Profile Updated Successfully");

    }
}
// ================================
// LOGOUT
// ================================

function logout() {

    let choice = confirm("Do you want to Logout?");

    if (choice) {

        alert("Logout Successful");

        window.location.href = "login.html";

    }

}