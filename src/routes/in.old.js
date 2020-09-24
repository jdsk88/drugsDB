import axios from 'axios';
import express from "express";
import { Drugs } from '../models/drugs.js';
const routes = express.Router({});

routes.get('/get', function (req, res, next) {
  Drugs.find({
    nazwa: {
      $regex: req.query.nazwa || " ",
    }
  })
    .limit(10000)
    .then((drugs) => {
      res.send(drugs);
    });
});


routes.get("/insert", (req, res) => {
let page = 0;
function update_data() {
    page++;
    let url = `http://services.dlk24.pl/api/drugs/getDrugs/${page}/100`;
    // console.log(url);
    axios(url).then((r) => {
        const drugsDB = r.data;
        drugsDB.forEach(element => {
          Drugs.insertMany({
            id: element.id,
            sysDateCreated: element.sysDateCreated,
            sysDateUpdated: element.sysDateUpdated,
            sysUserId: element.sysUserId,
            nazwa: element.nazwa,
            rodzajPrep: element.rodzajPrep,
            nazPowStos: element.nazPowStos,
            postac: element.postac,
            dawka: element.dawka,
            podmOdpow: element.podmOdpow,
            typProc: element.typProc,
            nrPozw: element.nrPozw,
            waznPozw: element.waznPozw,
            kodAtc: element.kodAtc,
            substCzynna: element.substCzynna,
            ean: element.ean,
            wielkoscOpak: element.wielkoscOpak,
            jednWielkOpak: element.jednWielkOpak,
            katDostOpak: element.katDostOpak,
            skasowane: element.skasowane,
            nrEu: element.nrEu,
            dystrRown: element.dystrRown,
            nazPostDawka: element.nazPostDawka,
            zawOpak: element.zawOpak,
            terminWejscia: element.terminWejscia,
            okresObowiazDec: element.okresObowiazDec,
            grupaLimit: element.grupaLimit,
            urzCenaZb: element.urzCenaZb,
            cenaHurtBrut: element.cenaHurtBrut,
            cenaDetal: element.cenaDetal,
            wysokLimitu: element.wysokLimitu,
            zakrWskazRef: element.zakrWskazRef,
            zakrWskazPoza: element.zakrWskazPoza,
            poziomOdpl: element.poziomOdpl,
            wysokDopl: element.wysokDopl,
            katalog: element.katalog,
            refund: element.refund
          });
        });
      })

    if (page == '865') {
        clearInterval(this)
    }
};
setInterval(update_data, 1000)
res.send("product added to database");
console.log("product added to database");
});

export default routes;