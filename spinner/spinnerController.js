import {paintSpinnerView} from "./spinnerView.js";
import {pubSub} from "../utils/pubSubPattern.js";

export function spinnerController(spinnerSectionElement){
    
    return function makeSpinnerOrders(event){

        spinnerSectionElement.innerHTML = "";
        console.log("Spinner ESCONDIDO");

/*         if(event.detail.name === "paint"){
            spinnerSectionElement.innerHTML = paintSpinnerView();
            console.log("Spinner MOSTRADO");
        } else {
            spinnerSectionElement.innerHTML = "";
            console.log("Spinner ESCONDIDO");
        } */
    }

/*     pubSub.subscribe(pubSub.TOPICS.PAINT_SPINNER, (spinnerSectionElement) => {

        spinnerSectionElement.innerHTML = paintSpinnerView();
        console.log("Spinner MOSTRADO"); 

        showSpinner(spinnerSectionElement);
    });
    
    pubSub.subscribe(pubSub.TOPICS.HIDDE_SPINNER, () => {
        spinnerSectionElement.innerHTML = "";
        console.log("Spinner ESCONDIDO");
    });

    function showSpinner(spinnerSectionElement){
        spinnerSectionElement.innerHTML = paintSpinnerView();
        console.log("Spinner MOSTRADO")
    } */

}
