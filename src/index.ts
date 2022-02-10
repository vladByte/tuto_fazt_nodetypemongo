import express from "express";
import {engine} from "express-handlebars";
import path from "path";

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
    // handlebars settings 
app.engine('.hbs', engine({
    extname : '.hbs',
    layoutsDir : path.join(app.get('views') , 'layouts'),
    partialsDir : path.join(app.get('views') , 'partials'),
    helpers: require('./lib/helpers')
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.json()); // El servidor pueda ententer json.

// Routes
app.get('/',(req, res) => {
    res.send("Hola Vlad");
});
app.get('/books', (req, res) => {res.send('Books')});

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// start server
app.listen(app.get('port'), () => {
    console.log(`Server is running on: http://localhost:${app.get('port')}`);
});