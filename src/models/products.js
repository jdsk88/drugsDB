import mongoose from "mongoose";

let randomQuanity = Math.floor(Math.random() * 1000 + 1);

let deckSize = (min, max) => {
    min = 7;
    max = 9;
    return Math.random() * (max - min) + min;
  }


export const productSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  category: {type: String},
  description: { type: String},
  // properties: {
  price: Number,
  size: Number,
  images: [],
  producer_link: String,
  quanity: Number,
  on_stock: Boolean,
// }
});

export const Product = mongoose.model("Product", productSchema);

export const InitProducts = () => {
  const product = new Product({
    // _id: mongoose.Schema.Types.ObjectId,
    name: "Egzul Skateboards",
    category: "Sport",
    description: "SKATEBOARDING",
    // properties:{
    size: `${deckSize().toFixed(1)}`,
    price: 199.99,
    images: [
      {
        one:
          "https://skateaffair.pl/wp-content/uploads/2014/07/jejor-e1406137102650.jpg",
        two: "https://skateaffair.pl/wp-content/uploads/2012/02/egzule.png",
      },
    ],
    producer_link: "https://www.instagram.com/egzul_skateboards/?hl=pl",
    quanity: `${randomQuanity}`,
    on_stock: 1,
  // }
});

  
  return Promise.all([
    product.save().then(() => console.log("saved prod", product)),
    // product1.save().then(() => console.log("saved prod1", product1)),
    // product2.save().then(() => console.log("saved prod2", product2)),
    // product3.save().then(() => console.log("saved prod3", product3)),
  ]);
};

// const product = new Product({
//   name: "jakis ",
//   description: "asfsdaad",
//   price: 232,
//   size: 1215,
//   images: [{ one: "fsafsafsa"}],
//   producer_link: "https://fsafsafsa.pl",
//   quanity: 5226,
//   on_stock: 0,
// })
// const product1 = new Product({
//   name: "produkt",
//   description: "zupa",
//   price: 1,
//   size: 125,
//   images: [{ one: "fgaga"}],
//   producer_link: "https://fsadfsa.pl",
//   quanity: 4,
//   on_stock: 1,
// })
// const product2 = new Product({
//   name: "jakis produkt",
//   description: "placki",
//   price: 22,
//   size: 15,
//   images: [{ one: "https://skateaffair.pl/wp-content/uploads/2014/07/jejor-e1406137102650.jpg"}],
//   producer_link: "https://google.pl",
//   quanity: 56,
//   on_stock: 0,
// })
// const product3 = new Product({
//   name: "jakis produkt",
//   description: "placki",
//   price: 22,
//   size: 15,
//   images: [{ one: "https://skateaffair.pl/wp-content/uploads/2014/07/jejor-e1406137102650.jpg"}],
//   producer_link: "https://google.pl",
//   quanity: 56,
//   on_stock: 0,
// })