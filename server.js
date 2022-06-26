const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({
  path: "config/.env",
});
const bodyParser = require("body-parser");
const { initDb } = require("./config/dbConfig");
const extraSetup = require("./config/extraSetup");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Appel de la fonction pour la liaison a sequelize
initDb();
// Appel de la fonction pour définir les associations entre les models
extraSetup();

// route pour placer les images dans le dossier images
app.use("/images", express.static(path.join(__dirname, "images")));
// route pour l'authentification
app.use("/api/auth", authRoutes);
// route pour les Posts
app.use("/api/posts", postRoutes);
// route pour les Users
app.use("/api/users", userRoutes);

app.listen(3000);
