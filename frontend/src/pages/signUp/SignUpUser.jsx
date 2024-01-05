import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import connexion from "../../services/connexion";
import SignUpInput from "../../components/singupInput/SignUpInput";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

function SignUpUser() {
  const [newUser, setNewUser] = useState({
    username: "",
    birthday: "",
    picture: "",
    regime_id: 0,
    auth_id: 0,
  });

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
    setNewUser((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await connexion.post(`/user`, newUser);

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
          <h3>Welcome, please enter your informations!</h3>
          <div className="containInput">
            <SignUpInput
              label="Username"
              type="text"
              name="username"
              value={newUser.username}
              onChange={handleChange}
              placeholder="Enter a username"
            />
          </div>
          <div className="containInput">
            <SignUpInput
              label="Birthday"
              type="date"
              name="birthday"
              value={newUser.birthday}
              onChange={handleChange}
              placeholder="Enter your birthday"
              required
            />
          </div>
          <div className="containInput">
            <SignUpInput
              label="Picture"
              type="text"
              name="picture"
              value={newUser.picture}
              onChange={handleChange}
              placeholder="Enter a picture"
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

SignUpUser.propTypes = {
  newUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
    birthday: PropTypes.instanceOf(Date).isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default SignUpUser;
