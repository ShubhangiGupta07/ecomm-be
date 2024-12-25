const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const { getUser } = require("../app/controller/authenticationController");
module.exports = {
  registerUser: async (requestBody) => {
    try {
      const { userName, password, confirmPassword } = requestBody;
      const salt = bcrypt.genSaltSync(+process.env.PASSWORD_HASH_ROUNDS);
      const maskedPassword = bcrypt.hashSync(password, salt);

      const user = new User({
        user_name: userName,
        password: maskedPassword,
        confirm_password: maskedPassword,
      });

      const response = await user.save();
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  loginUser: async (requestBody) => {
    try {
      const { userName, password } = requestBody;
      const userData = await User.findOne({ user_name: userName });
      const passwordVerify = bcrypt.compareSync(password, userData.password);
      if (passwordVerify) {
        const token = await jwt.sign(userData.id, process.env.SECRET);
        userData.token = token;
        return userData;
      }
    } catch (err) {
      console.log(err);
      res.status(401).json({ message: "user not authenticated" });
    }
  },
  verifyUser : async(auth)=>{
    try{
    const verify = await jwt.verify(auth, process.env.SECRET);
    const userData = await User.findOne({_id:verify});
    return userData;
    }catch(err){
      console.log(err);
      res.status(401).json({ message: "user not authenticated" });
    }
  },
  getUser: async(id)=>{
    try{
      const user = await User.findOne({_id:id});
      return user;
    }catch(err)
    {
      console.log(err);
      res.status(401).json({ message: "user not authenticated" });
    }
  }
};
