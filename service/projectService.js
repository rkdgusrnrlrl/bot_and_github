/**
 * Created by rkdgusrnrlrl on 17. 8. 13.
 */
const promisify = require("es6-promisify");
const _ = require('lodash');
const exec = require('child_process').exec;

function getPmProcessInfo(stdout) {
    const str = stdout;
    const menuStrs = "│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user         │ watching";
    const menuArr = menuStrs.split("│").map((data) => data.trim());
    const valueArr = str.split("│").map((data) => data.trim());

    const pm = _.zipObject(menuArr, valueArr);
    return pm;
}

const projectService = {
    projectPath : "",

    buildProject : function () {
        return new Promise((resolve, reject) => {
            exec("git pull", function (err, stdout, stderr) {
                if (err) {
                    reject(err);
                } else if (stderr) {
                    reject(stderr);
                }

                resolve(pm);
            });
        }).then(this.startProject);
    },

    showStatus : function () {
        return new Promise((resolve, reject) => {
            exec("pm2 list | grep server", function (err, stdout, stderr) {
                if (err) {
                    reject(err);
                } else if (stderr) {
                    reject(stderr);
                }

                const str = stdout;
                const menuStrs = "│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user         │ watching";
                const menuArr = menuStrs.split("│").map((data) => data.trim());
                const valueArr = str.split("│").map((data) => data.trim());

                const pm = _.zipObject(menuArr, valueArr);
                resolve(pm);
            });
        });
    },

    startProject : function () {
        return new Promise((resolve, reject) => {
            exec("pm2 start --name server | grep server", function (err, stdout, stderr) {
                if (err) {
                    reject(err);
                } else if (stderr) {
                    reject(stderr);
                }

                const pm = getPmProcessInfo(stdout);
                resolve(pm);
            });
        })
    },

    restartProject : function () {
        return new Promise((resolve, reject) => {
            exec("pm2 restart server | grep server", function (err, stdout, stderr) {
                if (err) {
                    reject(err);
                } else if (stderr) {
                    reject(stderr);
                }

                const pm = getPmProcessInfo(stdout);
                resolve(pm);
            });
        })
    },

    stopProject : function () {
        return new Promise((resolve, reject) => {
            exec("pm2 stop server | grep server", function (err, stdout, stderr) {
                if (err) {
                    reject(err);
                } else if (stderr) {
                    reject(stderr);
                }

                const pm = getPmProcessInfo(stdout);
                resolve(pm);
            });
        });
    }
};

module.exports = projectService;