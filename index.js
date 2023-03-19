import { notificationsController} from "./notifications/notificationsController.js";
import { userOrdersController } from "./userOrders/userOrdersController.js";
import {productsController} from "./products/productsController.js";

const notificationSectionElement = document.querySelector("#notifications");
const productsSectionElement = document.querySelector("#products-section");
const userOrdersSectionElement = document.querySelector("#user-orders");

notificationsController(notificationSectionElement);
userOrdersController(userOrdersSectionElement);
productsController(productsSectionElement);