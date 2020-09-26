import { Drugs } from "../models/drugs.js";

export const getAllDrugs = async ({ nazwa, katDostOpak, substCzynna, wielkoscOpak, postac, limit = 10, page = 1 }) => {
    const skip = (page - 1) * limit;
    return Drugs.find({
        nazwa: {
            $regex: nazwa || "",
            $options: "-i",
        },
        katDostOpak: {
            $regex: katDostOpak || "",
            $options: "-i",
        },
        substCzynna: {
            $regex: substCzynna || "",
            $options: "-i",
        },
        wielkoscOpak: {
            $regex: wielkoscOpak || "",
            $options: "-i",
        },
        postac: {
            $regex: postac || "",
            $options: "-i",
        }

    })
        .skip(skip)
        .limit(limit);
}
export const getDonatedDrugs = async ({ refund, katalog, substCzynna, rodzajPrep, limit = 10, page = 1 }) => {
    const skip = (page - 1) * limit;
    return Drugs.find({
        refund: {
            $regex: refund || "",
            $options: "-i",
        },
        katalog: {
            $regex: katalog || "",
            $options: "-i",
        },
        substCzynna: {
            $regex: substCzynna || "",
            $options: "-i",
        },
        rodzajPrep: {
            $regex: rodzajPrep || "",
            $options: "-i",
        },
    })
        .skip(skip)
        .limit(limit);
}

export const getOneDrug = async ({ id }) => {
    return Drugs.findById(id);
};

export const createDrug = async ({ sysDateCreated, sysDateUpdated, sysUserId, nazwa, rodzajPrep, nazPowStos, postac, dawka, podmOdpow, typProc, nrPozw, waznPozw, kodAtc, substCzynna, ean, wielkoscOpak, jednWielkOpak, katDostOpak, skasowane, nrEu, dystrRown, nazPostDawka, zawOpak, terminWejscia, okresObowiazDec, grupaLimit, urzCenaZb, cenaHurtBrut, cenaDetal, wysokLimitu, zakrWskazRef, zakrWskazPoza, poziomOdpl, wysokDopl, katalog, refund, }) => {
    const drug = new Drugs({
        sysDateCreated, sysDateUpdated, sysUserId, nazwa, rodzajPrep, nazPowStos, postac, dawka, podmOdpow, typProc, nrPozw, waznPozw, kodAtc, substCzynna, ean, wielkoscOpak, jednWielkOpak, katDostOpak, skasowane, nrEu, dystrRown, nazPostDawka, zawOpak, terminWejscia, okresObowiazDec, grupaLimit, urzCenaZb, cenaHurtBrut, cenaDetal, wysokLimitu, zakrWskazRef, zakrWskazPoza, poziomOdpl, wysokDopl, katalog, refund,
    });
    return drug.save()
}

export const updateDrug = async ({ id,  sysDateCreated, sysDateUpdated, sysUserId, nazwa, rodzajPrep, nazPowStos, postac, dawka, podmOdpow, typProc, nrPozw, waznPozw, kodAtc, substCzynna, ean, wielkoscOpak, jednWielkOpak, katDostOpak, skasowane, nrEu, dystrRown, nazPostDawka, zawOpak, terminWejscia, okresObowiazDec, grupaLimit, urzCenaZb, cenaHurtBrut, cenaDetal, wysokLimitu, zakrWskazRef, zakrWskazPoza, poziomOdpl, wysokDopl, katalog, refund, }) => {
    const drug = Drugs.findById({ id });
    return drug.update({sysDateCreated, sysDateUpdated, sysUserId, nazwa, rodzajPrep, nazPowStos, postac, dawka, podmOdpow, typProc, nrPozw, waznPozw, kodAtc, substCzynna, ean, wielkoscOpak, jednWielkOpak, katDostOpak, skasowane, nrEu, dystrRown, nazPostDawka, zawOpak, terminWejscia, okresObowiazDec, grupaLimit, urzCenaZb, cenaHurtBrut, cenaDetal, wysokLimitu, zakrWskazRef, zakrWskazPoza, poziomOdpl, wysokDopl, katalog, refund})
}

export const requestCounter = async ({ id, nazPostDawka}) => {
    const reqCount = Drugs.findById({id});
    return reqCount.update({nazPostDawka})
}



// export const delete all = async ({ nazwa, substCzynna, wielkoscOpak, katDostOpak, postac, rodzajPrep, katalog, refund, grupaLimit, zakrWskazPoza, limit = 10, page = 1 }) => {
// substCzynna: {
//     $regex: substCzynna || "",
//     $options: "-i",
// },
// wielkoscOpak: {
//     $regex: wielkoscOpak || "",
//     $options: "-i",
// },
// katDostOpak: {
//     $regex: katDostOpak || "",
//     $options: "-i",
// },
// postac: {
//     $regex: postac || "",
//     $options: "-i",
// }, rodzajPrep: {
//     $regex: rodzajPrep || "",
//     $options: "-i",
// },
// katalog: {
//     $regex: katalog || "",
//     $options: "-i",
// },
// refund: {
//     $regex: refund || "",
//     $options: "-i",
// },
// grupaLimit: {
//     $regex: grupaLimit || "",
//     $options: "-i",
// },
// zakrWskazPoza: {
//     $regex: zakrWskazPoza || "",
//     $options: "-i",
// }
// })
// .skip(skip)
// .limit(limit);
// }