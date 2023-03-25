// // make a file from passport 


// import { func } from "joi";
import passport from "passport";


const Secretkey = 'hello';

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

export default  function(passport :any){
    passport.use(
        new JwtStrategy ({
            secretOrKey : Secretkey,
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken()
        }),
         function(jwt_payload:any, cb:any) {
            cb(null, false)
         }
    )
}






export {passport}

