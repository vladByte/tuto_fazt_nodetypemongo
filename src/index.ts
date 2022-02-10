import express from "express";
// Initializations
const app = express();

// Settings
app.set('port',3000);
// Middlewares

// Routes

// start server
app.listen(app.get('port'), () => {
    console.log("Server is running on: http://localhost:3000");
});