const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const User = require('./models/User');
const ItemsData = require('./models/Item');

const secret = 'mysecretsshhh'
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const withAuth = require('./middleware');

let cors = require('cors');
const API_PORT = 3001;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(cookieParser());

const router = express.Router();

//Noam change for items
const items = require('./routes/api/Items');
app.use('/api/items', items);
//End of noam change

const dbRoute = 'mongodb+srv://admin:admin@games-oh3lb.mongodb.net/test?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(dbRoute, {useNewUrlParser: true})
    .then(() => console.log("DB connection succeed"))
    .catch((err) => console.log(err));

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database
router.get('/getProductData', (req, res) => {
    ItemsData.find((err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: data});
    });
});


// this is our update method
// this method overwrites existing data in our database
router.post('/updateUserData', (req, res) => {
    const {id, update} = req.body;
    User.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});

// this is our delete method
// this method removes existing data in our database
// router.delete('/deleteData', (req, res) => {
//     const {id} = req.body;
//     Data.findByIdAndRemove(id, (err) => {
//         if (err) return res.send(err);
//         return res.json({success: true});
//     });
// });

// this is our create method
// this method adds new data in our database
// router.post('/putData', (req, res) => {
//     let data = new Data();
//
//     const {email, username, password} = req.body;
//     data.email = email;
//     data.username = username;
//     data.password = password;
//     data.save((err) => {
//         if (err) return res.json({success: false, error: err});
//         return res.json({success: true});
//     });
// });

router.get('/checkToken', withAuth, function (req, res) {
    res.sendStatus(200);
});

// POST route to register a user
router.post('/register', function (req, res) {
    const {email, username, password} = req.body;
    const isAdmin = false;
    const items = [];
    const user = new User({isAdmin, email, username, password, items});
    user.save(function (err) {
        if (err) {
            res.status(500)
                .send("Error registering new user please try again.");
        } else {
            res.status(200).send("Welcome to the club!");
        }
    });
});

router.post('/authenticate', function (req, res) {
    const {username, password, rememberMe} = req.body;
    User.findOne({username}, function (err, user) {
        if (err) {
            console.error(err);
            res.status(500)
                .json({
                    error: 'Internal error please try again'
                });
        } else if (!user) {
            res.status(401)
                .json({
                    error: 'Incorrect username or password'
                });
        } else {
            user.isCorrectPassword(password, function (err, same) {
                if (err) {
                    res.status(500)
                        .json({
                            error: 'Internal error please try again'
                        });
                } else if (!same) {
                    res.status(401)
                        .json({
                            error: 'Incorrect username or password'
                        });
                } else {
                    if (rememberMe) {
                        // Issue token
                        console.log("Sending request with token")
                        const payload = {username};
                        const token = jwt.sign(payload, secret, {
                            expiresIn: '5m'
                        });
                        res.cookie('token', token, {httpOnly: true})
                            .sendStatus(200);
                    } else {
                        console.log("Sending request with No token")
                        res.sendStatus(200);
                    }
                }
            });
        }
    });
});

router.post("/charge", async (req, res) => {
    res.status(200).send("Purchase Saved");
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));