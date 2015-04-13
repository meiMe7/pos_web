/**
 * Created by csc on 15-3-28.
 */
var oneProduct = [];
$(document).ready(function () {
      $("button").click(function () {
        var bt = this;
        var obj = {
            type: '',
            name: '',
            price: 0,
            unit: '',
            count: 0,
            countPrice: 0
        };
        if (bt.id != "") {
            obj.type = $("#" + bt.id + "-type").text();
            obj.name = $("#" + bt.id + "-name").text();
            obj.price = $("#" + bt.id + "-price").text();
            obj.unit = $("#" + bt.id + "-uit").text();
            obj.count = 1;
            obj.countPrice = obj.count * obj.price;
            oneProduct.push(obj);
            sessionStorage.oneProduct = JSON.stringify(oneProduct);
            $("#number").html(oneProduct.length);
        }
    });

});
