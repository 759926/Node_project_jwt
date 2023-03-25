import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path : '.env.example'});

mongoose.set('debug', true);
const databaseLoader = async () => new Promise<any>((resolve, reject) => {
  mongoose.set('strictQuery', false);
  mongoose.connect(String(process.env.MONGO_URI), {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  })
    .then(db => {
      console.log('Database connection established');
      resolve(db);
    })
    .catch(reject);
});

databaseLoader();

export { databaseLoader };
