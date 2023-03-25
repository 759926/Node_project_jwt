import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { secretKey } from "../controllers/login";
import { passport } from "../config/index";
const verifyToken = (req: any, res: any, next: any) => {
  let bearerheader = req.headers["authorization"];

  if (typeof bearerheader !== "undefined") {
    const bearerToken = bearerheader.split(" ")[1];
    req.token = bearerToken;
    jwt.verify(req.token, secretKey, (err: any, authData: any) => {
      if (err) {
        res.send({
          status: false,
          mess: "unorthorized",
        });
      } else {
        next();
      }
    });
  }else{
   res.status (401).json({
      token : "invalid token"
   })
  }
};

export { verifyToken };
