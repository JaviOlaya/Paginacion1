const bodyParser = require ('body-parser');
const path = require ('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PaginacionBD', { useNewUrlParser: true }).then(()=>console.log('DB is connected'))
.catch(err => console.log(err));

const indexRoutes = require('./routes/index');

//settings

app.set('port', process.env.PORT || 3000);
app.set('view', path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//routes
app.use(indexRoutes);
//static files


app.listen(app.get('port'), ()=>{console.log(' server on ', app.get('port'))
});