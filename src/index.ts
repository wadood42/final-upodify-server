import express from "express";
import "dotenv/config";
const app = express();
import { connect } from "mongoose";

async function run(): Promise<void> {
  if (process.env.MONGO_URI) {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
    await connect(process.env.MONGO_URI);
    console.log("Connected MongoDB");
  }
}

run().catch((err) => {
  console.log("Error", err);
});

app.get("/users", (req, res) => {
  res.send("Hello World");
});
