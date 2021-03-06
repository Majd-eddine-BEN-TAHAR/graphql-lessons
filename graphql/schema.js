const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema,
} = require("graphql");

var books = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

var authors = [
  { name: "Patrick Rothfuss", age: 44, id: "1" },
  { name: "Brandon Sanderson", age: 42, id: "2" },
  { name: "Terry Pratchett", age: 66, id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => {
    return {
      // id type it's only beneficial to graphql, because JS will use it as a string
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
    };
  },
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => {
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
    };
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType, //
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType, //
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
