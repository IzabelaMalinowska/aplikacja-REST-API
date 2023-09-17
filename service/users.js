const User = require("./schemas/user");

const getUser = async (body) => {
  return User.findOne(body);
};

const updateUserSubscription = async (userId, subscription) => {
  return User.findByIdAndUpdate(userId, { subscription }, { new: true });
};

const updateUserAvatar = async (userId, avatarURL) => {
  return User.findByIdAndUpdate(userId, { avatarURL }, { new: true });
};

const deleteUser = async (userMail) => {
  return User.findOneAndDelete({ email: userMail });
};

const updateUserVerification = async (userId) => {
  return User.findByIdAndUpdate(
    userId,
    {
      verificationToken: null,
      verify: true,
    },
    { new: true }
  );
};

module.exports = {
  getUser,
  updateUserSubscription,
  updateUserAvatar,
  deleteUser,
  updateUserVerification,
};
