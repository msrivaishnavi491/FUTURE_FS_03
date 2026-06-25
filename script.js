// Welcome Popup
window.onload = function () {
    alert("Welcome to Tasty Bites Restaurant!");
};

// Order Now Button
function orderNow() {
    alert("Thank you for choosing Tasty Bites Restaurant!");
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Live Clock
function updateClock() {
    let now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleString();
}

setInterval(updateClock, 1000);
updateClock();

// Food Search
function searchFood() {

    let input =
        document.getElementById("search")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".card");

    cards.forEach(card => {

        let text =
            card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

// Happy Customer Counter
let count = 0;

let counter = setInterval(() => {

    count++;

    document.getElementById("count").innerText =
        count;

    if (count >= 500) {
        clearInterval(counter);
    }

}, 10);

// Contact Form Validation
function sendMessage(event) {

    event.preventDefault();

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    if (name.length < 3) {
        alert("Name should contain at least 3 characters.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    alert("Message sent successfully!");

}

// ==========================
// ADD TO CART
// ==========================

let total = 0;
let itemCount = 0;

function addToCart(item, price) {

    let cartItems =
        document.getElementById("cartItems");

    let li =
        document.createElement("li");

    li.innerHTML =
        item + " - ₹" + price;

    cartItems.appendChild(li);

    total += price;
    itemCount++;

    document.getElementById("total")
        .innerText = total;

    let itemsCount =
        document.getElementById("itemsCount");

    if (itemsCount) {
        itemsCount.innerText = itemCount;
    }

}

// Clear Cart
function clearCart() {

    document.getElementById("cartItems")
        .innerHTML = "";

    total = 0;
    itemCount = 0;

    document.getElementById("total")
        .innerText = 0;

    let itemsCount =
        document.getElementById("itemsCount");

    if (itemsCount) {
        itemsCount.innerText = 0;
    }

}


function bookTable(event){

    event.preventDefault();

    let name =
    document.getElementById("customerName").value;

    alert(
        "Thank you " +
        name +
        "! Your table has been booked successfully."
    );

}