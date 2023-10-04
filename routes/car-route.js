const express = require("express");
const router = express.Router();
const CarController = require("../controllers/CarController");

router.route("/").get(CarController.getCar)
                .post(CarController.addCar)

router.route("/:id").get(CarController.getCarById)

router.route("/edit/:id").put(CarController.editCar)

router.route("/delete/:id").delete(CarController.deleteCar)





module.exports = router;