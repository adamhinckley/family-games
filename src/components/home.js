import React from "react";
import PropTypes from "prop-types";
import Navigation from "./navigation";

function Home(props) {
  return (
    <div>
      <Navigation title={"Home"} />
    </div>
  );
}

Home.propTypes = {};

export default Home;
