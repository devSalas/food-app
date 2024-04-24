import { CustomError } from "../utils/errors";
import prisma from "../utils/prismaClient";
import { getUserbyId } from "./UserService";

export async function getNotifications({id}:{id:number}) {
    
    const notifications =await prisma.user_Notification.findMany({where:{client_id:id},orderBy:{createdAt:'desc'},include:{notification:true}})

    const user= await getUserbyId({id})

    if (!user?.id) throw new CustomError("User error",400);

    if (notifications.length>=1) { 
        
        const notifyFilter= notifications.filter(notification=>notification.createdAt>user.createdAt)

        return notifyFilter
    }

    const firstNotification= await prisma.notification.findFirst({orderBy:{createdAt:'asc'}})

    
    return [firstNotification].filter(e=>e!=null)
}

export async function postNotifications({description,title}:{description:string,title:string}) {

    const existNotification=await findNotification(title)

    if (existNotification?.id) throw new CustomError("title of Notificaitons is duplicate",400);
    
    const notifications =await prisma.notification.create({data:{description,title}})

    return notifications
}

export async function deleteNotifications(id:number) {
    const existNotification=await findNotificationId(id)

    if (!existNotification?.id) throw new CustomError("Notification not exist",404);
    const notifications =await prisma.notification.delete({where:{id}})
    return notifications
}

export async function updateNotifications({id,description,title}:{id:number,title:string,description:string}) {
    const existNotification=await findNotificationId(id)

    if (!existNotification?.id) throw new CustomError("Notification not exist",404);
    const notifications =await prisma.notification.update({where:{id},data:{description,title}})
    return notifications
}

async function findNotification(title:string) {
    return await prisma.notification.findFirst({where:{title}})
}

async function findNotificationId(id:number) {
    return await prisma.notification.findFirst({where:{id}})
}