import ClubContainer from "@/containers/club/ClubContainer";
import CommonLayout from "@/layout/CommonLayout";
import React from "react";

const ClubPage: React.FC = () => {
  return (
    <CommonLayout>
      <ClubContainer />
    </CommonLayout>
  );
};

export default ClubPage;
