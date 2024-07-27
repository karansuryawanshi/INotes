import React from "react";
// import noteContext from "../Context/notes/noteContext";
import Notes from "./Notes";

const Home = (props) => {
  const { showAlert } = props;
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;
