const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

MONGO_URL = "mongodb://127.0.0.1:27017/Locasa";

const main = async () => {
  await mongoose.connect(MONGO_URL);
};

main()
  .then(() => {
    console.log("Connected to mongo Db");
  })
  .catch((err) => {
    console.log(err);
  });

const initdb = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialised");
};
initdb();
