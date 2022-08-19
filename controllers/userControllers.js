const User = require("../models/modelsUser");
const fs = require("fs");
exports.getAllUsers = (req, res) => {
  // Validate request
  console.log("get All users!! yeaaaa fenneccita");
};
exports.getOneUser = (req, res) => {
  // Validate request
  console.log("get one user!! yeaaaa fenneccita");
};
exports.getAllUsers = (req, res) => {
  // Validate request
  console.log("get All users!! yeaaaa fenneccita");
};
/*exports.upload = (req, res) => {
  const userObject = JSON.parse(req.body.user);
  const user = new User({
    ...userObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  user
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré!" }))
    .catch((error) => res.status(400).json({ error }));
  // Validate request
  console.log("get All users!! yeaaaa fenneccita");
};*/
/*exports.upload = async (req, res) => {
  try {
    const userToUpdate = req.body;
    const foundUser = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!foundUser) {
      return res.status(404).json({ error: "User non trouvé !" });
    }

    if (req.file) {
      userToUpdate.imageUrl = `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`;
      if (foundUser.imageUrl) {
        fs.unlink(`images/${foundUser.img.split("images/")[1]}`, (err) => {
          console.error(err);
        });
      }
    }

    for (const key in userToUpdate) {
      foundUser[key] = userToUpdate[key];
    }
    await foundUser.save();

    res.status(200).json({ foundUser });
  } catch (error) {
    res.status(500).json({ error });
  }
};*/
exports.upload = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      if (!user) {
        return res.status(404).send("sauce non trouvée");
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
