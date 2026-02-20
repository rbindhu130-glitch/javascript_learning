fetch(
  "https://my-json-server.typicode.com/msbAtGit/bootcamp-products-api/products",
)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
    <img src="${data[i].image}" alt="Post Image">
    <div class="title">${data[i].title}</div>
    <div class="category">${data[i].category}<div/>
    <div class="price">₹${data[i].price}</div>
    <div class="rating">⭐${data[i].rating.rate}(${data[i].rating.count}reviews)  </div>
    <div class="stock">In Stock:${data[i].stock}<div/>
    </br>
    <button class="btn">Add to Cart</button>
`;

      document.body.appendChild(card);
    }
  })
  .catch((error) => console.error("Error:", error));
