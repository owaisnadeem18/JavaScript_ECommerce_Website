import { DisplayProducts } from "./Products.js";

const res = await fetch("./api/ProductsData.json");

let data = await res.json();

// Here we need to first get the element of products card

const allProducts = document.getElementById("AllProductsContainer");

const ProductTemplate = document.getElementById("productsTemplate");

DisplayProducts(data);
