import React from "react";
import CategoriesData from "../../categories-data/categories-data";
import Directory from "../../Directory/Directory";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Directory Categories={CategoriesData} />
      <Outlet />
    </div>
  );
};

export default Home;
