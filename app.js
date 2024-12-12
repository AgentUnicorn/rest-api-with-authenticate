const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser');
// const { engine } = require('express-handlebars')
require('dotenv').config()

const port = process.env.PORT || 3000

const routes = require('./src/routes/index')(router, {})

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};


/*
ExpressJS configuration
 */
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use('/api', routes)
// app.engine('hbs', engine({defaultLayout: 'main', extname: '.hbs'}));
// app.set('views', path.join(__dirname, 'src/views'));
// app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.json({success: true, message: "Hello World!"})
})

/*
Init Http server
 */
const httpServer = app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))