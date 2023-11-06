import User from "../model/user-Schema.js";

export const userSignup = async (req, res) => {
  try {
    // console.log(req.body);

    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
        return res.status(401).json({
            message: "User already exists"
        });
    }
    const user = req.body;
    const newUser = await new User(user);
    await newUser.save();

    res
      .status(200)
      .json({ message: user.username + " is successfully registered" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const userLogin = async (req, res) => {
  try {
       const username = req.body.username;
        const password = req.body.password; 
     
    const isMatch = await User.findOne({ username: username , password: password});
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    else{
        return res.status(200).json({ data: isMatch });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
