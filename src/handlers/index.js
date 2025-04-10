import userRoutes from "../routes/user-routes.js";
import contactRoutes from "../routes/contact-routes.js";

export default function addRouteHandlers(app) {
    userRoutes(app);
    contactRoutes(app);
}