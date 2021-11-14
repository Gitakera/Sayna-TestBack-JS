const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');


//import all routes controller
const registerRoutes = require('./routes/register');
const usersRoutes = require('./routes/users');
const updateRoutes = require('./routes/update');
const deleteRoutes = require('./routes/delete');
const userRoutes = require('./routes/user');
const loginRoutes = require('./routes/login');


//Cross Origin Resource Sharing
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//************************
//DATABASE CONNEXION PART
//************************
mongoose.connect('mongodb+srv://saynamicrotask:saynamicrotask@cluster0.qnc3o.mongodb.net/saynamicrotask?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));




//transform any req to json format in entire app
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//precise url of each route
app.use('/register', registerRoutes);
app.use('/users', usersRoutes);
app.use('/user', updateRoutes);
app.use('/user', deleteRoutes);
app.use('/',userRoutes);
app.use('/login', loginRoutes);

module.exports = app;