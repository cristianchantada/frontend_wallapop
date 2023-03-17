import { createProduct } from "./createProductController.js";
import {spinnerController} from "../spinner/spinnerController.js";

const createProductFormElement = document.querySelector("#create-product-form");
createProduct(createProductFormElement);

const spinnerSectionElement = document.querySelector("#spinner-section");
spinnerController(spinnerSectionElement);