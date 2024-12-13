const { connectToDatabase } = require('../../../configs/db')

const list = async () => {

    const db = await connectToDatabase();
    return await db.collection('books').find().limit(10).toArray();
}

const BooksService = {
    list
}

module.exports = {BooksService}