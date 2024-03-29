const User = require("../models/modelsUser");
const fs = require("fs");
exports.getAllUsers = (req, res) => {
  User.find()
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
};
exports.getOneUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteOneUser = (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      if (req.file) {
        const filename = user.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          User.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Objet supprimé !" }))
            .catch((error) => res.status(400).json({ error }));
        });
      }
      User.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Utilisateur supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.upload = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      if (!user) {
        return res.status(404).send("utilisateur non trouvée");
      }
      const oldImg = user.imageUrl;
      let userToUpdate;
      if (req.file) {
        userToUpdate = {
          ...req.body,
          imageUrl: `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
          }`,
        };
      } else {
        userToUpdate = { ...req.body };
      }

      User.updateOne(
        { _id: req.params.id },
        { ...userToUpdate, _id: req.params.id }
      )
        .then(() => {
          if (req.file) {
            //suppression de lancienne image : le nom de lancien image est stocké dans la variable oldImg
            fs.unlink(`images/"${oldImg}`, () => {
              res.status(200).json({ message: "Update image  !" });
            });
          } else {
            res.status(200).json({ message: "Update user!" });
          }
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(400).json({ error }));
};
/*exports.download = (req, res) => {
  const fileName = req.file.filename;
  const directoryPath = __dirname + "/images/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};
*/
exports.download = (req, res) => {
  const directoryPath = __dirname + "/images/";
  User.findOne({ _id: req.params.id })
    .then((user) => {
      if (!user) {
        return res.status(404).send("utilisateur non trouvée");
      }
      const img = user.imageUrl;

      if (req.file) {
        fs.createReadStream(directoryPath`/${img}`, () => {
          res.status(200).json({ message: "download image  !" });
        });
      } else {
        res.status(200).json({ message: "Update user!" });
      }
    })
    .catch((error) => res.status(400).json({ error }));
};
