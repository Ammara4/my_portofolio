const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((database) => {
      console.log(
        `DB connected Successfully at host ${mongoose.connection.host}`
      );
    })
    .catch((err) => {
      console.log(`Oops!Error Occured ${err}`);
    });
};
module.exports = connectDb;
