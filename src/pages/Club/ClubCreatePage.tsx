import ClubCreateContainer from "@/containers/club/ClubCreateContainer";
import CommonLayout from "@/layout/CommonLayout";
import React from "react";

const ClubCreatePage: React.FC = () => {
  return (
    <CommonLayout>
      <ClubCreateContainer />
    </CommonLayout>
  );
};

export default ClubCreatePage;
