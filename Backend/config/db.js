const mongoose = require("mongoose");
const mongourl = "mongodb+srv://abishekitta:travlrmongo@cluster0.dni7frl.mongodb.net/?retryWrites=true&w=majority";
try {
  mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Connected to database successfully");
} catch (err) {
  console.log("Error connecting to the database");
}