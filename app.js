var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var serveStatic = require('server-static')
var bodyParser = require('body-parser')
var app = express()

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(express.bodyParser())
app.use(serverStatic('bower_components'))
app.listen(port)

console.log('movie started on port' + port)

//index page
app.get('/',function(req,res){
	res.render('index',{
		title: 'movie 首页'
		movies: [{
			title:'蝙蝠侠:暗黑骑士',
			_id: 1,
			poster:'https://b-ssl.duitang.com/uploads/item/201606/10/20160610143407_tM2Kz.thumb.700_0.jpeg'
		},{
			title:'蝙蝠侠:暗黑骑士',
			_id: 2,
			poster:'https://b-ssl.duitang.com/uploads/item/201606/10/20160610143407_tM2Kz.thumb.700_0.jpeg'
		},{
			title:'蝙蝠侠:暗黑骑士',
			_id: 3,
			poster:'https://b-ssl.duitang.com/uploads/item/201606/10/20160610143407_tM2Kz.thumb.700_0.jpeg'
		},{
			title:'蝙蝠侠:暗黑骑士',
			_id: 4,
			poster:'https://b-ssl.duitang.com/uploads/item/201606/10/20160610143407_tM2Kz.thumb.700_0.jpeg'
		},{
			title:'蝙蝠侠:暗黑骑士',
			_id: 5,
			poster:'https://b-ssl.duitang.com/uploads/item/201606/10/20160610143407_tM2Kz.thumb.700_0.jpeg'
		},{
			title:'蝙蝠侠:暗黑骑士',
			_id: 6,
			poster:'https://b-ssl.duitang.com/uploads/item/201606/10/20160610143407_tM2Kz.thumb.700_0.jpeg'
		}]
	})
})

//detail page
app.get('/movie:id',function(req,res){
	res.render('detail',{
		title: 'movie 详情页'
	})
})

//admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title: 'movie 后台录入页',
		movie: {
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language: ''
		}
	})
})

//list page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title: 'movie 列表页面'
	})
})