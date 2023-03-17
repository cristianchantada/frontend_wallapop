import {paintSpinnerView} from "./spinnerView.js";
import {pubSub} from "../utils/pubSubPattern.js"

function spinnerController(spinnerSectionElement){
    spinnerSectionElement.innerHTML = paintSpinnerView();
}

function hiddeSPinnerView(spinnerSectionElement){
    spinnerSectionElement.className = "hidden"
}

pubSub.subscribe(pubSub.TOPICS.PAINT_SPINNER, () => {
    spinnerController(spinnerSectionElement);
});

pubSub.subscribe(pubSub.TOPICS.HIDDE_SPINNER, () => {
    hiddeSPinnerView(spinnerSectionElement);
});