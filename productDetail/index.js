import { notificationsController} from "../notifications/notificationsController.js";
import { productDetailController } from "./productDetailController.js";

const productDetailSectionElement = document.querySelector("#product-detail");
productDetailController(productDetailSectionElement);

const notificationSectionElement = document.querySelector("#notifications");
notificationsController(notificationSectionElement);

