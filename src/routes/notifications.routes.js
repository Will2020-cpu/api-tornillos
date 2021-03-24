import { Router } from 'express'
import WebPush from '../libs/WebPush'


const router = Router()

let pushSubscription

router.post('/subscription',async (req,res)=>{
    pushSubscription = req.body;
    console.log(pushSubscription)
    res.status(201).json();
})

router.post('/new-message',async(req,res) =>{
    const { message } = req.body;

    const payload = JSON.stringify({
        title:"Nuevo compra felicidades",
        message
    })
    res.status(200).json();
    try{
        await WebPush.sendNotification(pushSubscription,payload)
    }catch(error){
        console.log(error)
    }
})





export default router