import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import connexion from "../../services/connexion";
import "./Dashboard.css";

function Dashboard() {
  const [infoData, setInfoData] = useState();

  const getNumberUsers = async () => {
    try {
      const usersRegime = await connexion
        .get(`/usersByRegimes`)
        .then((res) => res.data);
      setInfoData(usersRegime);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNumberUsers();
  }, []);

  return (
    <div className="contain-graphics">
      <h2>Dashboard Graphics</h2>
      <div className="graphics">
        <BarChart
          width={800}
          height={500}
          data={infoData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value"
            fill="#fe8a1b"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </div>
    </div>
  );
}

export default Dashboard;
