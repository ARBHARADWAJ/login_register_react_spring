import React, { useContext, useEffect, useState } from "react";
import "./Card.css";
import img from "../Card/fire.png";
import axios from "axios";
import { Navbar } from "../Navbar/Navbar";
import { Sharedstate } from "../../UsageStateElements";

function Card() {
  const {
    islogged,
    email,
    password,
    handleEmail,
    handleLogout,
    handlePassword,
    handlelogIn,
  } = useContext(Sharedstate);

  const [valid, setValid] = useState(false);
  useEffect(() => {
    if (email !== null) {
      axios
        .get("http://localhost:8080/Register/valid/" + email)
        .then((res) => {
          console.log(res);
          if (res.data) {
            setValid(res.data);
          } else {
            console.log(valid);
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  });

  return (
    <>
      <Navbar />
      <div className="body ">
        <div className="container field">
          <h2>Login</h2>
          <div>
            <input
              className="form-control"
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => {
                // setEmail(e.target.value);
                handleEmail(e.target.value);
              }}
            />
            {!valid && email !== "" && (
              <p className="text">email is not present in db</p>
            )}
          </div>

          <div>
            <input
              className="form-control"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => {
                // setPassword(e.target.value);
                handlePassword(e.target.value);
              }}
            />
          </div>

          <button
            onClick={() => {
              const msg = {
                email: email,
                password: password,
              };
              axios
                .post("http://localhost:8080/Register/login", msg)
                .then((res) => {
                  if (res.data) {
                    handlelogIn(true);
                    console.log("user is valid");
                  } else {
                    console.log("user is not value");
                  }
                })
                .catch((e) => {
                  console.error(e);
                });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
