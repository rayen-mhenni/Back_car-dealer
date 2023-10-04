const Statistic = require("../models/Statistic");

exports.getStatisticBymonth = async (req, res) => {
  let statistic = await Statistic.findOne({ month: req.params.month });
  if (statistic) {
    res.status(201).send({ Statistic, message: "Success" });
  } else {
    res.status(401).send({ statistic: [], message: "Not Data" });
  }
};

exports.getStatistic = async (req, res) => {
  let statistic = await Statistic.find();
  if (statistic.length > 0) {
    res.status(201).send({ statistic, message: "Success" });
  } else {
    res.status(401).send({ statistic: [], message: "Not Data" });
  }

};

exports.addVisit = async (req, res) => {


  let OldStatistic = await Statistic.findOneAndUpdate({ month: req.params.month })

  if (OldStatistic) {
    const newStatistic = await Statistic.findByIdAndUpdate(OldStatistic._id, {
      visit: (OldStatistic.visit + 1)
    });

    res.status(201).send({ message: "success", Statistic: newStatistic });

  } else {

    let newStatistic = new Statistic()

    newStatistic.visit = 1
    newStatistic.TotalRes = 0
    newStatistic.month = req.params.month

    newStatistic.save();

    res.status(201).send({ message: "success", Statistic: newStatistic });
  }

};

exports.addRes = async (req, res) => {

  let OldStatistic = await Statistic.findOneAndUpdate({ month: req.params.month })

  if (OldStatistic) {

    let newStatistic = await Statistic.findByIdAndUpdate(OldStatistic._id, {
      TotalRes: (OldStatistic.TotalRes + 1)
    });

    res.status(201).send({ message: "success", Statistic: newStatistic });

  } else {

    let newStatistic = new Statistic()

    newStatistic.visit = 1
    newStatistic.TotalRes = 1
    newStatistic.month = req.params.month

    newStatistic.save();

    res.status(201).send({ message: "success", Statistic: newStatistic });
  }

};


