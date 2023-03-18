import { notificationsController} from "../notifications/notificationsController.js";
import { productDetailController } from "./productDetailController.js";
import {spinnerController} from "../spinner/spinnerController.js";

const productDetailSectionElement = document.querySelector("#product-detail");
productDetailController(productDetailSectionElement);

const notificationSectionElement = document.querySelector("#notifications");
notificationsController(notificationSectionElement);

/* const spinnerSectionElement = document.querySelector("#spinner-section");
spinnerController(spinnerSectionElement); */
