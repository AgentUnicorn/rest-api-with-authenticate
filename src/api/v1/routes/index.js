const UsersRoute = require('./users');
const BooksRoute = require('./books')

const routes = (router) => {

    router.use('/users', UsersRoute)
    router.use('/books', BooksRoute)

    return router
}

module.exports = routes