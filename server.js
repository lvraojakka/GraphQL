const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require("mongoose");
const { resolvers } = require("./graphql/resolvers/studentResolvers.js");
const { typeDefs } = require("./graphql/typeDefs/studentTypeDefs.js");

const MONGO_URI = "mongodb://localhost:27017/student";

// Database connection
mongoose.connect('mongodb://localhost:27017/student')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Connection Error:", err));

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});