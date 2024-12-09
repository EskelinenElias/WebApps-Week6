import mongoose, { Connection } from "mongoose";

// Connect to database
async function dbConnect(address: string): Promise<Connection> {
  try {
    // Configure mongoose
    mongoose.Promise = Promise;

    // Establish connection
    await mongoose.connect(address);

    // Add error handling
    mongoose.connection.on(
      "error",
      console.error.bind(console, "Database connection error."),
    );

    return mongoose.connection;
  } catch (error) {
    console.error("Could not connect to database", error);
    throw new Error("Could not connect to database");
  }
}

export default dbConnect;

// eof






