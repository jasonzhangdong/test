var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/',function(req,res){
   request('http://www.jikexueyuan.com/course/',function(error,response,body){
       if(!error && response.statusCode == 200){
           $= cheerio.load(body);

           var result = $('.bd');
           result.each(function(item){
               var str = $(this);
               //console.log('111=='+item);
               var s1=(str.find('.aside-cList li .list-show div'));
               //console.log('22222==='+(str.find('.aside-cList li .list-show div')).length);
               s1.each(function(item){
                   var str1 = $(this);
                   //console.log('33333==='+(str1.find('dl')));
                   var s2 = str1.find('dl');
                   s2.each(function(item){
                      var str2 = $(this);
                       console.log('33333==='+(str2.find('dt a').text()));
                   });

               });

           });
           res.send('hello');
       }
   }) ;
});
//这是一个测试项目
app.listen(3001);