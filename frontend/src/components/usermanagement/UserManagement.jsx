import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserManagement.css";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [userValue, setUserValue] = useState({
    username: "",
    birthday: "",
    picture: "",
    regime_id: 0,
  });

  const getUsers = async () => {
    try {
      const myUsers = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
        .then((res) => res.data);
      console.info(myUsers);
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

  const putUser = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${userValue.id}`,
        userValue
      );
      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const loadUser = (user) => {
    const form = document.querySelector(".form");
    form.style.display = "grid";
    setUserValue(user);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`);
      window.location.reload();
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
    <div className="tableUserManagement">
      <div className="containForm">
        <form
          onSubmit={handleRequest}
          className="form"
          style={{ display: "none" }}
        >
          <label>
            Username :{" "}
            <input
              type="text"
              name="username"
              value={userValue.username}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Birthday :{" "}
            <input
              type="date"
              name="birthday"
              value={userValue.birthday}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Picture :{" "}
            <input
              type="text"
              name="picture"
              value={userValue.picture}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Regime :{" "}
            <input
              type="number"
              name="regime_id"
              value={userValue.regime_id}
              onChange={handleChange}
              required
            />
          </label>
          <div className="containSubmit">
            <button type="submit" className="buttonSubmit">
              Modifier
            </button>
          </div>
        </form>
      </div>
      <table>
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
                  <img src={user.picture} alt={user.city} />
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteUser(user.id)}
                    className="buttonDelete"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => loadUser(user)}
                    className="buttonPut"
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
