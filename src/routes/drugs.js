import express from "express";
import axios from 'axios';
import { Drugs } from '../models/drugs.js';
const router = express.Router({});


const url = "http://services.dlk24.pl/api/drugs/getDrugs/1/100";


router.get("/insert", (req, res) => {
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
  res.send("product added to database");
  console.log("product added to database");
});

router.get('/del', function (rew, res) {
  Drugs.deleteMany();
  res.send('db deleted');
});

router.get('/import', function (req, res, next) {
  Drugs.find({
    nazwa: {
      $regex: req.query.nazwa || " ",
    }
  })
    .limit(100)
    .then((drugs) => {
      res.send(drugs);
    });
});

export default router;
