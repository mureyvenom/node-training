const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
// const handlebars = require('express-handlebars');

const app = express();

// handlebars config
// app.engine('hbs', handlebars({
//     extname: 'hbs',
//     defaultLayout: '',
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout'
// }));
app.set('view engine', 'ejs');//set template engine
app.set('views', 'views')//set views directory

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3001);