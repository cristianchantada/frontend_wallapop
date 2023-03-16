import { notificationsController } from "./notifications/notificationsController.js";
import {products} from "./products/productsController.js"
import { userOrders } from "./userOrders/userOrdersController.js";

const productsSectionElement = document.querySelector("#products-section");
const userOrdersSectionElement = document.querySelector("#user-orders");
const notificationSectionElement = document.querySelector("#notifications");

products(productsSectionElement);
userOrders(userOrdersSectionElement);
notificationsController(notificationSectionElement);