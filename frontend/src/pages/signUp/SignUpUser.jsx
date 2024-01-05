import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import SignUpInputUser from "../../components/singupInput/SignUpInputUser";
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

  const [regimes, setRegimes] = useState();
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
    if (event.target.name === "regime_id") {
      setNewUser((previousState) => ({
        ...previousState,
        [event.target.name]: +event.target.value,
      }));
    } else {
      setNewUser((previousState) => ({
        ...previousState,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await connexion.post(`/users`, newUser);

      if (response.status === 201) {
        showToastMessage();
        setTimeout(() => {
          navigate("/");
        }, "3000");
      }
    } catch (error) {
      showToastErrorMessage(error);
    }
  };

  const getRegimes = async () => {
    try {
      const theRegimes = await connexion.get(`/regime`).then((res) => res.data);
      setRegimes(theRegimes);
    } catch (error) {
      console.error(error);
    }
  };

  const getAuth = async () => {
    try {
      const theIdAuth = await connexion.get(`/auth`).then((res) => res.data);
      setNewUser({ ...newUser, auth_id: theIdAuth.id });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRegimes();
    getAuth();
  }, []);

  return (
    <div className="contain-form-signAuth">
      <h2>More Informations</h2>
      <div className="contain-form">
        <form onSubmit={handleSubmit} className="form-signUp">
          <h3>Welcome, please enter your informations!</h3>
          <div className="containInput">
            <SignUpInputUser
              label="Username"
              type="text"
              name="username"
              value={newUser.username}
              onChange={handleChange}
              placeholder="Enter a username"
            />
          </div>
          <div className="containInput">
            <SignUpInputUser
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
            <SignUpInputUser
              label="Picture"
              type="text"
              name="picture"
              value={newUser.picture}
              onChange={handleChange}
              placeholder="Enter a picture"
              required
            />
          </div>
          <label className="listeRegime">
            Votre regime alimentaire
            <select
              name="regime_id"
              value={newUser.regime_id}
              onChange={handleChange}
              required
            >
              <option value={0}>Choisir une option</option>
              {regimes &&
                regimes.map((regime) => (
                  <option key={regime.id} value={regime.id}>
                    {regime.name}
                  </option>
                ))}
            </select>
          </label>
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

export default SignUpUser;
