import WebPush from 'web-push'
import config from '../config';


const PUBLIC_VAPID_KEY = config.PUBLIC_KEY
const PRIVATE_VAPID_KEY = config.PRIVATE_KEY

WebPush.setVapidDetails(
    "mailto:willianthehell0@gmail.com",
    PUBLIC_VAPID_KEY,
    PRIVATE_VAPID_KEY
)


export default WebPush;