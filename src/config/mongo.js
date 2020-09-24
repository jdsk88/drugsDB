import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}).then(()=>{
  console.log(`connected ${process.env.MONGO_DB}`)
})

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });

// kitty.save().then(() => console.log('meow'));