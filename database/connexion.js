const mongoose = require("mongoose");

//primoCarthage / primoCarthage!!

const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://primoCarthage:primoCarthage!!@cluster0.n1mjoop.mongodb.net/?retryWrites=true&w=majority",
      {}
    );
    console.log("Connect to DB");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
