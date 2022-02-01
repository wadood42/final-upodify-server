import express from "express";
import "dotenv/config";
const app = express();
import { connect } from "mongoose";

async function run(): Promise<void> {
  if (process.env.MONGO_URI) {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
    await connect(process.env.MONGO_URI);
    console.log("Connected MongoDB");
  }
}

run().catch((err) => {
  console.log("Error", err);
});

app.get("/users", (req, res) => {
  res.status(200).json({ name: "Wadood" });
});
