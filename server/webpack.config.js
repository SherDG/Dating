var path = require('path');

module.exports = {
	entry: '../DatingApp/core/bootstrap.js',
	resolve: {
    	root: path.resolve('./DatingApp'),
    	extensions: ['', '.js']
  		},
	output: {
		filename: '../DatingApp/bundle.js',
		path: __dirname
	}
};