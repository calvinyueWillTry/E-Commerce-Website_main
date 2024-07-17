import { useEffect, useState } from "react";
import axios from "axios";


function createProduct() {
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getImage();
  }, []);

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);


    // change axios
    const result = await axios.post(
      "http://localhost:3001/upload-image",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const getImage = async () => {
    const result = await axios.get("http://localhost:3001/get-image");
    console.log("image data", result.data.data);
    setAllImage(result.data.data);
  };

  return (
    <div>
      <form onSubmit={submitImage}>
        <input type="file" accept="image/*" onChange={onInputChange}></input>
        <button type="submit">Submit</button>
      </form>
      {allImage == null
        ? ""
        : allImage.map((data, index) => {
            return (
              <img
                key={index}
                src={`./images/${data.image}`}
                height={100}
                width={100}
              />
            );
          })}
    </div>
  );
}
export default createProduct;