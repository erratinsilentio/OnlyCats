import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { createAuth } from "@keystone-next/auth";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";
import { insertSeedData } from "./seed-data";
import { User } from "./schemas/User";
import { Cat } from "./schemas/Cat";
import { CatImage } from "./schemas/CatImage";
import { OrderItem } from "./schemas/OrderItem";
import { Order } from "./schemas/Order";
import { sendResetTokenEmail } from "./lib/mail";
import { CartItem } from "./schemas/CartItem";
import { extendGraphqlSchema } from "./mutations/index";

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
  passwordResetLink: {
    async sendToken(args) {
      console.log(args);
      await sendResetTokenEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseURL,
      async onConnect(keystone) {
        if (process.argv.includes("--seed-data")) {
          await insertSeedData(keystone);
        }
      },
    },
    lists: createSchema({
      User,
      Cat,
      CatImage,
      CartItem,
      OrderItem,
      Order,
    }),
    extendGraphqlSchema,
    ui: {
      isAccessAllowed: ({ session }) => {
        console.log(session);
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: "id name email",
    }),
  })
);
