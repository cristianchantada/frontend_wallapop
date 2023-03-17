import {paintSpinnerView} from "./spinnerView.js";
import {pubSub} from "../utils/pubSubPattern.js";

export function spinnerController(spinnerSectionElement){
    
    function showSpinner(spinnerSectionElement){
        spinnerSectionElement.innerHTML = paintSpinnerView();
    }
    
    pubSub.subscribe(pubSub.TOPICS.PAINT_SPINNER, showSpinner(spinnerSectionElement));
    
    pubSub.subscribe(pubSub.TOPICS.HIDDE_SPINNER, () => {
        spinnerSectionElement.className = "hidden";
    });
}