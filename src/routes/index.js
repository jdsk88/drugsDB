import express from "express";
import drugs from './drugs.js';


const routes = express.Router({});


const HOST = process.env.HOST;

routes.get("/", (req, res) => {
  res.send("Hello API!");
  console.log(req.method + " on: " + req.protocol + "://" + HOST + req.originalUrl)
});

routes.use('/drugs', drugs)


export default routes;