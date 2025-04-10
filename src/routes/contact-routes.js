import { createContact, getContacts, updateContact, deleteContact } from "../handlers/contact-handlers.js";
import { authenticate } from "../middlewares/auth.js";

export default function contactRoutes(app) {
    app.post("/api/contacts", { preHandler: [authenticate] }, createContact);
    app.get("/api/contacts", { preHandler: [authenticate] }, getContacts);
    app.put("/api/contacts/:id", { preHandler: [authenticate] }, updateContact);
    app.delete("/api/contacts/:id", { preHandler: [authenticate] }, deleteContact);
} 