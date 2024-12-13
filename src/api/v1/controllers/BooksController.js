const {BooksService} = require('../services/BooksService')

const list = async (req, res) => {
    try {
        let books = await BooksService.list();
        res.json(books)
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).json({ error: 'Failed to fetch books' });
    }
}

let BooksController = {
    list,
};

module.exports = { BooksController };
