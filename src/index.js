import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import config from "./config.js";
import connect from "./connect.js";
import addRouteHandlers from "./handlers/index.js";

const app = fastify({ logger: true });

await app.register(cors, {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://zlend.fi'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});

await app.register(jwt, {
  secret: config.jwtSecret,
});

addRouteHandlers(app);

try {
  await connect();
  await app.listen({ port: config.PORT || 3000, host: "0.0.0.0" });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}