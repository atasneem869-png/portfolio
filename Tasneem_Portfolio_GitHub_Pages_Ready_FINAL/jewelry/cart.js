
var cart = JSON.parse(localStorage.getItem("cart")) || [];

var cartDiv = document.getElementById("cart");

var totalDiv = document.getElementById("total");

var total = 0;

if (cart.length === 0) {

    cartDiv.innerHTML = "<h2>Your cart is empty</h2>";

    totalDiv.innerHTML = "";

} else {

    cart.forEach(function(item, index) {

        var itemTotal = item.price * item.quantity;

        total += itemTotal;

        cartDiv.innerHTML += `
            <div class="cart-item">

                <h2>${item.name}</h2>

                <p>Price: $${item.price}</p>

                <p>Quantity: ${item.quantity}</p>

                <p>Total: $${itemTotal}</p>

                <button class="remove-btn" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    totalDiv.innerHTML = `Grand Total: $${total}`;
}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}

function goToInformation() {

    window.location.href = "info.html";
}

