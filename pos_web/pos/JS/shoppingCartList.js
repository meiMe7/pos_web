/**
 * Created by csc on 15-3-30.
 */

    var cartList = sessionStorage.oneProduct;
    cartList = JSON.parse(cartList);
    var countInCart = [];
    for (var i in cartList) {
        var flag = false;
        for (var j in countInCart) {
            if (cartList[i].name == countInCart[j].name) {
                ++countInCart[j].count;
                countInCart[j].countPrice = countInCart[j].count * countInCart[j].price;
                flag = true;
            }
        }
        if (!flag) {
            countInCart.push(cartList[i]);
        }
    }


$(document).ready(function () {
    $("#number").html(cartList.length);
    var listTemplate = _.template($('#list-template').html());
    var all = 0;
    var buyTwoSendOne = [];
    for (var k in countInCart) {
        var item = countInCart[k];
        $("#listTable").append(listTemplate({
            type: item.type,
            name: item.name,
            price: item.price,
            unit: item.unit,
            count: item.count,
            i: k,
            countPrice: item.countPrice+"元"
        }));
        if($("#type-" + k).text() != "水果" && item.count>2){
            var temp = item.count;
            var num = 0;
            while(temp>=3){
                temp = temp-3;
                num ++;
                var send = item;
                buyTwoSendOne.push(send);
                sessionStorage.buyTwoSendOne = JSON.stringify(buyTwoSendOne);
            }
           var priceText = (item.count-num)* item.price +"元（原价："+ item.countPrice+"元）";
            item.countPrice =(item.count-num)* item.price;
            $("#countPrice-" + k).text(priceText);
             }
        all = all+item.countPrice
    }
    $("#allPrice").html("总计："+all);
    $("button").click(function () {
            var btClick = this;
            var idArray = btClick.id.split("-");
            for (var l in countInCart) {
                if (idArray[1] == l && idArray[2] == "add") {
                    $("#count-" + l).html(parseInt($("#count-" + l).text()) + 1);
                    countInCart[l].count++;
                    var objI = countInCart[l];
                    objI.count = 1;
                    cartList.push(objI);
                    sessionStorage.oneProduct = JSON.stringify(cartList);
                    $("#number").html(cartList.length);
                }
                if (idArray[1] == l && idArray[2] == "lower" && parseInt($("#count-" + l).text()) >0) {
                    $("#count-" + l).html(parseInt($("#count-" + l).text()) - 1);
                    countInCart[l].count--;
                    cartList.splice(l, 1);
                    sessionStorage.oneProduct = JSON.stringify(cartList);
                    $("#number").html(cartList.length);
                }
            }
        }
    );
    $("#productList").click(function() {
        sessionStorage.clear();
    });
});
