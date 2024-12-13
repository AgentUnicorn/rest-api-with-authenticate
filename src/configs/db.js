const { MongoClient } = require('mongodb');

// Connection URI and Database Name (update with your own URI and database name)
const dbDriver = process.env.DB_DRIVER || 'mongodb'
const dbHost = process.env.DB_HOST || 'localhost'
const dbPort = process.env.DB_PORT || 27017
const dbUsername = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbUsers = process.env.DB_USER
const uri = `${dbDriver}://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}`

let db;

const connectToDatabase = async () => {
    if (db) return db; // Reuse the existing connection if already connected

    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db(dbUsers); // Select the database
        return db;
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
};

module.exports = { connectToDatabase };
