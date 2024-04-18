import type { Request, Response } from "express";
import { v2 as cloudinary } from 'cloudinary';
import { updateCategory } from "../services/CategoryService";

export async  function image(req:Request,res:Response) {

cloudinary.config({
  secure: true
});

console.log(cloudinary.config());


/////////////////////////
// Uploads an image file
/////////////////////////
const uploadImage = async (imagePath:string) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};

//id  =IOUUSANWTNDP7G3IJPGGO6NZOI
/* const id =await uploadImage("https://gestion.pe/resizer/i5vGkdDtf5Hm87rWfJgyCvkwEyI=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IOUUSANWTNDP7G3IJPGGO6NZOI.jpg")
console.log({id}) */

const imageDetail =await getAssetInfo("IOUUSANWTNDP7G3IJPGGO6NZOI")

const a =  cloudinary.image("https://res.cloudinary.com/dzlog8uxo/image/upload/v1713057697/IOUUSANWTNDP7G3IJPGGO6NZOI.jpg", {transformation: [
    {gravity: "face", height: 150, width: 150, crop: "thumb"},
    {radius: 20},
    {effect: "sepia"},
    {overlay: "cloudinary_icon"},
    {effect: "brightness:90"},
    {opacity: 60},
    {width: 50, crop: "scale"},
    {flags: "layer_apply", gravity: "south_east", x: 5, y: 5},
    {angle: 10}
    ]})

res.json({imageDetail,a})
}


const getAssetInfo = async (publicId) => {

    // Return colors in the response
    const options = {
      colors: false
    };

    try {
        // Get details about the asset
        const result = await cloudinary.api.resource(publicId, options);
        console.log(result);
        return result;
        } catch (error) {
        console.error(error);
    }
};
