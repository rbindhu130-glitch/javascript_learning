const cardsContainer = document.getElementById("cardsContainer");

// Fetch products and create cards
fetch("https://my-json-server.typicode.com/msbAtGit/bootcamp-products-api/products")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-category", item.category.toLowerCase());
      card.setAttribute("data-title", item.title.toLowerCase());

      card.style.display = "none";

      card.innerHTML = `
        <img src="${item.image}" alt="Post Image">
        <div class="title">${item.title}</div>
        <div class="category">${item.category}</div>
        <div class="price">₹${item.price}</div>
        <div class="rating">⭐${item.rating.rate}(${item.rating.count} reviews)</div>
        <div class="stock">In Stock: ${item.stock}</div>
        <br>
        <button class="btn">Add to Cart</button>
      `;
      cardsContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error:", error));

const input = document.getElementById("search");
const btn = document.getElementById("btnSearch");

// Search button click
btn.addEventListener("click", () => {
  const query = input.value.toLowerCase().trim();

  // Loop all cards
  for (let card of cardsContainer.children) {
    const category = card.getAttribute("data-category");
    const title = card.getAttribute("data-title");

    // Strict match: show only if exact match
    if (query === category || query === title) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  }
});