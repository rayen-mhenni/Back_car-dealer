let Statistic = require("../models/Statistic");

exports.getStatistic = async (req, res) => {
  const Statistic = await Statistic.find();
  res.status(201).send({ Statistic, message: "Success" });
};

exports.addStatistic = async (req, res) => {
  const {
    name,
    Make,
    Model,
    Year,
    Mileage,
    Engine,
    Cylinder,
    Transmission,
    Bodytype,
    INTERIORCOLOR,
    EXTERIORCOLOR,
    Price,
    description,
    images,
    options,
  } = req.body;

  const newStatistic = new Statistic();

  newStatistic.name = name;
  newStatistic.Make = Make;
  newStatistic.Model = Model;
  newStatistic.Year = Year;
  newStatistic.Mileage = Mileage;
  newStatistic.Engine = Engine;
  newStatistic.Cylinder = Cylinder;
  newStatistic.Transmission = Transmission;
  newStatistic.Bodytype = Bodytype;
  newStatistic.INTERIORCOLOR = INTERIORCOLOR;
  newStatistic.EXTERIORCOLOR = EXTERIORCOLOR;
  newStatistic.Price = Price;
  newStatistic.description = description;
  newStatistic.images = images;
  newStatistic.options = options;

  newStatistic.save();

  res.status(201).send({ message: "success", Statistic: newStatistic });
};


