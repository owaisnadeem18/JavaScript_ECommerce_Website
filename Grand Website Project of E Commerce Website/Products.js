const allProducts = document.getElementById("AllProductsContainer");

const ProductTemplate = document.getElementById("productsTemplate");

export const DisplayProducts = (Products) => {
  if (!Products) {
    return false;
  }

  console.log(Products);

  Products.forEach((item) => {
    const { brand, category, description, id, image, name, price, stock } =
      item;

    const ProductClone = document.importNode(ProductTemplate.content, true);

    ProductClone.querySelector(".ProductName").textContent = name;

    ProductClone.querySelector(".ImageContainer").src = image;

    ProductClone.querySelector(".ImageContainer").alt = name;

    ProductClone.querySelector(".ProductDescr").textContent = description;

    // ProductClone.querySelector(".ProductDescr").textContent = brand;

    ProductClone.querySelector(".category").textContent = category;

    ProductClone.querySelector(".ProductStock").textContent = stock;

    ProductClone.querySelector(
      ".ActualProductPrice"
    ).textContent = `${Math.ceil(price)} $ `;

    ProductClone.querySelector(".OldProductPrice").textContent = `${Math.round(
      price * 3
    )} $`;

    let IncreasementFunc = () => {
      ProductClone.querySelector("#cartQuantity").textContent =
        ProductClone.querySelector("#cartQuantity").textContent + 1;
    };

    ProductClone.querySelector(".StockElem").addEventListener(
      "click",
      IncreasementFunc
    );

    allProducts.append(ProductClone);
  });
};
