const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const handlebars = require('express-handlebars');

const app = express();

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
app.use('/admin', adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
})

app.listen(3001);