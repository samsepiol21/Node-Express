const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // __dirname => absolute path instead of "index.html" := relative path
    res.sendFile(__dirname + "/index.html");
});

app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmiCalculator', (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var result = weight / (height * height);
    res.send("Your BMI is: " + result);
});

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.body.num1);

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result is: " + result);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
