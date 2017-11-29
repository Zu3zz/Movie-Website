var mongoose = require('mongoose')

var MoviesSchema = new mongoose.Schema({
	doctor: String,
	title: String,
	language: String,
	country: String,
	summary: String,
	flash: String,
	poster: String,
	year: Number,
	meta:{
		createAt:{
			type: Date,
			default: Date.now()
		},
		updateAt:{
			type: Date,
			default: Date.now()
		}
	}
})

//add time before add new date
MoviesSchema.pre('save',function(next){
	if (thsis,isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	}
	else{
		this.meta.updateAt = Date.now()
	}

	next()
})

MoviesSchema.statics = {
	fetch: function(cb) {
		return this
		.find({})
		.sort('meta.updateAt')
		exec(cb)
	}
	findById: function(id,cb){
		return this
		.findOne({_id: id})
		exec(cb)
	}
}

module.exports = MoviesSchema