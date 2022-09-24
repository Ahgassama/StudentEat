import React from "react";
import axios from "axios";
import fileDownload from "js-file-download";

const GetFile = () => {
  const user = JSON.parse(localStorage.getItem("Users"));
  const id = JSON.parse(localStorage.getItem("Users")).userId;
  const config = {
    headers: {
      Authorization: `bearer ${user.token}`,
      "Content-Type": "multipart/form-data",
      responseType: "blob",
    },
  };

  const handleClick = () => {
    axios.get(`http://localhost:3000/api/users/${id}`, config).then((res) => {
      fileDownload(res.data.imageUrl, "justificatif téléchargé");
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Download the File</button>
    </div>
  );
};
export default GetFile;
