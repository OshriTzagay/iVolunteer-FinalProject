const dotenv = require("dotenv");
dotenv.config();
///!---------------------------->

///!----------Requires------------------>

const express = require("express");
const cors = require('cors');
const path = require("path");

require('./DB/');
const app = express();
const userRouter = require('./Routes/user-route')
const VolPostsRouter = require('./Routes/vol-post-route');
const NeedVolPostsRouter = require('./Routes/needVol-route');
const passport = require("passport");
require("./config/passport")(passport);
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
///!----------Requires------------------>


// app.get('/',(req,res)=>{
//     res.send("Welcome to iVolunteer !");
// })

///!----------USES-------------->
app.use(passport.initialize());
app.use('/users',userRouter);
app.use('/posts',passport.authenticate('jwt',{session:false}),VolPostsRouter);
app.use('/volneed',passport.authenticate('jwt',{session:false}),NeedVolPostsRouter);
///!----------USES-------------->

 

app.listen(port, () => {
  console.log(`SERVER IN UP On port ${port}`);
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}
