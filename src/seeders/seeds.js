const { connectToDatabase } = require('../configs/db')
const fs = require('fs')
const fsPromises = fs.promises;

const seedDatabase = async () => {
    try {
        // Clear existing data
        const db = await connectToDatabase();
        await db.collection('books').deleteMany()

        // Generate and insert new users
        const seedData = fs.readFileSync('src/seeders/books.json',
            { encoding: 'utf8', flag: 'r' });

        await db.collection('books').insertMany(JSON.parse(seedData))

        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

// Call the seeder function
seedDatabase();