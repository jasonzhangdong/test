var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

request({
    //老司机地址
    url: "http://www.acfun.tv/v/list110/index.htm",
    //请求方式
    method: "GET"
}, function (e, r, b) { //回调函数
    //如果错误或没有资料就返回
    if (e || !b) {
        return;
    }
    //如果正确我们就拍拍手
    //……
    /*正确的情况*/
    //console.log(b);
    var $ = cheerio.load(b);//b就是我们请求成功的页面
    //搞个数组用于存放爬下来的内容
    var result = [];
    //选择器里就是你从控制台里看到的标题的源码
    var titles = $(".mainer .item a.title");
    //遍历并添加在数组里
    for (var i = 0; i < titles.length; i++) {
        result.push($(titles[i]).text());
    }
    fs.writeFileSync("result.json", JSON.stringify(result));

})