import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Sharedstate } from "../../UsageStateElements";
import axios from "axios";


export const Navbar = () => {
  const {
    islogged,
    email,
    password,
    handleEmail,
    handleLogout,
    handlePassword,
    handlelogIn,
    validDate,
  } = useContext(Sharedstate);

  return (
    <div>
      <nav>
        <Link to="/">My Validator</Link>
        <ul>
          {!islogged && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Registration</Link>
              </li>
            </>
          )}
          {islogged && (
            <li>
              <button
                onClick={() => {
                  axios
                    .post("http://localhost:8080/Register/logout")
                    .then((res) => {
                      //if (res === "Logged out Successfully")
                       console.log(res);
                      handleLogout();
                    })
                    .catch((e) => {
                      console.error(e);
                    });
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
