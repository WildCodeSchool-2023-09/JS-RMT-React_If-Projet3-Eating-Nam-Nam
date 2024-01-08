import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import SignUpInput from "../../components/singupInput/SignUpInput";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

function SignUp() {
  const [userAuth, setUserAuth] = useState({
    mail: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const showToastMessage = () => {
    toast.success("The data has been recorded successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastErrorMessage = () => {
    toast.error("There was an error the data was not saved !", {
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
      if (confirmPassword === userAuth.password) {
        const response = await connexion.post(`/signup`, userAuth);
        if (response.status === 201) {
          showToastMessage();
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      } else {
        throw new Error("Password don't match!");
      }
    } catch (error) {
      showToastErrorMessage(error);
    }
  };

  return (
    <div className="contain-form-signAuth">
      <h2>Sign Up</h2>
      <div className="contain-form">
        <form onSubmit={handleSubmit} className="form-signUp">
          <h3>Create your account</h3>
          <div className="containInput">
            <SignUpInput
              type="email"
              name="mail"
              value={userAuth.mail}
              onChange={handleChange}
              placeholder="Enter an email"
            />
          </div>
          <div className="containInput">
            <SignUpInput
              type="password"
              name="password"
              value={userAuth.password}
              onChange={handleChange}
              placeholder="Enter a password"
              required
            />
          </div>
          <div className="containInput">
            <SignUpInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="contain-submit-auth">
            <button type="submit" className="button-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
      <Link to="/login" className="p-link">
        <p className="p-login">Already registered? Log in to your account</p>
      </Link>
    </div>
  );
}

export default SignUp;
