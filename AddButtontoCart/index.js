const url = "https://fakestoreapi.com/products";

const products = [];

console.log("making a network request");
const products_promise = fetch(url);

products_promise.then(function (response) {
  console.log(response);
  const result = response.json();
  result.then(function (data) {
    products.push(...data);
    const productsContainer = document.getElementById("productsContainer");
    const cards = [];
    for (let i = 0; i < products?.length; i++) {
      const card = document.createElement("div");
      const img = document.createElement("img");
      const btn = document.createElement("button");
      btn.append("Dedso Rupaya") // Adding Button here
      let value = document.getElementById("add")
      if(btn.addEventListener("click",function(){
          let number = 0;
          number++;
          value.textContent = (`Successfully added to the Cart ${number}`);
      }))
      document.body.appendChild(btn)
      const currentProduct = products[i];
      img.src = currentProduct.image;
      const title = document.createElement("p");
      title.innerText = currentProduct.title;
      card.append(img,title,btn);
      cards.push(card);
    }
    productsContainer.append(...cards);
  });
});