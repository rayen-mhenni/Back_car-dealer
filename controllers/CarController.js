let Car = require("../models/Car");

exports.getCar = async (req, res) => {
  const car = await Car.find();
  res.status(201).send({ car, message: "Success" });
};

exports.getCarById = async (req, res) => {
  var car;
  if (req.params.id) {
    car = await Car.findOne({ _id: req.params.id });
  } else {
    res.status(404);
  }
  res.status(201).send({ car, message: "Success" });
};

exports.addCar = async (req, res) => {
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
    Energy,
    CARFAX,
    description,
    images,
    options,
    Vin
  } = req.body;

  const newCar = new Car();

  newCar.name = name;
  newCar.Make = Make;
  newCar.Model = Model;
  newCar.Year = Year;
  newCar.Mileage = Mileage;
  newCar.Engine = Engine;
  newCar.Cylinder = Cylinder;
  newCar.Transmission = Transmission;
  newCar.Bodytype = Bodytype;
  newCar.INTERIORCOLOR = INTERIORCOLOR;
  newCar.EXTERIORCOLOR = EXTERIORCOLOR;
  newCar.Price = Price;
  newCar.Energy = Energy;
  newCar.CARFAX = CARFAX;
  newCar.description = description;
  newCar.images = images;
  newCar.options = options;
  newCar.Vin = Vin;

  newCar.save();

  res.status(201).send({ message: "success", car: newCar });
};

exports.editCar = async (req, res) => {
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
    CARFAX,
    Energy,
    description,
    images,
    Vin,
    options,
  } = req.body;

  let car = await Car.findOneAndUpdate(
    { _id: req.params.id },
    {
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
        CARFAX,
        Energy,
        description,
        images,
        Vin,
        options,
      },
  );

  res.status(201).send({ message: "success", car: car });
};

exports.deleteCar = async (req, res) => {
  constcar = await Car.findByIdAndDelete(req.params.id);
  res.status(201).send({ message: "success" });
};

