import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { QUERY_CURRENT, QUERY_PRODUCTS } from "../utils/queries";
import { ADD_PRODUCT } from "../utils/mutations";
import axios from "axios";
import Auth from "../utils/auth";

function Account() {
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState(null);
  useEffect(() => {
    getImage();
  }, []);
  
  const [formState, setState] = useState({
    productName: "",
    description: "",
    price: "",
    image: "",
  });

  const { loading, data } = useQuery(QUERY_CURRENT);
  const { load, prods} = useQuery(QUERY_PRODUCTS)
  const [addProduct, { error }] = useMutation(ADD_PRODUCT);
  const userData = data?.current || {};
  console.log("user data", userData);

  const productFormSubmit = async (event) => {
    event.preventDefault();
    const newImage = document.getElementById("image").value.substring(12)
    console.log("this is the new image", newImage)
    const formData = new FormData();
    formData.append("image", image);
    const result = await axios.post(
      "http://localhost:3001/upload-image",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    try {
      const productRes = await addProduct({
        variables: {
          productName: formState.productName,
          description: formState.description,
          price: formState.price,
          image: newImage,
        },
        
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onInputChange = (e) => {
    console.log("target files", e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const getImage = async () => {
    const result = await axios.get("http://localhost:3001/get-image");
    console.log("image data", result.data.data);
    setAllImage(result.data.data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-light m-3">Account Page</h1>
      </div>

      <div className="mt-4 p-2 bg-dark text-white rounded">
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
        <p>Shipping Address: {userData.shippingAddress}</p>
      </div>

      <div>
        <h1 className="text-center text-light m-3">Products For Sale</h1>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {userData.productsForSale?.map((product) => {
          return (
            <div className="col">
              <div className="card my-4 h-100">
                <img
                  className="card-img-top"
                  src="/src/public/images/No_Image_available.jpg"
                  alt="product image"
                ></img>
                <div className="card-body">
                  <h3 className="card-title">{product.productName}</h3>
                  <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#" className="btn">
                      View
                    </a>
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="row row-cols-2 row-cols-md-2 g-4">
        
      {allImage == null
        ? ""
        : allImage.map((data) => {
            return (
              <img
                src={(`./images/${data.image}`)}
                height={1000}
                width={1000}
              />
            );
          })}
        
        {/* {userData.productsForSale?.map((product) => {
          return (
            <div className="col">
              <div className="card my-4 h-100">
                <img
                  className="card-img-top"
                  src="/src/public/images/No_Image_available.jpg"
                  alt="product image"
                ></img>
                <div className="card-body">
                  <h3 className="card-title">{product.productName}</h3>
                  <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#" className="btn">
                      View
                    </a>
                  </small>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
      

      <div className="mt-4 p-5 bg-dark text-white rounded">
      <div className="mb-3">
        <h2 className="">Create a product for sale</h2>
        <form onSubmit={productFormSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="productName">Name:</label>
            <input className = "form-control"
              placeholder="Product Name"
              name="productName"
              type="productName"
              id="productName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">Description:</label>
            <input className = "form-control"
              placeholder="Describe your product"
              name="description"
              type="description"
              id="description"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="price">Price:</label>
            <input className = "form-control"
              placeholder="Price in dollars"
              name="price"
              type="number"
              step="1"
              id="price"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
          <label className="form-label" htmlFor="image">Upload an image:</label>
          <input type="file" accept="image/*" onChange={onInputChange} className = "form-control"
              name="image"
              id="image"></input>
          </div>
          <div>
            <button className="btn btn-outline-light" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>




    </div>
  );
}

export default Account;
