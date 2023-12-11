/* eslint-disable react/prop-types */
import "./header.css";

const Header = ({ action, brand, width }) => (
  <div className="border">
    <div className="container" style={{ maxWidth: width }}>
      <div className="header">
        <div className="logo">
          <h1>{brand}</h1>
        </div>
        <div className="content">
          <ul>
            {action.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;