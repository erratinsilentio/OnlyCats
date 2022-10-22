import { list } from "@keystone-next/keystone/schema";
import { integer, relationship, select, text } from "@keystone-next/fields";
import { CatImage } from "./CatImage";

export const Cat = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    price: integer(),
    photo: relationship({
      ref: "CatImage.cat",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: ["image", "altText"],
        inlineEdit: ["image", "altText"],
      },
    }),
  },
});
