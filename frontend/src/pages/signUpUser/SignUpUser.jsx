import { React, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../contexts/Auth";
import connexion from "../../services/connexion";
import SignUpInputUser from "../../components/signupInput/SignUpInputUser";
import "react-toastify/dist/ReactToastify.css";
import "./SignUpUser.css";

function SignUpUser() {
  const { idNewUser } = useContext(AuthContext);

  const [newUser, setNewUser] = useState({
    username: "",
    birthday: "",
    picture: "",
    regime_id: 0,
    auth_id: idNewUser,
  });

  const [regimes, setRegimes] = useState();
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
          navigate("/login");
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

  useEffect(() => {
    getRegimes();
  }, []);

  return (
    <div className="contain-form-signUpUser">
      <h2>More Informations</h2>
      <div className="contain-form">
        <form onSubmit={handleSubmit} className="form-signUpUser">
          <h3>Welcome, please enter your informations!</h3>
          <div className="containInput">
            <SignUpInputUser
              type="text"
              name="username"
              value={newUser.username}
              onChange={handleChange}
              placeholder="Enter a username"
            />
          </div>
          <div className="containInput">
            <SignUpInputUser
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
              type="text"
              name="picture"
              value={newUser.picture}
              onChange={handleChange}
              placeholder="Enter a picture"
              required
            />
          </div>
          <label className="list-regime">
            <select
              name="regime_id"
              value={newUser.regime_id}
              onChange={handleChange}
              required
            >
              <option value={0}>Choose a regime</option>
              {regimes &&
                regimes.map((regime) => (
                  <option key={regime.id} value={regime.id}>
                    {regime.name}
                  </option>
                ))}
            </select>
          </label>
          <div className="contain-submit-user">
            <button type="submit" className="button-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUpUser;
