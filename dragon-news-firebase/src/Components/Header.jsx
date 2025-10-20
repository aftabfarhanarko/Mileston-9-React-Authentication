import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo}></img>
      <p className="text-accent mt-3">Journalism Without Fear or Favour</p>

      <p className="mt-2 text-accent font-semibold">
        {format(new Date(), "EEEE , MMMM MM yyyy")}
      </p>
    </div>
  );
};

export default Header;
