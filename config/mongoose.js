
//..............................

// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect(`mongodb+srv://routmrutyunjay:Raja%40mongodb95@cluster0.ytlgema.mongodb.net/contacts?retryWrites=true&w=majority`, {
//         useNewUrlParser: true,
//       });
//       console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//       console.error(error.message);
//       process.exit(1);
//     }
// }

// module.exports = connectDB;


const mongoose = require('mongoose');
const url='mongodb+srv://user:Passw0rd@mongodb.p3dgcod.mongodb.net/stocks?retryWrites=true&w=majority'
const url1='mongodb+srv://routmrutyunjay:Raja%40mongodb95@cluster0.ytlgema.mongodb.net/contacts?retryWrites=true&w=majority'
const url3='mongodb+srv://routmrutyunjay:Raja%40mongodb95@cluster0.ytlgema.mongodb.net/?retryWrites=true&w=majority'

 const connectToDatabase = async () => {
  try {
    await mongoose.connect(url3, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to Database :: MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};        
module.exports = connectToDatabase;
