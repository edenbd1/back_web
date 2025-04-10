import { createUser, loginUser } from "../handlers/user-handlers.js";

export default function userRoutes(app) {
    app.get("/", async (request, reply) => {
        return { hello: "world" };
    });

    app.post("/api/users", createUser);
    app.post("/api/login", loginUser);
}