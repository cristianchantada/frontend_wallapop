import { loginController } from "./loginController.js";
import {spinnerController} from "../spinner/spinnerController.js";

const logFormElement = document.querySelector("#login-form");
loginController(logFormElement);

const spinnerSectionElement = document.querySelector("#spinner-section");
spinnerController(spinnerSectionElement);
