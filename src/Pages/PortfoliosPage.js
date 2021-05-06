import React from "react";
import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import portfolios from "../Components/allPortfolios";
import { useState } from "react";

const PortfoliosPage = () => {
  const [categories, setCategories] = useState(null);
  const [menuItems, setMenuItems] = useState(portfolios);
  return (
    <div className="PortfolioPage">
      <div p-title>
        <Title title={"Portfolios"} span={"Portfolios"} />
      </div>
      <div className="portfolios-data">
        <Categories />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
};

export default PortfoliosPage;
