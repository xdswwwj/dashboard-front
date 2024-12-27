import React from "react";
import useHomeStore from "../store/homeStore";

const HomeComponent: React.FC = () => {
  const { info, setInfo } = useHomeStore();

  const handleUpdate = () => {
    setInfo("Updated Info");
  };
  return (
    <div>
      <h1>Home Info: {info}</h1>
      <button onClick={handleUpdate}>Update Info</button>
    </div>
  );
};

export default HomeComponent;
