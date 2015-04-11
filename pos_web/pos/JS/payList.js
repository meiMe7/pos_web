/**
 * Created by csc on 15-4-8.
 */
var messageList = sessionStorage.buyTwoSendOne;
messageList = JSON.parse(messageList);
var countInMessageList = [];
for (var send in messageList) {
    //messageList[send].count = 1;
    var flag = false;
    for (var countSend in countInMessageList ) {
       if (messageList[send].name == countInMessageList[countSend].name) {
            ++countInMessageList[countSend].count;
                      flag = true;
        }
    }
    if (!flag) {
        messageList[send].count = 1;
        countInMessageList.push(messageList[send]);
        //countInMessageList.count = 1;
    }
}
$(document).ready(function () {
    var listSendTemplate = _.template($('#list-send-template').html());
    for (var k in countInMessageList) {
        var itemSend = countInMessageList[k];
        $("#listSendTable").append(listSendTemplate({
            sendType: itemSend.type,
            sendName: itemSend.name,
            sendUnit: itemSend.uit,
            sendCount: itemSend.count
               }));
    }
    });