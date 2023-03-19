import {notificationsController} from "../notifications/notificationsController.js"
import { loginController } from "./loginController.js";

const logFormElement = document.querySelector("#login-form");
loginController(logFormElement);

const notificationSectionElement = document.querySelector("#notifications");
notificationsController(notificationSectionElement);