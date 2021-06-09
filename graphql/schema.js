const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = require("graphql");

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => {
    return {
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
    };
  },
});
