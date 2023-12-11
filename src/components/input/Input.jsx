/* eslint-disable react/prop-types */
import "./input.css";


const Input = ({ placeholder, value, onChange}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className="input"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
