import React from "react";
import "./Header.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navmenu = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname.includes(item.title));
  let arr = location.pathname?.split("/");
  let lastvalue = arr[arr.length - 1].trim().replace(/_/g, " ");
  let filt = item.subNav?.find((s) => s.subTitle === lastvalue);

  const handleParentClick = () => {
    document.body.classList.remove("stopScroll");
  };

  return (
    <>
      <li
        className={
          item.title === lastvalue || filt ? "nav-item active" : "nav-item"
        }
      >
        {!item?.subNav ? (
          <NavLink
            className="nav-link"
            to={item.path}
            onClick={handleParentClick}
          >
            <div>{item.title}</div>
          </NavLink>
        ) : (
          <DropdownButton
            className="nav-link test"
            id="dropdown-basic-button"
            title={item.title}
          >
            {item.subNav.map((item, i) => {
              return (
                <Dropdown.Item
                  key={i}
                  className={item.subTitle === lastvalue ? "active" : " "}
                  onClick={() => {
                    navigate(item.path);
                    handleParentClick();
                  }}
                >
                  {item.subTitle}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        )}
      </li>
    </>
  );
};

export default Navmenu;
