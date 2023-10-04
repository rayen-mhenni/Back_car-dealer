const express = require("express");
const uploadMiddleware = require('./middlewares/multerMid');
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/connexion");
const jwt = require("jsonwebtoken");
const pathimg = './uploads';
const path = require('path');
const fs = require('fs');


const PORT = 5000;
//Import Routes
const userRouter = require("./routes/user-route");
const loginRouter = require("./routes/login-route");
const resetPasswordRouter = require("./routes/resetPassword-route");
const car = require("./routes/car-route");
const financing = require("./routes/reclamation-router");
const Statistic = require("./routes/statistic-route");
dotenv.config();


//Connect DB

connectDB();

//Middlewear

app.use(express.json());
//Route Middlewares


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});







// const reactBuild = path.join(__dirname, "build")
// app.use(express.static(reactBuild))
// app.get("*", (req, res) => {
//  res.sendFile(path.join(reactBuild,"index.html"));
// });


//***************************** Prod ************************ */

// const cert = fs.readFileSync('./certificate/cert.crt');
// const ca = fs.readFileSync('./certificate/ca.crt');
// const key = fs.readFileSync('./certificate/private.key');

// let options = {
//    cert: cert, // fs.readFileSync('./ssl/example.crt');
//    ca: ca, // fs.readFileSync('./ssl/example.ca-bundle');
//    key: key // fs.readFileSync('./ssl/example.key');
// };

// https.createServer(options, app)
// .listen(443, function (req, res) {
//   console.log("Server started at port 443");
// });


// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });



app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/users", resetPasswordRouter);
app.use("/api/car", car)
app.use("/api/financing", financing)
app.use("/api/statistic", Statistic)

// POST File
app.post('/api/upload', uploadMiddleware, (req, res) => {

  // Handle the uploaded files
  const files = req.files;

  // Process and store the files as required
  // For example, save the files to a specific directory using fs module
  files.forEach((file) => {
    const filePath = `${pathimg}/${file.filename}`;
    fs.rename(file.path, filePath, (err) => {
      if (err) {
        // Handle error appropriately and send an error response
        return res.status(500).json({ error: 'Failed to store the file' });
      }
    });
  });

  // Send an appropriate response to the client
  res.status(200).json({ message: 'File upload successful' });

});

app.get('/images/:filename', function (request, response) {
  response.sendFile(request.params.filename, { root: pathimg })
})

app.get('/', (req, res) => {
  res.send(`API is running In ${PORT} `)

})


app.listen(PORT, () => console.log("Running", PORT));





