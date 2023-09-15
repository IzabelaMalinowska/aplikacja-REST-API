const User = require("./schemas/user");

const getUser = async (body) => {
  try {
    const user = await User.findOne(body);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUserSubscription = async (userId, subscription) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { subscription },
      { new: true }
    );
    if (!updatedUser) {
      throw new Error("User not found");
    }
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const updateUserAvatar = async (userId, avatarURL) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatarURL },
      { new: true }
    );
    if (!updatedUser) {
      throw new Error("User not found");
    }
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userMail) => {
  try {
    const deletedUser = await User.findOneAndDelete({ email: userMail });
    if (!deletedUser) {
      throw new Error("User not found");
    }
    return deletedUser;
  } catch (error) {
    throw error;
  }
};

const updateUserVerification = async (userId) => {
  try {
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
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUser,
  updateUserSubscription,
  updateUserAvatar,
  deleteUser,
  updateUserVerification,
};
