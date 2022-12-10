import React from "react";
import Jumbotron from "../components/Jumbotron";
import Headline from "../components/Headline";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Jumbotron />
        <div className="Headline">
          <Headline />
        </div>
      <Footer />
    </>
  );
}

export default HomePage;
