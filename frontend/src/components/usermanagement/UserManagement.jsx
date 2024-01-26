import { React, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import "./UserManagement.css";

function UserManagement() {
  const [formVisible, setFormVisible] = useState("none");
  const [users, setUsers] = useState([]);
  const [userValue, setUserValue] = useState({
    username: "",
    birthday: "",
    picture: "",
    regime_id: 0,
  });

  const showToastMessage = () => {
    toast.success("Les données ont bien été modifiées !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastErrorMessage = () => {
    toast.error("Il y a eu une erreur les données n'ont pas été modifiées !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const getUsers = async () => {
    try {
      const myUsers = await connexion.get(`/users`).then((res) => res.data);
      setUsers(myUsers);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "regime_id") {
      setUserValue((previousState) => ({
        ...previousState,
        [event.target.name]: +event.target.value,
      }));
    } else {
      setUserValue((previousState) => ({
        ...previousState,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const putUser = async (event) => {
    event.preventDefault();
    try {
      connexion.put(`/users/${userValue.id}`, userValue);
      showToastMessage();
      getUsers();
      setFormVisible("none");
    } catch (error) {
      showToastErrorMessage();
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const loadUser = (user) => {
    setFormVisible("grid");
    setUserValue(user);
  };

  const deleteUser = async (id) => {
    try {
      connexion.delete(`/users/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRequest = (event) => {
    if (userValue.id) {
      putUser(event);
    }
  };

  return (
    <div className="table-user-management">
      <div className="contain-form">
        <form
          onSubmit={handleRequest}
          className="form"
          style={{ display: formVisible }}
        >
          <label>
            Username :
            <input
              type="text"
              name="username"
              value={userValue.username}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Birthday :
            <input
              type="date"
              name="birthday"
              value={userValue.birthday}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Picture :
            <input
              type="text"
              name="picture"
              value={userValue.picture}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Regime :
            <input
              type="number"
              name="regime_id"
              value={userValue.regime_id}
              onChange={handleChange}
              required
            />
          </label>
          <div className="contain-submit">
            <button type="submit" className="button-submit">
              Modify
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
      <table className="tab-users">
        <thead>
          <th>Id</th>
          <th>Username</th>
          <th>Birthday</th>
          <th>Picture</th>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.birthday}</td>
                <td>
                  <img src={user.picture} alt={user.username} />
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteUser(user.id)}
                    className="button-delete"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => loadUser(user)}
                    className="button-put"
                  >
                    Put
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
