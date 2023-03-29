import React from "react";
import "./Header.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navmenu = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <li className="">
        {!item?.subNav ? (
          <NavLink className="nav-link" to={item.path}>
            <div>{item.title}</div>
          </NavLink>
        ) : (
          <DropdownButton
            className={
              location.pathname.includes(item.title)
                ? "nav-link test active"
                : "nav-link test "
            }
            id="dropdown-basic-button"
            title={item.title}
          >
            {item.subNav.map((item, i) => {
              return <Dropdown.Item
               key={i}
               className={item.subTitle === location.pathname?.slice(1)?.split("/")[1]?.replace(/_/g, " ") ? "active" :""}
                    onClick={() =>
                      navigate(item.path)}
               >
                {item.subTitle}
                </Dropdown.Item>;
            })}
          </DropdownButton>
        )}
      </li>
    </>
  );
};

export default Navmenu;
