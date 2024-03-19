import express from "express";
import { userRouter } from "./routes/userRoutes";
import { fileRouter } from "./routes/fileRoutes";

const app = express()

app.use("/user", userRouter)
app.use("/file", fileRouter)

app.listen(3001);

app.get("/", (req, res) => {
    console.log("server is running")
    res.json({"message":"server is running"})
});