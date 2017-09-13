var mongoose = require("mongoose");

// Local Database Configuration with Mongoose
// mongoose.connect("mongodb://localhost/goodnews", function(error)
// 	{if(error) throw error;
// 	console.log("Database connected");
// });

// robo 3t database
mongoose.connect("mongodb://heroku_5hq49lj8:9depouatqb4g9kvivslmtqa5qn@ds133084.mlab.com:33084/heroku_5hq49lj8", function(err) {
	if(err) throw err;
	console.log('database connected');
});

