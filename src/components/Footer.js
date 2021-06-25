import React from "react";
import "../components/Footer.css";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <>
      <div className="footer">
        <p>Copyright ©2021 Tata Consultancy Services Limited</p>
        <ul className="mainMenu">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
