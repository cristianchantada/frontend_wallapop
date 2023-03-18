import {paintSpinnerView} from "./spinnerView.js";
import {pubSub} from "../utils/pubSubPattern.js";

export function spinnerController(spinnerSectionElement){
    
    pubSub.subscribe(pubSub.TOPICS.PAINT_SPINNER, (spinnerSectionElement) => {

        /* spinnerSectionElement.innerHTML = paintSpinnerView(); */
        console.log("Spinner MOSTRADO"); 

/*         showSpinner(spinnerSectionElement); */
    });
    
    pubSub.subscribe(pubSub.TOPICS.HIDDE_SPINNER, () => {
        spinnerSectionElement.className = "hidden";
        console.log("Spinner ESCONDIDO");
    });

/*     function showSpinner(spinnerSectionElement){
        spinnerSectionElement.innerHTML = paintSpinnerView();
        console.log("Spinner MOSTRADO")
    } */
}
