import React from "react";
import Jumbotron from "../components/Jumbotron";
import Headline from "../components/Headline";
import Footer from "../components/Footer";
// import Content from "../components/Content";

function HomePage() {
  return (
    <div className="home-page">
      <Jumbotron />
      <Headline />
      <Footer />
      {/* <Content /> */}
    </div>
  );
}

export default HomePage;
