const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://last:last123@cluster0.pmqdl.mongodb.net/mernapp?retryWrites=true&w=majority"
    );

    console.log(`Connect to MongoDB ${conn.connection.host.cyan.underline}`);
  } catch (error) {
    console.log(`Not Connect`);
    process.exit(1);
  }
};

module.exports = connectDB;
