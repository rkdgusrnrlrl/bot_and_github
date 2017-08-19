/**
 * Created by rkdgusrnrlrl on 17. 8. 12.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.post('/github/build/bot', function (req, res) {
    console.log(req.body);
    res.send('Hello World!');
});

app.listen(80, function () {
    console.log('Example app listening on port 3000!')
});