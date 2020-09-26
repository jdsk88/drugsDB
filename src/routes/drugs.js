// import axios from 'axios';
import express from "express";
import { Drugs } from '../models/drugs.js';
import { createDrug, getAllDrugs, getDonatedDrugs, getOneDrug, requestCounter, updateDrug } from "../services/drugs.js";
const routes = express.Router({});

let requests_counter = 0;

routes.get('/', async (req, res) => {
  let query = JSON.stringify(req.query);
  console.log(query)
  console.log(req.query)
  const drugs = await getAllDrugs({
    nazwa: req.query.nazwa,
    substCzynna: req.query.substCzynna,
    katDostOpak: req.query.katDostOpak,
    wielkoscOpak: req.query.wielkoscOpak,
    postac: req.query.postac,
    limit: parseInt(req.query.limit),
    page: parseInt(req.query.page),
  });
  res.send(drugs + " " + `{ilość_kluczy_${query}:${drugs.length}}`)
  // console.log(JSON.stringify(drugs))
  console.log(drugs.length)
});

routes.post('/', async (req, res) => {
  console.log(req.query)
  const { drug_id } = req.params;
  const {
    sysDateCreated,
    sysDateUpdated,
    sysUserId,
    nazwa,
    rodzajPrep,
    nazPowStos,
    postac,
    dawka,
    podmOdpow,
    typProc,
    nrPozw,
    waznPozw,
    kodAtc,
    substCzynna,
    ean,
    wielkoscOpak,
    jednWielkOpak,
    katDostOpak,
    skasowane,
    nrEu,
    dystrRown,
    nazPostDawka,
    zawOpak,
    terminWejscia,
    okresObowiazDec,
    grupaLimit,
    urzCenaZb,
    cenaHurtBrut,
    cenaDetal,
    wysokLimitu,
    zakrWskazRef,
    zakrWskazPoza,
    poziomOdpl,
    wysokDopl,
    katalog,
    refund } = req.body;
  const addDrug = await createDrug({
    id: drug_id,
    sysDateCreated,
    sysDateUpdated,
    sysUserId,
    nazwa,
    rodzajPrep,
    nazPowStos,
    postac,
    dawka,
    podmOdpow,
    typProc,
    nrPozw,
    waznPozw,
    kodAtc,
    substCzynna,
    ean,
    wielkoscOpak,
    jednWielkOpak,
    katDostOpak,
    skasowane,
    nrEu,
    dystrRown,
    nazPostDawka,
    zawOpak,
    terminWejscia,
    okresObowiazDec,
    grupaLimit,
    urzCenaZb,
    cenaHurtBrut,
    cenaDetal,
    wysokLimitu,
    zakrWskazRef,
    zakrWskazPoza,
    poziomOdpl,
    wysokDopl,
    katalog,
    refund
  });
  res.send(addDrug);
  console.log(addDrug)
});

routes.get('/donated', async (req, res) => {
  console.log(req.query)
  const donatedDrugs = await getDonatedDrugs({
    nazwa: req.query.nazwa,
    substCzynna: req.query.substCzynna,
    rodzajPrep: req.query.rodzajPrep,
    katalog: req.query.katalog,
    refund: req.query.refund,
    limit: parseInt(req.query.limit),
    page: parseInt(req.query.page),
  });
  res.send(donatedDrugs)
  // console.log(donatedDrugs)

});

routes.get('/:drug_id', async (req, res) => {
  requests_counter++;
  console.log(req.query)
  const { drug_id } = req.params;
  const oneDrugById = await getOneDrug({ id: drug_id });
  console.log("Get by ID : " + drug_id + " | " + requests_counter);
  res.send(oneDrugById);
});


routes.put('/:drug_id', async (req, res) => {
  // requests_counter++;
  // console.log("Get by ID : "+requests_counter);
  console.log(req.query);

  const { drug_id } = req.params;
  const {
    sysDateCreated,
    sysDateUpdated,
    sysUserId,
    nazwa,
    rodzajPrep,
    nazPowStos,
    postac,
    dawka,
    podmOdpow,
    typProc,
    nrPozw,
    waznPozw,
    kodAtc,
    substCzynna,
    ean,
    wielkoscOpak,
    jednWielkOpak,
    katDostOpak,
    skasowane,
    nrEu,
    dystrRown,
    nazPostDawka,
    zawOpak,
    terminWejscia,
    okresObowiazDec,
    grupaLimit,
    urzCenaZb,
    cenaHurtBrut,
    cenaDetal,
    wysokLimitu,
    zakrWskazRef,
    zakrWskazPoza,
    poziomOdpl,
    wysokDopl,
    katalog,
    refund } = req.body;
  const upDrug = await updateDrug({
    id: drug_id,
    sysDateCreated,
    sysDateUpdated,
    sysUserId,
    nazwa,
    rodzajPrep,
    nazPowStos,
    postac,
    dawka,
    podmOdpow,
    typProc,
    nrPozw,
    waznPozw,
    kodAtc,
    substCzynna,
    ean,
    wielkoscOpak,
    jednWielkOpak,
    katDostOpak,
    skasowane,
    nrEu,
    dystrRown,
    nazPostDawka,
    zawOpak,
    terminWejscia,
    okresObowiazDec,
    grupaLimit,
    urzCenaZb,
    cenaHurtBrut,
    cenaDetal,
    wysokLimitu,
    zakrWskazRef,
    zakrWskazPoza,
    poziomOdpl,
    wysokDopl,
    katalog,
    refund
  });
  res.send(upDrug);
  console.log(upDrug)
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