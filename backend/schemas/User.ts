import { text, password, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const User = list({
  ui: {
    listView: {
      initialColumns: ["cat", "quantity", "user"],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true }),
    password: password(),
    cart: relationship({
      ref: "CartItem.user",
      many: true,
      ui: {
        createView: { fieldMode: "hidden" },
        itemView: { fieldMode: "read" },
      },
    }),
    orders: relationship({ ref: "Order.user", many: true }),
  },
});
