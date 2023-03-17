import { signUpController } from "./signUpController.js";
import {spinnerController} from "../spinner/spinnerController.js";

const signUpFormElement = document.querySelector("#sign-up-form");
signUpController(signUpFormElement);

const spinnerSectionElement = document.querySelector("#spinner-section");
spinnerController(spinnerSectionElement);