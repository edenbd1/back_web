import bcrypt from 'bcryptjs';

export const compareToHash = bcrypt.compareSync;

export function getHashFromClearText(password) {
    return bcrypt.hashSync(password, 10);
}