import mongoose, { Schema } from "mongoose";
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });
export default mongoose.model("Book", bookSchema);
