import express from "express";
import "dotenv/config";
const app = express();
import registerRoute from "../routes/register";
import { connect } from "mongoose";
import cors from "cors";

let clientProductionURL = "https://final-upodify-client.vercel.app/";
let clientDevelopmentURL = "http://localhost:3000";
const corsOptions = {
	origin: clientProductionURL,
	optionsSuccessStatus: 200,
};

async function run(): Promise<void> {
	// console.log("Process XXXX", process.env);
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
	console.log("Error FFFFF", err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.post("/", (req, res) => {
	console.log("REQUEST IS ", req.headers["access-control-allow-origin"]);
	console.log("Reqquest body", req.body);
	res.status(200).json({ name: "wadood" });
});

app.use("/", registerRoute);
