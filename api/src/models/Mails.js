const { Schema, model } = require("mongoose");

const mailSchema = new Schema(
    {
        mail: String,
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Mail = model("Mail", mailSchema);

module.exports = { Mail };