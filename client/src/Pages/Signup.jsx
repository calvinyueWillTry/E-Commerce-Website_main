import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function signUp(props) {
  const [formState, setState] = useState({
    username: "",
    email: "",
    password: "",
    shippingAddress: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const signUpFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const signUpRes = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
          shippingAddress: formState.shippingAddress,
        },
      });
      const token = signUpRes.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...formState,
      [name]: value,
    });
  };

  if (error) {
    alert("There was a problem creating an account for you..");
  }

  return (
    <div className="mt-4 p-5 bg-dark text-white rounded">
      <div className="mb-3">
        <h2 className="">Sign Up</h2>
        <form onSubmit={signUpFormSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">Username:</label>
            <input className = "form-control"
              placeholder="Your Username"
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email:</label>
            <input className = "form-control"
              placeholder="example@email.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">Password:</label>
            <input className = "form-control"
              placeholder="Your Username"
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="shipping">Shipping Address:</label>
            <input className = "form-control"
              placeholder="Shipping Address"
              name="shippingAddress"
              type="shippingAddress"
              id="shipping"
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn btn-outline-light" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Link to="/login">Already have an account? Click here.</Link>
    </div>
  );
}

export default signUp;
