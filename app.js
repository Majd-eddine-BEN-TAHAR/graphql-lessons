const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("colors");

const schema = require("./graphql/schema");

const app = express();

// localhost:3000/graphql => make graphql queries easily without any code

// this is a get query using an id, it's like findById
// query{
//   book(id:"2"){
//     name
//   }
// }

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Port".bold.blue + " 3000".bold.yellow);
});
