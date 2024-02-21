const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  getJob,
  addJob,
  updateJob,
  deleteJob,
  getStats,
} = require("../controllers/jobs");
const restrictDemoUser = require("../middleware/restrict-demo-user");

router.route("/").get(getAllJobs).post(restrictDemoUser, addJob);
router.route("/stats").get(getStats);
router
  .route("/:id")
  .get(getJob)
  .patch(restrictDemoUser, updateJob)
  .delete(restrictDemoUser, deleteJob);

module.exports = router;
