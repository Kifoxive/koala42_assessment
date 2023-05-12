import React from "react";
import styles from "../styles";

const Footer = () => {
  const nameReversed = "kaynigereP yiruY";

  return (
    <div className="flex justify-center p-10">
      <p className={`${styles.paragraph} text-white`}>
        {" "}
        {nameReversed.split("").reverse().join("")}
      </p>
    </div>
  );
};

export default Footer;
