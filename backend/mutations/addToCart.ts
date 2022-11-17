import { KeystoneContext } from "@keystone-next/types";
import { CartItemCreateInput } from "../.keystone/schema-types";

export default async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error("You are not logged in!");
  }
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveField: "id",
  });

  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    throw new Error("You already have this cat in your cart!");
  }

  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
}
