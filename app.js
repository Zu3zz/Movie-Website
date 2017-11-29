var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var serveStatic = require('serve-static')
var bodyParser = require('body-parser')
var app = express()

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(bodyParser.urlencoded())
app.use(serveStatic('bower_components'))
app.listen(port)

console.log('movie started on port' + port)

//index page
app.get('/',function(req,res){
	res.render('index',{
		title: 'movie 首页',
		movies: [{
			title: '蝙蝠侠:暗黑骑士',
			_id: 1,
			poster: 'http://www.sfs-cn.com/node3/node924/node25289/node25291/images/00214492.jpg'
		},{
			title: '蝙蝠侠:暗黑骑士',
			_id: 2,
			poster: 'https://b-ssl.duitang.com/uploads/item/201606/10/20160610143407_tM2Kz.thumb.700_0.jpeg'
		},{
			title: '蝙蝠侠:暗黑骑士',
			_id: 3,
			poster: 'https://b-ssl.duitang.com/uploads/item/201606/10/20160610143407_tM2Kz.thumb.700_0.jpeg'
		},{
			title: '蝙蝠侠:暗黑骑士',
			_id: 4,
			poster: 'https://b-ssl.duitang.com/uploads/item/201606/10/20160610143407_tM2Kz.thumb.700_0.jpeg'
		},{
			title: '蝙蝠侠:暗黑骑士',
			_id: 5,
			poster: 'https://b-ssl.duitang.com/uploads/item/201606/10/20160610143407_tM2Kz.thumb.700_0.jpeg'
		},{
			title:'蝙蝠侠:暗黑骑士',
			_id: 6,
			poster: 'https://b-ssl.duitang.com/uploads/item/201606/10/20160610143407_tM2Kz.thumb.700_0.jpeg'
		}]
	})
})

//detail page
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title: 'movie 详情页',
		movie:{
			title: '黑暗骑士',
			doctor: '克里斯托佛·诺兰',
			country: '美国',
			year: 2008,
			language: '英语',
			poster: 'https://movie.douban.com/subject/1851857/',
			flash: 'http://www.iqiyi.com/v_19rra6zong.html?vfm=2008_aldbd&fc=828fb30b722f3164&fv=p_02_01',
			summary: '蝙蝠侠三部曲第二部 巅峰之作'
		}
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
		title: 'movie 列表页面',
		movies:[{
			title: '黑暗骑士',
			_id: 1,
			doctor: '克里斯托佛·诺兰',
			country: '美国',
			year: 2008,
			language: '英语',
			flash: 'http://www.iqiyi.com/v_19rra6zong.html?vfm=2008_aldbd&fc=828fb30b722f3164&fv=p_02_01'
		}]
	})
})