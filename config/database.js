import mongoose from 'mongoose';

const mongoUri = process.env.DATABASE_URI;

if (!mongoUri) throw new Error('Env database uri is missing');

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    mongoose.set('strictQuery', false);
    cached.promise = await mongoose.connect(mongoUri);
  }

  cached.conn = await cached.promise;

  return cached.conn;
};

export default dbConnect;
