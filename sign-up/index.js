import { notificationsController} from "../notifications/notificationsController.js";
import { signUpController } from "./signUpController.js";

const signUpFormElement = document.querySelector("#sign-up-form");
signUpController(signUpFormElement);

const notificationSectionElement = document.querySelector("#notifications");
notificationsController(notificationSectionElement);