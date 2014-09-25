var cwd = process.cwd();

var bcs = require('./lib/bcsClient.js')

module.exports = function (dest, file, settings, callback) {
    if (!fis.util.is(settings, 'Array')){
        settings = [settings];
    }
    var conf = {};
    settings.forEach(function(setting){
        fis.util.merge(conf, setting);
    });
    
    var to = (dest.to || '/').replace(/\/*$/, '');
    bcs.upload(
        conf, file.getContent(), to + dest.release,
        function(err, res){
            if(err || res.trim() != '0'){
                fis.log.error('upload file [' + file.subpath + '] to [' + to +
                    '] by receiver [bcs] error [' + (err || res) + ']');
            } else {
                var time = '[' + fis.log.now(true) + ']';
                process.stdout.write(
                    ' - '.green.bold +
                    time.grey + ' ' + 
                    file.subpath.replace(/^\//, '') +
                    ' >> '.yellow.bold +
                    to + dest.release +
                    '\n'
                );
                callback();
            }
        }
    );
}