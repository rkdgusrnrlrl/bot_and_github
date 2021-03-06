/**
 * Created by rkdgusrnrlrl on 17. 8. 12.
 */
const request = require('request-promise');

const botService = {
    sendMesage : function sendMesage(chatId, message) {
        let option = {
            url : "https://api.telegram.org/bot411031508:AAE-ODctxyuOhq6NOnJN5lwmloU1WCZ4n8k/sendMessage",
            method : 'POST',
            json : true,
            body : {
                chat_id : chatId,
                text : message
            }
        };
        return request(option)
                .then(console.log);
    },
    sendReplyButton : function (chatId, buttons) {
        let option = {
            url : "https://api.telegram.org/bot411031508:AAE-ODctxyuOhq6NOnJN5lwmloU1WCZ4n8k/sendMessage",
            method : 'POST',
            json : true,
            body : {
                chat_id : chatId,
                text : '액션은 선택해주세요',
                reply_markup : {
                    inline_keyboard : [
                        [{text : "액션1", callback_data : "markdown_generator" }]
                    ]
                }
            }
        };
        return request(option)
                .then(console.log);
    }
};

module.exports = botService;



