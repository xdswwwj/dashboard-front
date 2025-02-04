import ClubListContainer from "@/containers/club/ClubListContainer";
import CommonLayout from "@/layout/CommonLayout";
import React from "react";

const ClubListPage: React.FC = () => {
  return (
    <CommonLayout>
      <ClubListContainer />
    </CommonLayout>
  );
};

export default ClubListPage;
