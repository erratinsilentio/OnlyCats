import { cloudinaryImage } from "@keystone-next/cloudinary";
import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import "dotenv/config";
import { Cat } from "./Cat";

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: "OnlyCats",
};

export const CatImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: "Source",
    }),
    altText: text(),
    cat: relationship({ ref: "Cat.photo" }),
  },
  ui: {
    listView: {
      initialColumns: ["image", "altText", "cat"],
    },
  },
});
