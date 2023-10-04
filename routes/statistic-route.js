const express = require("express");
const router = express.Router();
const StatisticController = require("../controllers/Statistic");

router.route("/").get(StatisticController.getStatistic)

router.route("/:month").get(StatisticController.getStatisticBymonth)

router.route("/visit/:month").post(StatisticController.addVisit)

router.route("/res/:month").post(StatisticController.addRes)


module.exports = router;