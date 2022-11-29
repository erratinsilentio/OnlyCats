import { list } from "@keystone-next/keystone/schema";
import { integer, relationship, select, text } from "@keystone-next/fields";

export const CartItem = list({
  fields: {
    product: relationship({ ref: "Cat" }),
    user: relationship({ ref: "User.cart" }),
  },
  access: {
    delete: true,
  },
});
