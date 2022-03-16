const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const users = require('../Models/user-model');

const opt = {
  secretOrKey: process.env.SECRET_KEY,
};

opt.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opt, (payload, done) => {
        console.log(payload.user.Email,payload.user.Password);
        users.findById({ _id: payload.user._id }).then((result) => {
      
        if (result) return done(null, result);
        return done(null, false);
      })
      .catch(err=>done(err,false))
    })
  );
};
