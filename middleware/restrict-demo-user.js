const { BadRequestError } = require("../errors");

const restrictDemoUser = async (req, res, next) => {
  const isDemoUser = req.user.isDemoUser;
  if (isDemoUser) {
    throw new BadRequestError("Demo user has only read only access!");
  }
  next();
};

module.exports = restrictDemoUser;
