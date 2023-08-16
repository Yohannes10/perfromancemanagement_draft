import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function RatingSummary() {
  const data = [
    {
      name: "Goal A",
      DepartmentalRating: 3,
      SelfRate: 5,
      amt: 5,
    },
    {
      name: "Goal B",
      DepartmentalRating: 3,
      SelfRate: 2,
      amt: 1,
    },
    {
      name: "Goal C",
      DepartmentalRating: 3,
      SelfRate: 5,
      amt: 5,
    },
    {
      name: "Goal D",
      DepartmentalRating: 3,
      SelfRate: 5,
      amt: 8,
    },
    {
      name: "Goal E",
      DepartmentalRating: 5,
      SelfRate: 3,
      amt: 1,
    },
    {
      name: "Goal F",
      DepartmentalRating: 5,
      SelfRate: 4,
      amt: 3,
    },
    {
      name: "Goal G",
      DepartmentalRating: 4,
      SelfRate: 2,
      amt: 1,
    },
  ];

  // Function to map numeric rating to star rating (1 to 5 stars)
  const mapRatingToStars = (rating) => {
    const maxRating = 5; // The maximum rating (set to 5)
    const maxStars = 5; // The maximum number of stars (you can adjust this)

    // Calculate the corresponding star value based on the max rating and stars
    return Math.ceil((rating / maxRating) * maxStars);
  };

  // Update the data with the star ratings
  const dataWithStars = data.map((item) => ({
    ...item,
    SelfRate: mapRatingToStars(item.SelfRate),
    DepartmentalRating: mapRatingToStars(item.DepartmentalRating),
  }));

  return (
    <main className="main-container">
      <div className="charts">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={dataWithStars} // Use the updated data with star ratings
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[1, 5]} />{" "}
            {/* Set the y-axis range to 1 to 5 for stars */}
            <Tooltip />
            <Legend />
            <Bar dataKey="SelfRate" fill="#8884d8" />
            <Bar dataKey="DepartmentalRating" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={dataWithStars} // Use the updated data with star ratings
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[1, 5]} />{" "}
            {/* Set the y-axis range to 1 to 5 for stars */}
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="SelfRate"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="DepartmentalRating"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default RatingSummary;
