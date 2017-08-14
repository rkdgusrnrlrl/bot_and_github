/**
 * Created by rkdgusrnrlrl on 17. 8. 12.
 */
const bot = require('./service/botService');
/*
(async () => {
    //await bot.sendMesage(305709337, "안녕하세요 현구님");
    await bot.sendReplyButton(305709337, []);
    process.exit(0);
})();
*/
const exec = require('child_process').exec;
//상태 확인 하는 명령어

exec("pm2 list | grep server", function (err, stdout, stderr) {
    const str = stdout;
    const menuStrs = "│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user         │ watching";
    const menuArr = menuStrs.split("│").map((data) => data.trim());
    const dataArr = str.split("│").map((data) => data.trim());
    const statusIdx = menuArr.indexOf("status");
    const status = dataArr[statusIdx];

    console.log(status);
});

exec("pm2 start --name server | grep server", function (err, stdout, stderr) {
    const str = stdout;
    const menuStrs = "│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user         │ watching";
    const menuArr = menuStrs.split("│").map((data) => data.trim());
    const dataArr = str.split("│").map((data) => data.trim());
    const statusIdx = menuArr.indexOf("status");
    const status = dataArr[statusIdx];

    console.log(status);
});


exec("pm2 stop server | grep server", function (err, stdout, stderr) {
    const str = stdout;
    const menuStrs = "│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user         │ watching";
    const menuArr = menuStrs.split("│").map((data) => data.trim());
    const dataArr = str.split("│").map((data) => data.trim());
    const statusIdx = menuArr.indexOf("status");
    const status = dataArr[statusIdx];

    console.log(status);
});
