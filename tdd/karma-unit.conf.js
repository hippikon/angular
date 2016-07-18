module.exports = function(config) {
	config.set({
		frameworks: ['jasmine'],
		browsers: ['Firefox'],
		files: ['spec/unit/*.js']	
	});
};