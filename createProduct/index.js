import { notificationsController} from "../notifications/notificationsController.js";
import { createProduct } from "./createProductController.js";

const createProductFormElement = document.querySelector("#create-product-form");
createProduct(createProductFormElement);

const notificationSectionElement = document.querySelector("#notifications");
notificationsController(notificationSectionElement);