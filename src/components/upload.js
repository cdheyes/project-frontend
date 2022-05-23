import React, { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import "./App.css";

export const Upload = () => {
  const [imageSelected, setImageSelected] = useState("");
  const [imageId, setImageId] = useState();

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "wojru1pn");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/silorain/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    setImageId(data.public_id);
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: "silorain",
    },
  });
  const myImage = cld.image(imageId);
  myImage.resize(
    fill()
      .width(250)
      .height(250)
  );
  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};