import { model, Schema } from "mongoose";

import { UserInterface } from "../types";

import mongoose from "mongoose";

const UserSchema = new Schema<UserInterface>({
	email: { type: String, required: true },
	firstName: { type: String, default: "" },
	lastName: { type: String, default: "" },
	password: { type: String, required: true },
});

export default mongoose.models.User || model<UserInterface>("User", UserSchema);
