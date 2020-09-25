// import axios from 'axios';
import express from "express";
import { Drugs } from '../models/drugs.js';
const routes = express.Router({});

routes.get('/', function (req, res, next) {
  console.log(req.query)
  Drugs.find({
    nazwa: {
      $regex: req.query.nazwa || " ",
      $options: "-i",
    },
    substCzynna: {
      $regex: req.query.substCzynna || "",
      $options: "-i",
    },
    wielkoscOpak: {
      $regex: req.query.wielkoscOpak || "",
      $options: "-i",
    },
    postac: {
      $regex: req.query.postac || "",
      $options: "-i",
    },
    dawka: {
      $regex: req.query.dawka || "",
      $options: "-i",
    },
  })
    .then((drugs) => {
      res.send(drugs);
    });
});
routes.get('/one', function (req, res, next) {
  console.log(req.query)
  Drugs.findOne({
    nazwa: {
      $regex: req.query.nazwa || "",
      $options: "-i",
    }
  })
    .then((drugs) => {
      res.send(drugs);
    });
});
routes.get('/params', function (req, res, next) {
  console.log(req.query)
  Drugs.findOne({
    rodzajPrep: {
      $regex: req.query.rodzajPrep || "",
      $options: "-i",
    },
    katalog: {
      $regex: req.query.katalog || "",
      $options: "-i",
    },
    refund: {
      $regex: req.query.refund || "",
      $options: "-i",
    },
    grupaLimit: {
      $regex: req.query.grupaLimit || "",
      $options: "-i",
    },
    zakrWskazPoza: {
      $regex: req.query.zakrWskazPoza || "",
      $options: "-i",
    }
  })
    .then((drugs) => {
      res.send(drugs);
    });
});

routes.get('/all', function (req, res, next) {
  console.log(req.query)
  Drugs.find().then((drugs) => {
    res.send(drugs);
  });
});

// routes.get("/insert", (req, res) => {

//   let page = 0;
//   function update_data() {
//     page++;
//     let url = `http://services.dlk24.pl/api/drugs/getDrugs/${page}/100`;
//     // console.log(url);
//     axios(url).then((r) => {
//       const drugsDB = r.data;
//       drugsDB.forEach(element => {
//         Drugs.insertMany({
//           id: element.id,
//           sysDateCreated: element.sysDateCreated,
//           sysDateUpdated: element.sysDateUpdated,
//           sysUserId: element.sysUserId,
//           nazwa: element.nazwa,
//           rodzajPrep: element.rodzajPrep,
//           nazPowStos: element.nazPowStos,
//           postac: element.postac,
//           dawka: element.dawka,
//           podmOdpow: element.podmOdpow,
//           typProc: element.typProc,
//           nrPozw: element.nrPozw,
//           waznPozw: element.waznPozw,
//           kodAtc: element.kodAtc,
//           substCzynna: element.substCzynna,
//           ean: element.ean,
//           wielkoscOpak: element.wielkoscOpak,
//           jednWielkOpak: element.jednWielkOpak,
//           katDostOpak: element.katDostOpak,
//           skasowane: element.skasowane,
//           nrEu: element.nrEu,
//           dystrRown: element.dystrRown,
//           nazPostDawka: element.nazPostDawka,
//           zawOpak: element.zawOpak,
//           terminWejscia: element.terminWejscia,
//           okresObowiazDec: element.okresObowiazDec,
//           grupaLimit: element.grupaLimit,
//           urzCenaZb: element.urzCenaZb,
//           cenaHurtBrut: element.cenaHurtBrut,
//           cenaDetal: element.cenaDetal,
//           wysokLimitu: element.wysokLimitu,
//           zakrWskazRef: element.zakrWskazRef,
//           zakrWskazPoza: element.zakrWskazPoza,
//           poziomOdpl: element.poziomOdpl,
//           wysokDopl: element.wysokDopl,
//           katalog: element.katalog,
//           refund: element.refund
//         });
//       });
//     })

//     if (page == '865') {
//       clearInterval(this)
//     }
//   };
//   setInterval(update_data, 500)
//   res.send("pharbacy drugs data base is updating");
//   console.log("pharbacy drugs data base is updating");
// });

export default routes;