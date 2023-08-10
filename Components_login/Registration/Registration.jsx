import React, { useState } from "react";
import "./Registration.css";
import axios from "axios";
import { Navbar } from "../Navbar/Navbar";

function Registration() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  return (
    <>
      <Navbar />
      <div className="">
        <div className="gap">
          <div className="container field">
            <h2>Register</h2>
            <input
              placeholder="First Name"
              className="form-control"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <input
              placeholder="Last Name"
              className="form-control"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            <input
              placeholder="Email@gmail.com"
              className="form-control"
              id="exampleFormControlInput1"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              placeholder="Password"
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            {valid && <p>done successfully</p>}
            <div>
              <button
                className=""
                onClick={() => {
                  const msg = {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password,
                  };
                  console.log(msg);

                  axios
                    .post("http://localhost:8080/Register/register", msg)
                    .then((res) => {
                      console.log(res);
                      if (res === "true") {
                        setValid(!valid);
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
        </div>
      </div>
    </>
  );
}

export default Registration;
