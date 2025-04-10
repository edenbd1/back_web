import Contact from "../contact/contact-model.js";

export async function createContact(request, reply) {
    const { name, surname, nickname, dateOfBirth, address, phone, email, company, education } = request.body;
    const userId = request.user.id;
    const contact = new Contact({
        name,
        surname,
        nickname,
        dateOfBirth,
        address,
        phone,
        email,
        company,
        education,
        user: userId,
    });
    await contact.save();
    return contact.toJSON();
}

export async function getContacts(request, reply) {
    const userId = request.user.id;
    const contacts = await Contact.find({ user: userId });
    return contacts;
}

export async function updateContact(request, reply) {
    const { id } = request.params;
    const { name, surname, nickname, dateOfBirth, address, phone, email, company, education } = request.body;
    const userId = request.user.id;
    const contact = await Contact.findOneAndUpdate(
        { _id: id, user: userId },
        { name, surname, nickname, dateOfBirth, address, phone, email, company, education },
        { new: true }
    );
    if (!contact) {
        reply.code(404).send({ error: "Contact not found" });
        return;
    }
    return contact.toJSON();
}

export async function deleteContact(request, reply) {
    const { id } = request.params;
    const userId = request.user.id;
    const contact = await Contact.findOneAndDelete({ _id: id, user: userId });
    if (!contact) {
        reply.code(404).send({ error: "Contact not found" });
        return;
    }
    return { message: "Contact deleted" };
} 