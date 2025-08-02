const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(() => {
    console.log("Connected Successfully");
}).catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/vibnb")
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "683451fe2e341954eaa3dca7"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();