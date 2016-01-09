module.exports = function(grunt) {

	// configure
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['src/*.js']
		},
		qunit: {
			options: {
				timeout: 30000,
				coverage: {
					src:["src/<%= pkg.name %>.js"],
					instrumentedFiles: "temp/",
					htmlReport: "build/report/coverage",
					lcovReport: "build/report/lcov",
					linesThresholdPct: 0
				}
			},
			files: ['test/*.html']
		},
		ftp_push: {
			options: {
				username: process.env.ftpUser,
				password: process.env.ftpPassword,
				host: process.env.ftpHost,
				dest: "seoul.freehostia.com/BanglaDateJS",
				port: 21
			},
			files: {
				expand: true,
				cwd: '.',
				src: [
					"build/report/coverage/*", "build/report/coverage/**/*"
				]
			}
		}
	});

	// include libraries
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks("grunt-qunit-istanbul");
	grunt.loadNpmTasks('grunt-ftp-push');

	// run tasks
	grunt.registerTask('testIdentifier00', ['jshint', 'qunit']);
	grunt.registerTask('ftpDeploy00', ['ftp_push']);
};