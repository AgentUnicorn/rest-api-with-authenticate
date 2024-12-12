const UsersRoute = require('./users');

const routes = (router) => {

    router.use('/users', UsersRoute)

    return router
}

module.exports = routes