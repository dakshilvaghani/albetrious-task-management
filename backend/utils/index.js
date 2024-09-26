import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connection established");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;

export const createJWT = async (res, user) => {
  console.log(user);
  try {
    const payload = {
      userid: user._id,
      email: user.email,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
    console.log("inside create jwt and token is", token);
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };
    res.cookie("token", token, options);
    res.set("Authorization", `Bearer ${token}`);
  } catch (error) {
    console.error("Error generating JWT token:", error);
  }
};
