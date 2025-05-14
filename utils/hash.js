const bcrypt = require('bcrypt');
const saltRounds = 10

class Hash {
    static async hashPassword(password) {
        return await bcrypt.hash(password, saltRounds)
    }

    static async verifyPassword(password, Passwordhash) {
        return await bcrypt.compare(password, Passwordhash)
    }
}


module.exports = Hash;