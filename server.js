/**
 * Created by rkdgusrnrlrl on 17. 8. 12.
 */
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get('/github/build/bot', function (req, res) {
    res.send('Hello World!');
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});