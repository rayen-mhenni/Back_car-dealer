const mongoose = require("mongoose")

const reclamationSchema = new mongoose.Schema(
  {


    Title: { type: String },
    Firstname: { type: String },
    Lastname: { type: String },
    Dateofbirth: { type: String },
    SIN: { type: String },
    Email: { type: String },
    Phone: { type: String },




    CurrentAddressDuration: { type: String },
    Street: { type: String },
    City: { type: String },
    Province: { type: String },
    PostalCode: { type: String },



    Company: { type: String },
    Position: { type: String },
    Duration: { type: String },


    MonthlyIncome: { type: String },
    ResidentialStatus: { type: String },
    MonthlyRent: { type: String },
    month: { type: String },

  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
);

module.exports = mongoose.model("reclamation", reclamationSchema);