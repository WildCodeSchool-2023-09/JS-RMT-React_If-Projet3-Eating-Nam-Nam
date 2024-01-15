import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../contexts/Auth";
import connexion from "../../services/connexion";
import LoginInput from "../../components/signupInput/LoginInput";
import "react-toastify/dist/ReactToastify.css";
import "./LogIn.css";

const user = {
  mail: "",
  password: "",
};

const showToastMessage = () => {
  toast.success(
    "Your connection information is correct, you will be redirected !",
    {
      position: toast.POSITION.TOP_RIGHT,
    }
  );
};

const showToastErrorMessage = () => {
  toast.error("Your login information is not correct !", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

function LogIn() {
  const [credentials, setCredentials] = useState(user);
  const { setConnected } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCredentials = (event) => {
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      const valid = await connexion.post("/login", credentials);
      setConnected(valid.data);
      showToastMessage();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      showToastErrorMessage(error);
      setCredentials(user);
    }
  };

  return (
    <div className="contain-form-login">
      <h2>Log In</h2>
      <div className="form-container">
        <form onSubmit={handleRequest} className="form-login">
          <h3>Please enter your informations</h3>
          <div className="contain-input">
            <LoginInput
              type="email"
              name="mail"
              required
              onChange={handleCredentials}
              value={credentials.mail}
              placeholder="Your mail"
            />
          </div>
          <div className="contain-input">
            <LoginInput
              type="password"
              name="password"
              required
              onChange={handleCredentials}
              value={credentials.password}
              placeholder="Your password"
            />
          </div>
          <div>
            <button type="submit" className="button-submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
      <Link to="/signup" className="p-link">
        <p className="p-login">Not registered yet? Create your account</p>
      </Link>
    </div>
  );
}

export default LogIn;
