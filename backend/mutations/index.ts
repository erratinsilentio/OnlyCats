import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";

const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      addToCart(productID: ID): CartItem
    }
  `,
  resolvers: {
    Mutation: {
      addToCart() {
        console.log("add to cart!!!");
      },
    },
  },
});
