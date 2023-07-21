const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide the company name"],
      maxlength: [50, "Company name can't exceed 50 characters"],
    },
    position: {
      type: String,
      required: [true, "Please provide the position"],
      maxlength: [100, "Position can't exceed 100 characters"],
    },
    status: {
      type: String,
      enum: {
        values: ["interview", "declined", "pending"],
        message: "Status '{VALUE}' is not supported",
      },
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide the user ID"],
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
