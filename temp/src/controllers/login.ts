const secretKey = 'chemihelio';
import jwt from 'jsonwebtoken';
import express from 'express';

const loginroute = express.Router();
loginroute.post("/login", (req, res) => {
   const user = {
     name: "sandeep",
     password : 1234567
   };
   jwt.sign({ user }, secretKey, { expiresIn: "180s" }, (err, token) => {
     res.json({
       token,
     });
   });
 });
 export {loginroute,secretKey};