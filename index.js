const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/connexion");
const jwt = require("jsonwebtoken");


const PORT =5000;
//Import Routes
const userRouter = require("./routes/user-route");
const loginRouter = require("./routes/login-route");
const resetPasswordRouter = require("./routes/resetPassword-route");
const car = require("./routes/car-route");


dotenv.config();






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



const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.originalname}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}


const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})


// POST File
app.post('/api/upload', upload.single('image'), (req, res) => {

  if (req.file.location) {
    return res.status(200).json({ message: "Image Uploaded With Success" });
  }

  res.send(req.file.location)

});

app.get('/images/:filename', function (request, response) {
  response.sendFile(request.params.filename, { root: './uploads' })
})

app.get('/', (req, res) => {
  res.send(`API is running In ${PORT} `)

})






app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/users", resetPasswordRouter);
app.use("/api/car", car)


app.listen(PORT, () => console.log("Running", PORT));





