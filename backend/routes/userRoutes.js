import { Router } from "express";
import User from "../models/user.js";

export const userRouter = Router();

userRouter.post("/signin", async (req, res) => {
  if (req) {
    console.log(chalk.green.bold("request recieved"));
  }
  try {
    const user = await User.findByCredentials(req.body.uid, req.body.password);

    if (!user) {
      res.send("user not found");
    }

    let type = user.role;
    res.send({ type });

  } catch (error) {

    res.status(401).send(error);
  
}
});

userRouter.post("/signup", async (req, res) => {
  const user = new User(req.body);
  console.log("request recieved");
  try {
    console.log(user);
    await user.save();
    console.log("user saved");
  } catch (e) {
    res.status(400).send(e);
  }
});
