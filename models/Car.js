const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    name: { type: String },
    Make: { type: String },
    Model: { type: String },
    Year: { type: String },
    Mileage: { type: String },
    Engine: { type: String },
    Cylinder: { type: String },
    Transmission: { type: String },
    Bodytype: { type: String },
    INTERIORCOLOR: { type: String },
    EXTERIORCOLOR: { type: String },
    Price: { type: String },
    description: { type: String },
    images: { type: Array },
    options: { type: Array },
  },

  {
    timestamps: { currentTime: () => Date.now() },
  }
);

module.exports = mongoose.model("Car", CarSchema);
