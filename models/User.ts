import { model, Schema } from "mongoose";

import { UserInterface } from "../types";

import mongoose from "mongoose";

const UserSchema = new Schema<UserInterface>(
	{
		email: { type: String, required: true },
		firstName: { type: String, default: "" },
		lastName: { type: String, default: "" },
		password: { type: String, required: true },
	},
	{
		capped: { size: 1024 },
		bufferCommands: false,
		autoCreate: false,
	}
);

const User = model<UserInterface>("User", UserSchema);

export default mongoose.models.User || (await User.createCollection());
