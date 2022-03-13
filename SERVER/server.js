const dotenv = require("dotenv");
dotenv.config();
///!---------------------------->

///!----------Requires------------------>

const express = require("express");
const cors = require('cors');
require('./DB/');
const app = express();
const userRouter = require('./Routes/user-route')
const VolPostsRouter = require('./Routes/vol-post-route');
const NeedVolPostsRouter = require('./Routes/needVol-route');
app.use(cors());

const port = process.env.PORT || 8000;
///!----------Requires------------------>


// app.get('/',(req,res)=>{
//     res.send("Welcome to iVolunteer !");
// })
///!----------USES-------------->
app.use(express.json());
app.use('/users',userRouter);
app.use('/posts',VolPostsRouter);
app.use('/volneed',NeedVolPostsRouter);
///!----------USES-------------->


app.listen(port, () => {
  console.log(`SERVER IN UP On port ${port}`);
});


