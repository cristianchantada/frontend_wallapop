import {products} from "./products/productsController.js"
import { userOrders } from "./userOrders/userOrdersController.js";

const productsSectionElement = document.querySelector("#products-section");
const userOrdersSectionElement = document.querySelector("#user-orders");

products(productsSectionElement);
userOrders(userOrdersSectionElement);