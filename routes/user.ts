import express, { Request, Response } from "express";

const router = express.Router();

router.get("/:id", (req: Request, res: Response) => {
	console.log("getting user profile");

	res.status(200).json("success");
});
