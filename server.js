// const express = require('express');
// const app = express();
// require("dotenv").config();
// const expressJwt = require("express-jwt");
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// mongoose.connect("mongodb://localhost/maryz", (err) => {
//     if (err) throw err;
//     console.log("Connected to the Modelz Database");
// });

// app.use(bodyParser.json());
// app.use("/api", expressJwt({secret: process.env.SECRET}));
// app.use("/auth", require("./routes/auth"));
// app.use('/api/modelz', require('./routes/routes'));
// // app.use("/score", require("./routes/scoreboard"));


// app.listen(8080, () =>{
//     console.log("Server is running on port 8080");
// })