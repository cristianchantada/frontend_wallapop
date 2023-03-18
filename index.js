import { notificationsController} from "./notifications/notificationsController.js";
import {productsController} from "./products/productsController.js";
import { userOrdersController } from "./userOrders/userOrdersController.js";
import {spinnerController} from "./spinner/spinnerController.js";

const productsSectionElement = document.querySelector("#products-section");
const userOrdersSectionElement = document.querySelector("#user-orders");
const notificationSectionElement = document.querySelector("#notifications");
/* const spinnerSectionElement = document.querySelector("#spinner-section"); */

productsController(productsSectionElement);
userOrdersController(userOrdersSectionElement);
notificationsController(notificationSectionElement);
/* spinnerController(spinnerSectionElement); */