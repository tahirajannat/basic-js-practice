function displayCart() {
    const div = document.getElementById("shoppingCart");
    const button = document.getElementById("myButton");

    div.style.display = div.style.display === "block" ? "none" : "block";
}

// Select all product cards
const productCards = document.querySelectorAll(".product-card");
const productLists = document.getElementById("cart-items");
// Attach event listeners to each product card

productCards.forEach((card) => {
    const addToCartButton = card.querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", addToCart);
});

// Function to handle adding a product to the cart
const cartTemplate = (
    title,
    productImg,
    productPrice
) => `<li class="flex items-center py-6">
<img src="${productImg}"
    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
    class="h-16 w-16 flex-none rounded-md border border-gray-200">
<div class="ml-4 flex-auto">
    <h3 class="font-medium text-gray-900">
        <a href="#">${title}</a>
    </h3>
    <p class="text-gray-500">${productPrice}</p>
</div>
</li>`;
function addToCart(event) {
    const button = event.target;
    const productCard = button.parentNode.parentNode.parentNode;
    const productTitle = productCard.querySelector("h3").textContent; // Get the product title
    const imgSrc = document.getElementById("ImageTagId");

    const productPrice = productCard.querySelector(".regularPrice").textContent;

    // Get the product list.
    const products = document.querySelectorAll(".product-card");

    products.forEach((card) => {
        const productImage = card.getElementById("ImageTagId");
        var imageSrc = productImage.src;
        console.log(imageSrc); // Perform desired action with each image source
        alert(imageSrc);
    });

    productLists.insertAdjacentHTML(
        "beforeend",
        cartTemplate(productTitle, imageSrc, productPrice)
    );
    // Return the array of featured images src.
    return imagesSrc;
}
