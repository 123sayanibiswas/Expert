import { Link } from 'react-router-dom';
import React from "react";
function Home() {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <h1 className="container">
          <img src="http://localhost:3000/Expert.png"></img>
        </h1></section>
      <section><img src="http://localhost:3000/Expert2.png"></img></section>
      <section><img src="http://localhost:3000/Expert3.png"></img></section>
    </div>
  );
}

export default Home;
