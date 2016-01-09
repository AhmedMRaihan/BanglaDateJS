var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
	username: ftpUser,
	password: ftpPassword, // optional, prompted if none given 
	host: ftpHost,
	port: 21,
	localRoot: __dirname + "/build/report/coverage",
	remoteRoot: "/www/seoul.freehostia.com/BanglaDateJS",
	exclude: ['.git', '.idea']
}
	
ftpDeploy.deploy(config, function(err) {
	if (err) 
		console.log(err);
	else 
		console.log('Finished');
});