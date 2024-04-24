import prisma from "../utils/prismaClient"
import { CustomError } from "../utils/errors";
import { getClients } from "./ClientService"

export async function createUserNotification({notification_id}:{notification_id:number}) {

    const clients=await getClients()

    const arrayNotifcation=clients.map(async(client)=>await prisma.user_Notification.create({data:{client_id:client.id,notification_id}}))

    const promiseResolve=await Promise.all(arrayNotifcation)

    console.log(promiseResolve);
}

export async function updateUserNotification({id,notification_id}:{id:number,notification_id:number}) {

    const notification=await prisma.user_Notification.findFirst({where:{AND:{client_id:id,notification_id}}})

    if (!notification?.id) throw new CustomError("Notification not found",404);

     const notify=await prisma.user_Notification.update({where:{id:notification.id},data:{isSeen:true}})

     return notify
    }