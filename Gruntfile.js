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
		}
	});

	// include libraries
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks("grunt-qunit-istanbul");

	// run tasks
	grunt.registerTask('testIdentifier00', ['jshint', 'qunit']);
};