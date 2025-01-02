import HomeContainer from "@containers/HomeContainer";
import CommonLayout from "@layout/CommonLayout";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <CommonLayout>
      <HomeContainer />
    </CommonLayout>
  );
};

export default HomePage;
