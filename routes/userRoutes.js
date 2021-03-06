const { Router } = require("express");
/*const { signup, login } = require("../controllers/authControllers");*/ //
//const authParams = require("../middlewares/authParams");

const router = Router();
// Route pour l'inscription d'un user
//router.post("/signup", authParams, signup);
// Route pour l'autentification d'un user
//router.post("/login", authParams, login);

const auth = require("../middlewares/token");
const multer = require("../middlewares/multer-config");

/*// Route pour recupérer toutes les utilisateurs
router.get("/", auth, getAllUsers);
// Route pour recupérer un utilisateur
router.get("/:id", auth, getOneUser);
// Route pour la création d'un utilisateur
router.post("/", auth, multer, createUser);
// Route pour la modification d'un utilisateur
router.put("/:id", auth, multer, updateOneUser);
// Route pour la suppression d'un utilisateur
router.delete("/:id", auth, deleteOneUser);*/

module.exports = router;
