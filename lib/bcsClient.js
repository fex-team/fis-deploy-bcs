var BCS = require('./vendor/bcs.js').BCS;


module.exports.upload = function(opt, data, path, cb){
    var client = new BCS(opt);
    client.create_object_by_content(opt.bucket, path, data, {
        filepath: path,
        callback: function(err, data){
            //bcs在上传空文件后会传回400错误，应该忽略
        	if (data.status != 200 && data.status !=  400){
        		cb && cb(data.body);
        	}else{
            	cb && cb(null, "0");
        	}
        }
    });
}