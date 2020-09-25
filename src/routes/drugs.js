// import axios from 'axios';
import express from "express";
import { Drugs } from '../models/drugs.js';
import { getAllDrugs, getDonatedDrugs } from "../services/drugs.js";
const routes = express.Router({});

routes.get('/', async (req, res) => {
  console.log(req.query)
  const drugs = await getAllDrugs({
    nazwa: req.query.nazwa,
    substCzynna: req.query.substCzynna,
    // wielkoscOpak: req.query.wielkoscOpak,
    katDostOpak: req.query.katDostOpak,
    // postac: req.query.postac,
    // rodzajPrep: req.query.rodzajPrep,
    // katalog: req.query.katalog,
    refund: req.query.refund,
    // grupaLimit: req.query.grupaLimit,
    // zakrWskazPoza: req.query.zakrWskazPoza,
    limit: parseInt(req.query.limit),
    page: parseInt(req.query.page),
  });
  res.send(drugs)
});
routes.get('/donated', async (req, res) => {
  console.log(req.query)
  const donatedDrugs = await getDonatedDrugs({
    nazwa: req.query.nazwa,
    // substCzynna: req.query.substCzynna,
    // wielkoscOpak: req.query.wielkoscOpak,
    // katDostOpak: req.query.katDostOpak,
    // postac: req.query.postac,
    // rodzajPrep: req.query.rodzajPrep,
    // katalog: req.query.katalog,
    refund: req.query.refund,
    // grupaLimit: req.query.grupaLimit,
    // zakrWskazPoza: req.query.zakrWskazPoza,
    limit: parseInt(req.query.limit),
    page: parseInt(req.query.page),
  });
  res.send(donatedDrugs)
});

// routes.get('/params', function (req, res, next) {
//   console.log(req.query)
//   Drugs.find({
//     rodzajPrep: {
//       $regex: req.query.rodzajPrep || "",
//       $options: "-i",
//     },
//     katalog: {
//       $regex: req.query.katalog || "",
//       $options: "-i",
//     },
//     refund: {
//       $regex: req.query.refund || "",
//       $options: "-i",
//     },
//     grupaLimit: {
//       $regex: req.query.grupaLimit || "",
//       $options: "-i",
//     },
//     zakrWskazPoza: {
//       $regex: req.query.zakrWskazPoza || "",
//       $options: "-i",
//     }
//   })
//     .then((drugs) => {
//       res.send(drugs);
//     });
// });


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