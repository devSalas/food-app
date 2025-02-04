import { v2 as cloudinary } from "cloudinary";
import { CustomError } from "../errors";

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure:true
});

export async function UploadImage({buffer,pathName}:{buffer:Buffer,pathName:string}) {
    let res:any
    try {    
        res=await new Promise((resolve,reject)=>{
            cloudinary.uploader.upload_stream({resource_type:"auto",folder:`food-app/${pathName}`},(error, result) => {
                if (result?.url) return resolve(result)
                return reject(error)
            }).end(buffer);
        })  as any
    } catch (error) {
        console.log(error);
        throw new CustomError("Error of cloudinary",500);
    }
      
    return res?.url
}