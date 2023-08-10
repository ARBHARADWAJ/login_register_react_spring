import React from "react";
import Registration from "../Registration/Registration";
import Card from "../Card/Card";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default Home;

// let Component;
//   switch (window.location.pathname) {
//     case "/":
//       Component=Home
//       break;
//     case "/login":
//       Component=Card
//       break;
//     case "/register":
//       Component=Registration
//       break;

//     default:
//       break;
//   }
{
  /* <Component/> */
}
