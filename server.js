
const express = require("express"); //includes the express module
const app = express(); //creates an express object named app.

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mockUserData = [ //mock data for ther server to send to the user on a browser.
    { name: 'Mark' },
    {name:'Jill'}
];

app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    });
});

app.get('/users/:id', function (req, res) {
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'got one user!',
        user: req.params.id
    });
});

app.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'password and usernam match!',
            token: 'abcdefg'
        });
    }

    else {
        res.json({
            success: false,
            message: 'password and username do not match'
        });
    }
});

app.listen(8000, function () {
    console.log("server is running...");
});
