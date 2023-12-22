import { React, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

function SignUp() {
  const [userAuth, setUserAuth] = useState({
    mail: "",
    password: "",
  });

  const showToastMessage = () => {
    toast.success("Les données ont bien été modifiée !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastErrorMessage = () => {
    toast.error("Il y a eu une erreur les données n'ont pas été modifiée !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleChange = (event) => {
    setUserAuth((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth`,
        userAuth
      );

      if (response.status === 201) {
        showToastMessage();
      }
    } catch (error) {
      showToastErrorMessage(error);
    }
  };

  return (
    <div className="contain-form-signAuth">
      <h2>SignUp</h2>
      <div className="contain-form">
        <form onSubmit={handleSubmit} className="form-signUp">
          <h3>Please fill in the fields</h3>
          <div className="containInput">
            <input
              type="email"
              name="mail"
              value={userAuth.mail}
              onChange={handleChange}
              placeholder="Enter an email"
              required
            />
          </div>
          <div className="containInput">
            <input
              type="password"
              name="password"
              value={userAuth.password}
              onChange={handleChange}
              placeholder="Enter a password"
              required
            />
          </div>
          <div className="contain-submit-auth">
            <button type="submit" className="button-submit-signUp">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
