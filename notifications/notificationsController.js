import { buildNotificationView } from "./notificationsView.js";
import {pubSub} from "../utils/pubSubPattern.js";

export function notificationsController(notificationSectionElement){

    pubSub.subscribe(pubSub.TOPICS.PRODUCT_NOTIFICATION, (message) => {
        notificationSectionElement.innerHTML = buildNotificationView(message);
        setTimeout(()=>{
            notificationSectionElement.innerHTML = "";
        }, 3000);
    });
}