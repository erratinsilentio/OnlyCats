import { list } from "@keystone-next/keystone/schema";
import { integer, relationship, select, text } from "@keystone-next/fields";
import { CatImage } from "./CatImage";

export const Order = list({
  fields: {
    total: integer(),
    items: relationship({ ref: "OrderItem.order", many: true }),
    user: relationship({ ref: "User.orders" }),
    charge: text(),
  },
});
