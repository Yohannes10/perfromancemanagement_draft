const mongoose = require("mongoose");

const departmentalObjectiveSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const DepartmentalObjective = mongoose.model(
  "DepartmentalObjective",
  departmentalObjectiveSchema
);

module.exports = DepartmentalObjective;
