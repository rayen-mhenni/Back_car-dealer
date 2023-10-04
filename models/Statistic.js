const mongoose = require("mongoose");

const StatisticSchema = new mongoose.Schema(
  {
    visit: { type: Number, default: 0 },
    TotalRes: { type: Number, default: 0 },
    month: { type: String }
  },

  {
    timestamps: { currentTime: () => Date.now() },
  }
);

module.exports = mongoose.model("Statistic", StatisticSchema);
