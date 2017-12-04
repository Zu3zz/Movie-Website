//引入mongoose工具模块
var mongoose = require('mongoose')

var schema = mongoose.Schema;
var bcrypt = require('bcryptjs')
var SALT_WORK_FACTOR = 10

var ObjectId = schema.Types.ObjectId;
//定义一个userSchema
var UserSchema = new schema({
	name :{
		unique: true,
		type: String
	},
	password: String,
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
})

UserSchema.pre('save',function(next){
	var user = this
	//do something
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	}else{
		this.meta.updateAt = Date.now();
	}

	bcrypt.genSalt(SALT_WORK_FACTOR,function(err, salt) {
		if (err) return next()

			bcrypt.hash(user.password, salt, function(err ,hash) {
				if (err) return next(err)

				user.passwd = hash
			next()
			})
	})
	//next
	next();
})

UserSchema.statics = {
	    fetch:function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById:function (id,cb) {
        return this.findOne({_id:id})
            .exec(cb)
    }
}

module.exports = movieSchema;

