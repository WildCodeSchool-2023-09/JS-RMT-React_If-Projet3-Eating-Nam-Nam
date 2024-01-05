import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const showToastMessage = () => {
    toast.success("Les données ont bien été enregistrée !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastErrorMessage = () => {
    toast.error(
      "Il y a eu une erreur les données n'ont pas été enregistrée !",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
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
      const response = await connexion.post(`/auth`, userAuth);

      if (response.status === 201) {
        showToastMessage();
        setTimeout(() => {
          navigate("/SignUpUser");
        }, "3000");
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
          <h3>Choose an email and a password</h3>
          <div className="containInput">
            <SignUpInput
              label="Email"
              type="email"
              name="mail"
              value={userAuth.mail}
              onChange={handleChange}
              placeholder="Enter an email"
            />
          </div>
          <div className="containInput">
            <SignUpInput
              label="Password"
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
