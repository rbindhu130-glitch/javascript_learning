const parent = document.getElementById("content");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; data.products.length > i; i++) {

      const div = document.createElement('div');
      div.classList='cart'
      div.innerHTML=`
      <img src="${data.products[i].images[0]}" alt="">
      <h1>${data.products[i].title}</h1>`
      parent.appendChild(div);
    }
  });
