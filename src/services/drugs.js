import { Drugs } from "../models/drugs.js";

export const getAllDrugs = async ({ nazwa, katDostOpak, refund, substCzynna, limit = 10, page = 1 }) => {
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
    })
        .skip(skip)
        .limit(limit);
}
export const getDonatedDrugs = async ({ nazwa, refund, limit = 10, page = 1 }) => {
    const skip = (page - 1) * limit;
    return Drugs.find({
        nazwa: {
            $regex: nazwa || "",
            $options: "-i",
        },
        refund: {
            $regex: refund || "",
            $options: "-i",
        },
    })
        .skip(skip)
        .limit(limit);
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