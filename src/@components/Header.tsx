import React from "react";
import styles from "../styles";

import { logo } from "../assets";

const Header = () => {
  return (
    <div className="flex items-center justify-center p-10 gap-6">
      <h1 className={`${styles.heading3} text-white`}>Koala42 assessment</h1>
      <img
        className="w-[40px] hover:rotate-[20deg] transition-all"
        src={logo}
        alt="koala"
      />
    </div>
  );
};

export default Header;
