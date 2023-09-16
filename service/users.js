const User = require("./schemas/user");

const getUser = async (body) => {
  const user = await User.findOne(body);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const updateUserSubscription = async (userId, subscription) => {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { subscription },
    { new: true }
  );
  if (!updatedUser) {
    throw new Error("User not found");
  }
  return updatedUser;
};

const updateUserAvatar = async (userId, avatarURL) => {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { avatarURL },
    { new: true }
  );
  if (!updatedUser) {
    throw new Error("User not found");
  }
  return updatedUser;
};

const deleteUser = async (userMail) => {
  const deletedUser = await User.findOneAndDelete({ email: userMail });
  if (!deletedUser) {
    throw new Error("User not found");
  }
  return deletedUser;
};

const updateUserVerification = async (userId) => {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      verificationToken: null,
      verify: true,
    },
    { new: true }
  );
  if (!updatedUser) {
    throw new Error("User not found");
  }
  return updatedUser;
};

module.exports = {
  getUser,
  updateUserSubscription,
  updateUserAvatar,
  deleteUser,
  updateUserVerification,
};
