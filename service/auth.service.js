const admin = require('../config/firebaseAdmin');
const User = require('../model/user.model');

exports.verifyUser = async (token) => {
    if (!token) {
    throw new Error('Token not provided');
  }

  const decodedToken = await admin.auth().verifyIdToken(token);
  const uid = decodedToken.uid;
  const phone = decodedToken.phone_number;

  let user = await User.findOne({ phone });
  if (!user) {
    user = new User({ uid, phone });
    await user.save();
  }

  return {
    mongoId: user._id,
    uid,
    phone
  };
};