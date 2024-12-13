const { connectToDatabase } = require('../../../configs/db')
const bcrypt = require('bcryptjs')

/**
 * Register a user
 *
 * @param username
 * @param email
 * @param password
 * @returns {Promise<void>}
 */
const register = async (username, email, password) => {

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = {
        username,
        email,
        password: hashPassword,
        platform_id: '',
        verified: false
    }

    try {
        const db = await connectToDatabase();
        const result = await db.collection('users').insertOne(user);
        return result.insertedId;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

const getByEmail = async (email) => {
    const db = await connectToDatabase();
    return await db.collection('users').findOne({email: email});
}

let UsersService = {
    register,
    getByEmail
}

module.exports = {UsersService}