import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from 'zod'
import sharp from 'sharp'
const f = createUploadthing();
import { db } from '@/db'

const auth = (req: Request) => ({ id: "fakeId" }); 
 
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
  .input(z.object({configId:z.string().optional()}))
    .middleware(async ({ input }) => {
    //   const user = await auth(req);
    //    if (!user) throw new UploadThingError("Unauthorized");
    //    return { userId: user.id };
    return {input}
    })
    .onUploadComplete(async ({ metadata, file }) => {
    //   return { name:"Liridon" };
      const {configId} = metadata.input;

      const res = await fetch(file.url)
      const buffer = await res.arrayBuffer()

      const imgMetadata = await sharp(buffer).metadata()
      const {width, height}  = imgMetadata
      if(!configId){
        const configuration = await db.configuration.create({
          data: {
            imageUrl: file.url,
            height: height || 500,
            width: width || 500,
          },
        })

        return {configId:configuration.id}
      }else{
        const updatedConfiguration = await db.configuration.update({
          where: {
            id: configId,
          },
          data: {
            croppedImageUrl: file.url,
          },
        })

        return { configId: updatedConfiguration.id }
      }
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;