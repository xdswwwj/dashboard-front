import CommonLayout from "@/layout/CommonLayout";
import React from "react";
import HomeContainer from "../containers/HomeContainer";

const HomePage: React.FC = () => {
  return (
    <CommonLayout>
      <HomeContainer />
    </CommonLayout>
  );
};

export default HomePage;
