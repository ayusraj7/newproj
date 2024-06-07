// Importing necessary modules and packages
const express = require("express");
const app = express();
const database = require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");
const fileUpload=require('express-fileupload');
const cookieparser=require('cookie-parser');
const winston=require('winston');
app.use(cookieparser());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});
// Loading environment variables from .env file
dotenv.config();


// Setting up port number
const PORT = process.env.PORT || 4000;


// Connecting to database
database.connect();
 
// Middlewares
app.use(express.json());

app.use(
	cors()
);


//fetching the routes
const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin');
const studentRoutes=require('./routes/student');
app.use('/auth',authRoutes);
app.use('/admin',adminRoutes);
app.use('/student',studentRoutes);



// Setting up routes
// app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/reach", contactUsRoute);


app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});


app.listen(PORT, () => {
	logger.info(`App is listening at ${PORT}`);
});
module.exports=logger;
