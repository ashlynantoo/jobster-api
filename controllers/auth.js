const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      token: user.createJWT(),
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email ID and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("User does not exist");
  }
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  res.status(StatusCodes.OK).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      token: user.createJWT(),
    },
  });
};

const updateUser = async (req, res) => {
  const { userId } = req.user;
  const { name, lastName, email, location } = req.body;
  if (!name || !lastName || !email || !location) {
    throw new BadRequestError("Please provide all details");
  }
  const user = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    throw new UnauthenticatedError("User does not exist");
  }

  res.status(StatusCodes.OK).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      token: user.createJWT(),
    },
  });
};

module.exports = { register, login, updateUser };
