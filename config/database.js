const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://mark:upS0062JLsvzDwh8@cluster0.ffmysuw.mongodb.net/socialApp?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
