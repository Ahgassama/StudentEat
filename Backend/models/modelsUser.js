const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");
// model pour utilisateur
const modelUserSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  imageUrl: { type: String },
});

modelUserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", modelUserSchema);
