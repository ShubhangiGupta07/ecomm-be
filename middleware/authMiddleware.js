const checkIfAuthTokenExists = async (req, res, next) => {
  try {
   const {authorization} = req.headers;
    const verify = await jwt.verify(authorization, process.env.SECRET);
    await User.findOne({ _id: verify });
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "user not authenticated" });
  }
};

module.exports = checkIfAuthTokenExists;
