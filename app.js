const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("colors");

const schema = require("./graphql/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
  })
);

app.listen(3000, () => {
  console.log("Port".bold.blue + " 3000".bold.yellow);
});
