
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from  "./routers/videoRouter";
import userRouter from "./routers/userRouter";






const app  = express();
const logger = morgan("dev");

const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/wetube", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,  
});



app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use("/",globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



export default app;