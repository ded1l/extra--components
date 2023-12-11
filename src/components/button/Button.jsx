/* eslint-disable react/prop-types */

import "./button.css";

const sizeStyles = {
  small: { width: "50px", height: "20px", fontSize: "10px" },
  large: { width: "100px", height: "40px", fontSize: "16px" },
  medium: { width: "80px", height: "30px", fontSize: "14px" },
};

const Button = ({ children, type = "default", size = "medium", onClick }) => {
  const buttonStyle = sizeStyles[size];

  return (
    <button className={type} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
