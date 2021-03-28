
const express = require("express"); //includes the express module
const app = express(); //creates an express object named app.

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

app.listen(8000, function () {
    console.log("server is running...");
});
