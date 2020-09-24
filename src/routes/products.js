import express from "express";
import { Product, InitProducts } from "../models/products.js";
import fs from "fs";
import date from "date-and-time";
const now = new Date();
const HOST = process.env.HOST;
const PORT = process.env.PORT;

const routes = express.Router({});

routes.get("/", (req, res) => {
  Product.find({
    name: {
      $regex: req.query.name || "",
    },
    category: {
      $regex: req.query.category || "",
    },
    description: {
      $regex: req.query.description || "",
    },
  })
    // .limit(10)
    .then((products) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(products);

      let status = 0;
      if (req.complete === true) {
        status = 200;
      } else {
        status = 404;
      }

      const req_info = [
        {
          method: req.method,
          handler: req.protocol,

          endpoint: HOST + ":" + PORT + req.originalUrl,
          from: req.connection.remoteAddress + ":" + req.connection.remotePort,
          address_family: req.connection.remoteFamily,
          status: status,
          products_founded: products.length,
          request_time: date.format(now, "YYYY/MM/DD HH:mm:ss"),
        },
      ];
      console.table(req_info);

      // write request information into json file
      // var data_array = {
      //   array: [],
      // };
      // data_array.array.push(req_info);
      // var data_query = JSON.stringify(data_array);
      // fs.writeFile("getQueries.json", data_query, "utf8", (error) =>
      //   console.log("Error ? : " + error)
      // );
      // fs.readFile("getQueries.json", "utf8", function readFileCallback(
      //   err,
      //   data_load
      // ) {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     data_array = JSON.parse(data_load);
      //     data_array.array.push(data_query);
      //     data_array = JSON.stringify();
      //     fs.writeFile("getQueries.json", data_query, "utf8", (error) =>
      //       console.log("Error ? : " + error)
      //     );
      //   }
      // });
    });
});

routes.get("/search", (req, res) => {
  Product.find({
    name: {
      $regex: req.query.name || "",
    },
    category: {
      $regex: req.query.category || "",
    },
    description: {
      $regex: req.query.description || "",
    },
  })
    // .limit(10)
    .then((products) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(products);
      let status = 0;
      if (req.complete === true) {
        status = 200;
      } else {
        status = 404;
      }
      const req_info = [
        {
          method: req.method,
          handler: req.protocol,
          endpoint: HOST + ":" + PORT + req.originalUrl,
          from: req.connection.remoteAddress + ":" + req.connection.remotePort,
          address_family: req.connection.remoteFamily,
          status: status,
          products_founded: products.length,
          request_time: date.format(now, "YYYY/MM/DD HH:mm:ss"),
        },
      ];
      console.clear();
      console.table(req_info);
      // write request information into json file
      // var data_array = {
      //   array: [],
      // };
      // data_array.array.push(req_info);
      // var data_query = JSON.stringify(data_array);
      // fs.writeFile("getSearchBarQueries.json", data_query, "utf8", (error) =>
      //   console.log("Error ? : " + error)
      // );
      // fs.readFile("getSearchBarQueries.json", "utf8", function readFileCallback(
      //   err,
      //   data_load
      // ) {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     data_array = JSON.parse(data_load);
      //     data_array.array.push(data_query);
      //     data_array = JSON.stringify();
      //     fs.writeFile("getQueries.json", data_query, "utf8", (error) =>
      //       console.log("Error ? : " + error)
      //     );
      //   }
      // });
    });
});

routes.get("/description", (req, res) => {
  Product.find({
    description: {
      $regex: req.query.description || "",
    },
  })
    // .limit(10)
    .then((products) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(products);

      let status = 0;
      if (req.complete === true) {
        status = 200;
      } else {
        status = 404;
      }
      const req_info = [
        {
          method: req.method,
          handler: req.protocol,
          endpoint: HOST + ":" + PORT + req.originalUrl,
          from: req.connection.remoteAddress + ":" + req.connection.remotePort,
          address_family: req.connection.remoteFamily,
          status: status,
          products_founded: products.length,
          request_time: date.format(now, "YYYY/MM/DD HH:mm:ss"),
        },
      ];
      // console.clear();
      console.table(req_info);
      // write request information into json file
      // var data_array = {
      //   array: [],
      // };
      // data_array.array.push(req_info);
      // var data_query = JSON.stringify(data_array);
      // fs.writeFile("getDescritionQueries.json", data_query, "utf8", (error) =>
      //   console.log("Error ? : " + error)
      // );
      // fs.readFile(
      //   "getDescritionQueries.json",
      //   "utf8",
      //   function readFileCallback(err, data_load) {
      //     if (err) {
      //       console.log(err);
      //     } else {
      //       data_array = JSON.parse(data_load);
      //       data_array.array.push(data_query);
      //       data_array = JSON.stringify();
      //       fs.writeFile("getQueries.json", data_query, "utf8", (error) =>
      //         console.log("Error ? : " + error)
      //       );
      //     }
      //   }
      // );
    });
});

routes.get("/categories", (req, res) => {
  Product.find({
    category: {
      $regex: req.query.category || "",
    },
  })
    // .limit(10)
    .then((products) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(products);

      let status = 0;
      if (req.complete === true) {
        status = 200;
      } else {
        status = 404;
      }
      const req_info = [
        {
          method: req.method,
          handler: req.protocol,
          endpoint: HOST + ":" + PORT + req.originalUrl,
          from: req.connection.remoteAddress + ":" + req.connection.remotePort,
          address_family: req.connection.remoteFamily,
          status: status,
          products_founded: products.length,
          request_time: date.format(now, "YYYY/MM/DD HH:mm:ss"),
        },
      ];
      // console.clear();
      console.table(req_info);
      // write request information into json file
      // var data_array = {
      //   array: [],
      // };
      // data_array.array.push(req_info);
      // var data_query = JSON.stringify(data_array);
      // fs.writeFile("getCategoryQueries.json", data_query, "utf8", (error) =>
      //   console.log("Error ? : " + error)
      // );
      // fs.readFile("getCategoryQueries.json", "utf8", function readFileCallback(
      //   err,
      //   data_load
      // ) {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     data_array = JSON.parse(data_load);
      //     data_array.array.push(data_query);
      //     data_array = JSON.stringify();
      //     fs.writeFile("getQueries.json", data_query, "utf8", (error) =>
      //       console.log("Error ? : " + error)
      //     );
      //   }
      // });
    });
});

routes.get("/price", (req, res) => {
  Product.find({
    price: {
      $regex: req.query.price,
    },
  })
    .limit(10)
    .then((products) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(products);
    });
});

routes.get("/", (req, res) => {
  Product.findOneAndDelete({
    name: {
      $regex: req.query.name || "",
    },
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send("placki");
});

routes.post("/", (req, res) => {
  Product.insertMany({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    // properties:{
    price: req.body.price,
    size: req.body.size,
    images: [req.body.images],
    producer_link: req.body.producer_link,
    quanity: req.body.quanity,
    on_stock: req.body.on_stock,
    request_time: date.format(now, "YYYY/MM/DD HH:mm:ss"),
    // }
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.send("product added to database");

  let status = 0;
  if (req.complete === true) {
    status = 200;
  } else {
    status = 404;
  }
  const req_info = [
    {
      method: req.method,
      handler: req.protocol,
      // complete: req.complete,
      // secure: req.secure,
      endpoint: HOST + ":" + PORT + req.originalUrl,
      from: req.connection.remoteAddress + ":" + req.connection.remotePort,
      address_family: req.connection.remoteFamily,
      status: status,
      // products_founded: products.length,
      request_time: date.format(now, "YYYY/MM/DD HH:mm:ss"),
    },
  ];
  // console.clear();
  console.table(req_info);
  
});

routes.get("/init", (req, res) => {
  InitProducts().then(() => {
    let status = 0;
    if (req.complete === true) {
      status = 200;
    } else {
      status = 404;
    }
    const req_info = [
      {
        method: req.method,
        handler: req.protocol,
        // complete: req.complete,
        // secure: req.secure,
        endpoint: HOST + ":" + PORT + req.originalUrl,
        from: req.connection.remoteAddress + ":" + req.connection.remotePort,
        address_family: req.connection.remoteFamily,
        status: status,
        products_founded: products.length,
        request_time: date.format(now, "YYYY/MM/DD HH:mm:ss"),
      },
    ];
    // console.clear();
    console.table(req_info);
    res.send("done");
  });
});

routes.get("/delete", (req, res) => {
  Product.deleteMany().then(() => {
    let status = 0;
    if (req.complete === true) {
      status = 200;
    } else {
      status = 404;
    }
    const req_info = [
      {
        method: req.method,
        handler: req.protocol,
        endpoint: HOST + ":" + PORT + req.originalUrl,
        from: req.connection.remoteAddress + ":" + req.connection.remotePort,
        address_family: req.connection.remoteFamily,
        status: status,
        request_time: date.format(now, "YYYY/MM/DD HH:mm:ss"),
      },
    ];
    console.table(req_info);
    res.send("product list deleted");
  });
});

routes.get(`/update`, (req, res, next) => {
  const item = {
    name: "zero skateboards",
    description: "skateboarding",
    price: 454,
    size: 55,
    images:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    // producer_link: String,
    quanity: 11111,
    on_stock: 1,
  };

  const id = req.body.id;
  Product.updateOne({ _id: `${id}` }, { $set: item });
  res.send("updated");
});

export default routes;
