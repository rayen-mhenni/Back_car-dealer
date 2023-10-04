const Reclamation = require("../models/reclamation");

exports.find = async (req, res) => {
  res.send({
    reclamations: await Reclamation.find({ publication: req.body.publication }),
  });
};

exports.findOne = async (req, res) => {
  res.send(await Reclamation.findById(req.body._id));
};

exports.findAllByEmail = async (req, res) => {
  res.send(await Reclamation.find({ email: req.body.email }));
};

exports.create = async (req, res) => {
  const { Title,
    Firstname,
    Lastname,
    Dateofbirth,
    SIN,
    Email,
    Phone,
    CurrentAddressDuration,
    Street,
    City,
    Province,
    PostalCode,
    Company,
    Position,
    Duration,
    MonthlyIncome,
    ResidentialStatus,
    MonthlyRent } = req.body;

  const newReclamation = new Reclamation();


  newReclamation.Title = Title;
  newReclamation.Firstname = Firstname;
  newReclamation.Lastname = Lastname;
  newReclamation.Dateofbirth = Dateofbirth;
  newReclamation.SIN = SIN;
  newReclamation.Email = Email;
  newReclamation.Phone = Phone;
  newReclamation.CurrentAddressDuration = CurrentAddressDuration;
  newReclamation.Street = Street;
  newReclamation.City = City;
  newReclamation.Province = Province;
  newReclamation.PostalCode = PostalCode;
  newReclamation.Company = Company;
  newReclamation.Position = Position;
  newReclamation.Duration = Duration;
  newReclamation.MonthlyIncome = MonthlyIncome;
  newReclamation.ResidentialStatus = ResidentialStatus;
  newReclamation.MonthlyRent = MonthlyRent;

  newReclamation.save();

  res.status(201).send({ message: "success", reclamation: newReclamation });
};

exports.update = async (req, res) => {
  const { _id,
    Title,
    Firstname,
    Lastname,
    Dateofbirth,
    SIN,
    Email,
    Phone,
    CurrentAddressDuration,
    Street,
    City,
    Province,
    PostalCode,
    Company,
    Position,
    Duration,
    MonthlyIncome,
    ResidentialStatus,
    MonthlyRent } = req.body;

  let reclamation = await Reclamation.findOneAndUpdate(
    { _id: _id },
    {
      $set: {
        Title,
        Firstname,
        Lastname,
        Dateofbirth,
        SIN,
        Email,
        Phone,
        CurrentAddressDuration,
        Street,
        City,
        Province,
        PostalCode,
        Company,
        Position,
        Duration,
        MonthlyIncome,
        ResidentialStatus,
        MonthlyRent
      },
    }
  );
  res.status(201).send({ message: "success" });
};

exports.delete = async (req, res) => {
  const reclamation = await Reclamation.findById(req.body._id).remove();
  res.status(201).send({ message: "success", reclamation: reclamation });
};

exports.deleteAll = async (req, res) => {
  Reclamation.remove({}, function (err, reclamation) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(204).send({ message: "success" });
  });
};
