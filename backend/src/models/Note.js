import mongoose from "mongoose";

// 1- We will create a schema
// 2- Now e will create a model off of that schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {timestamps: true} //createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema)

export default Note

