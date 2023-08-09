
//..............................

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://routmrutyunjay:Raja%40mongodb95@cluster0.ytlgema.mongodb.net/contacts?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

module.exports = connectDB;
