
function add(btn) {
    var product = btn.parentElement.parentElement.parentElement;

    var value = btn.parentElement.parentElement.querySelector(".inp").value;

    if (value === "" || isNaN(value) || value < 1 || value > 20) {
        alert("invalid number of item");
        return;
    }

    var name = product.querySelector(".title").innerText;
    var priceText = product.querySelector(".current-price").innerText;
    var price = parseFloat(priceText.replace("$", ""));

    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    var existingProduct = cart.find(function(item) {
        return item.name === name;
    });

    if (existingProduct) {
        existingProduct.quantity += Number(value);
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: Number(value)
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`you added ${value} items to the cart`);
}

