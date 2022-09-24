import React, { useState } from "react";

import axios from "axios";

const NewDoc = () => {
  const [image, setNewFile] = useState("");
  const onInputChange = (e) => {
    setNewFile(e.target.files[0]);
  };

  const handlePost = (e) => {
    const user = JSON.parse(localStorage.getItem("Users"));
    const id = JSON.parse(localStorage.getItem("Users")).userId;
    const config = {
      headers: {
        Authorization: `bearer ${user.token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const data = new FormData();
    data.append("image", image);

    e.preventDefault();
    axios
      .put(`http://localhost:3000/api/users/${id}`, data, config)
      .then((res) => {
        if (res.data.errors) {
          console.log("pas de document");
        } else {
          console.log(res);
          document.getElementById("image").value = "";
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <form
      onSubmit={handlePost}
      encType="multipart/form-data"
      className="post-form"
    >
      <input
        name="image"
        type="file"
        id="image"
        accept=".jpg, .jpeg, .png, .gif,.pdf"
        onChange={onInputChange}
        aria-labelledby="image"
      />
      <br />
      <input id="post-input" type="submit" value="Envoyer" />
    </form>
  );
};

export default NewDoc;
