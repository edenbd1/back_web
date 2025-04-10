import User from "../user/user-model.js";
import { getHashFromClearText } from "../utils/crypto.js";

export async function createUser(request, reply) {
    const { email, password, username } = request.body;
    request.log.info(`Creating user ${username}`);
    const user = new User({
        email,
        password: getHashFromClearText(password),
        username,
    });
    await user.save();
    return user.toJSON();
}

export async function loginUser(request, reply) {
    const { email, password } = request.body;

    const user = await User.findOne({ email });
    if (!user) {
        reply.code(401).send({ error: "Invalid email or password" });
        return;
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
        reply.code(401).send({ error: "Invalid email or password" });
        return;
    }

    const token = request.server.jwt.sign(
        { id: user._id, email: user.email, username: user.username },
        { expiresIn: "1h" }
    );

    return { token, user: user.toJSON() };
}