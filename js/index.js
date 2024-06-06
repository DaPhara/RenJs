// import { CardComponent } from "../components/CardComponent.js";
// let cardRender = document.querySelector("#cardRender");


// const BaseUrl = "http://127.0.0.1:5501/data/products.json";

// fetch(BaseUrl)
//   .then((a) => a.json())
//   .then((data) => {
//     let products = data.products;
//     products.map((product) => (cardRender.innerHTML += CardComponent(product)));
//   });

// console.log("1");
// getData("2");
import { CardComponent } from "../component/CardComponent.js";
import { UserComponent } from "../component/UserComponent.js";
import { ProductComponent } from "../component/ProductComponent.js";
import { getData } from "../store/fetchApi.js";
let productRender = document.querySelector("#productRender");
let userRender = document.querySelector("#userRender");
let products = await getData("products");
let users = await getData("users");
products.map(
  (product) => (productRender.innerHTML += ProductComponent(product))
);
