const mongoose = require("mongoose");

const mongoURI =
  "mongodb://127.0.0.1:27017/knotebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1";
// "mongodb+srv://karansuryawanshi:Lt.Karan@2024@cluster0.powpyib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo successfully....");
  });
};

module.exports = connectToMongo;
