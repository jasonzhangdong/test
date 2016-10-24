'use strict'

var cheerio = require('cheerio')
var $ = cheerio.load('<h2 class="title">Hello world</h2>')

console.log('===='+$('h2.title').text());
$('h2').addClass('welcome')

$.html()