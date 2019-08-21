const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
let cors = require('cors');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

//Noam change for items
const items = require('./routes/api/Items');
app.use(bodyParser.json());
app.use('/api/items', items);
//End of noam change

// this is our MongoDB database
// const dbRoute =
//     'mongodb://<your-db-username-here>:<your-db-password-here>@ds249583.mlab.com:49583/fullstack_app';
const dbRoute = 'mongodb+srv://admin:admin@games-oh3lb.mongodb.net/test?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true })
    .then(() => console.log("DB connection succeed"))
    .catch((err) => console.log(err));

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});



// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
    const { id } = req.body;
    Data.findByIdAndRemove(id, (err) => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

// this is our create methid
// this method adds new data in our database
router.post('/putData', (req, res) => {
    let data = new Data();

    const { email,username,password } = req.body;

    // if ((!id && id !== 0) || !message) {
    //     return res.json({
    //         success: false,
    //         error: 'INVALID INPUTS',
    //     });
    // }
    data.email = email;
    data.username = username;
    data.password = password;
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));