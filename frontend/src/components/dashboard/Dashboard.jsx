/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import connexion from "../../services/connexion";
import "./Dashboard.css";

const COLORS = ["#C11C43", "#5E9732 ", "#FFD910"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

function TriangleBar(props) {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
}

function Dashboard() {
  const [numberUserByRegime, setNumberUserByRegime] = useState();
  const [numberSectionByRecipe, setNumberSectionByRecipe] = useState();
  const [numberOfUsers, setNumberOfUsers] = useState();
  const [numberOfRecipes, setNumberOfRecipes] = useState();
  const [numberOfIngredients, setNumberOfIngredients] = useState();

  const getNumberUsers = async () => {
    try {
      const usersRegime = await connexion
        .get(`/users/regimes`)
        .then((res) => res.data);
      setNumberUserByRegime(usersRegime);
    } catch (error) {
      console.error(error);
    }
  };

  const getNumberSections = async () => {
    try {
      const sections = await connexion
        .get(`/recipes/sections`)
        .then((res) => res.data);
      setNumberSectionByRecipe(sections);
    } catch (error) {
      console.error(error);
    }
  };

  const getNumberOfUsers = async () => {
    try {
      const users = await connexion
        .get(`/users/stats/nb`)
        .then((res) => res.data);
      setNumberOfUsers(users.value);
    } catch (error) {
      console.error(error);
    }
  };

  const getNumberOfRecipes = async () => {
    try {
      const recipes = await connexion
        .get(`/recipes/stats/nb`)
        .then((res) => res.data);
      setNumberOfRecipes(recipes.value);
    } catch (error) {
      console.error(error);
    }
  };

  const getNumberOfIngredients = async () => {
    try {
      const ingredients = await connexion
        .get(`/ingredients/stats/nb`)
        .then((res) => res.data);
      setNumberOfIngredients(ingredients.value);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNumberUsers();
    getNumberSections();
    getNumberOfUsers();
    getNumberOfRecipes();
    getNumberOfIngredients();
  }, []);

  const data = [
    {
      name: "Users",
      value: numberOfUsers,
    },
    {
      name: "Recipes",
      value: numberOfRecipes,
    },
    {
      name: "Ingredients",
      value: numberOfIngredients,
    },
  ];

  return (
    <div className="contain-graphics">
      <h2>Dashboard Graphics</h2>
      <div className="graphics">
        <div className="user-per-diet">
          <h2>Number of registered users per diet</h2>
          <BarChart
            width={800}
            height={500}
            data={numberUserByRegime}
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
        <div className="percentage-section">
          <h2>Percentage of recipes per section</h2>
          <h3>
            <span className="red">Starter,</span>
            <span className="green">Dish,</span>
            <span className="yellow">Dessert</span>
          </h3>
          <PieChart width={400} height={400}>
            <Pie
              data={numberSectionByRecipe}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {numberSectionByRecipe &&
                numberSectionByRecipe.map((entry, index) => (
                  <Cell
                    // eslint-disable-next-line react/no-array-index-key
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
            </Pie>
          </PieChart>
        </div>
        <div className="percentage-section">
          <h2>Number of users, recipes and ingredients registered</h2>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="value"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
}

TriangleBar.propTypes = {
  fill: PropTypes.string.isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Dashboard;
