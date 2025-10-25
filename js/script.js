const products = {
  Apple: { name: "Maçã", price: "2.00", src: "../images/apple.png" },
  Banana: { name: "Banana", price: "2.00", src: "../images/banana.png" },
  beans: { name: "Feijão", price: "5.00", src: "../images/beans.png" },
  beer: { name: "Cerveja", price: "7.00", src: "../images/beer.png" },
  cauliflower: { name: "Couve-Flor", price: "1.00", src: "../images/cauliflower.png" },
  "coffee-cup": { name: "Xícara de café", price: "4.00", src: "../images/coffee-cup.png" },
  grapes: { name: "Uvas", price: "3.00", src: "../images/grapes.png" },
  lemon: { name: "Limão", price: "2.00", src: "../images/lemon.png" },
  mango: { name: "Manga", price: "3.00", src: "../images/mango.png" },
  meat: { name: "Carne", price: "10.00", src: "../images/meat.png" },
  milk: { name: "Leite", price: "6.00", src: "../images/milk.png" },
  orange: { name: "Laranja", price: "2.00", src: "../images/orange.png" },
  pasta: { name: "Massa", price: "3.00", src: "../images/pasta.png" },
  pear: { name: "Pera", price: "3.00", src: "../images/pear.png" },
  rice: { name: "Arroz", price: "4.00", src: "../images/rice.png" },
  "soft-drink": { name: "Refrigerante", price: "4.00", src: "../images/soft-drink.png" },
  strawberry: { name: "Morango", price: "2.00", src: "../images/strawberry.png" },
  sugar: { name: "Açúcar", price: "3.00", src: "../images/sugar.png" },
  water: { name: "Água", price: "1.00", src: "../images/water.png" },
  wine: { name: "Vinho", price: "20.00", src: "../images/wine.png" },
};

const containerProducts = document.querySelector(".js-products");


function createProduct({name, price, src}) {
  const container = document.createElement("div");
  container.classList.add("product");

  const containerImg = document.createElement("div");
  containerImg.classList.add("product-img");

  const img = document.createElement("img");
  img.alt = name;
  img.title = name;
  img.src = src;

  const priceTag = document.createElement("span");
  priceTag.textContent = `R$ ${price}`

  containerImg.appendChild(img);
  container.appendChild(containerImg);
  container.appendChild(priceTag);

  return container;
}

function showProducts() {

  Object.values(products).forEach(product => {
    const productElem = createProduct(product);
    containerProducts.appendChild(productElem);
  });
}

showProducts();
