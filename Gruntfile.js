module.exports = function(grunt) {

	// configure
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['src/*.js']
		},
		testee: {
			options: {
				reporter: 'Spec'
			},
			coverage: {
				options: {
				  browsers: ['firefox'],
				  coverage: {
					dir: 'build/coverage/',
					reporters: ['text','html', 'lcov']
				  }
				},
				src: ['test/*.html']
			}
		},
		ftp_push: {
			options: {
				username: process.env.ftpUser,
				password: process.env.ftpPassword,
				host: process.env.ftpHost,
				dest: "seoul.freehostia.com/BanglaDateJS",
				port: 21,
				hideCredentials: true
			},
			files: {
				expand: true,
				cwd: '.',
				src: [
					"build/coverage/*", "build/coverage/**/*"
				]
			}
		},
		coveralls: {
			master_target: {
				src: 'build/coverage/*.info',
			}
		}
	});

	// include libraries
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('testee');
	grunt.loadNpmTasks('grunt-ftp-push');
	grunt.loadNpmTasks('grunt-coveralls');

	// run tasks
	grunt.registerTask('testIdentifier00', ['jshint', 'testee']);
	grunt.registerTask('ftpDeploy00', ['ftp_push']);
	grunt.registerTask('callCoveralls', ['coveralls:master_target']);
};
