import {pubSub} from "../utils/pubSubPattern.js"
import { buildNotificationView } from "./notificationsView.js"

export function notificationsController(notificationSectionElement){

    pubSub.subscribe(pubSub.TOPICS.PRODUCT_NOTIFICATION, (message) => {
        notificationSectionElement.innerHTML = buildNotificationView(message);
    })

}