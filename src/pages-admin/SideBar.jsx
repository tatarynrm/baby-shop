import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="admin__sidebar">
      <h2>
        <Link to={"/admin-panel"}>Admin</Link>{" "}
      </h2>
      <p>Comfort4Baby</p>
      <ul>
        <Link to={"products"}>
          <li>Продукти</li>
        </Link>
        <Link to={"users"}>
          <li>Користувачі</li>
        </Link>
        <li>Акції</li>
        <li>І ще щось</li>
      </ul>

      <div className="back-to-site">
        <a href="http://localhost:3000">Повернутись на сайт</a>
      </div>
    </div>
  );
};

export default SideBar;
