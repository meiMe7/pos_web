/**
 * Created by csc on 15-4-8.
 */
var messageList = sessionStorage.buyTwoSendOne;
messageList = JSON.parse(messageList);
var countInMessageList = [];
for (var send in messageList) {
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
    }
}
$(document).ready(function () {
    var listSendTemplate = _.template($('#list-send-template').html());
    console.log(countInMessageList);
    for (var k in countInMessageList) {
        var itemSend = countInMessageList[k];
        $("#listSendTable").append(listSendTemplate({
            sendType: itemSend.type,
            sendName: itemSend.name,
            sendUnit: itemSend.unit,
            sendCount: itemSend.count
               }));
    }
    $("#surePay").click(function(){
        sessionStorage.clear();
    });

    });