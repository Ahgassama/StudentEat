const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({
  path: "dBconfig/.env",
});
require("./models/dbConfig");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const userRoutes = require("./routes/userRoutes");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// route pour placer les images dans le dossier images
app.use("/images", express.static(path.join(__dirname, "images")));
// route pour l'authentification
app.use("/api/auth", authRoutes);
// route pour les Users
app.use("/api/users", userRoutes);

app.listen(3000);
