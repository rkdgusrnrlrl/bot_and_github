/**
 * Created by rkdgusrnrlrl on 17. 8. 12.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const projectService = require('./service/projectService');
const co = require('co');

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.post('/github/build/bot', function (req, res) {

    co(function *() {
        const status = yield projectService.buildProject();
        console.log(status);
        res.send(status);
    }).catch((err) => {
        res.send(err);
    });

});

app.listen(80, function () {
    console.log('Example app listening on port 3000!')
});