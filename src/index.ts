import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import typeDefs from "./schema/typeDef.js";
import resolvers from "./schema/resolvers.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  // server.applyMiddleware({ app });
}

startServer();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}/graphql`));
