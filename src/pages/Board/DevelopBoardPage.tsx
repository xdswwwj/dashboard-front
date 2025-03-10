import DevelopBoardContainer from "@/containers/board/DevelopBoardContainer";
import CommonLayout from "@/layout/CommonLayout";
import React from "react";

const DevelopBoardPage: React.FC = () => {
  return (
    <CommonLayout>
      <DevelopBoardContainer />
    </CommonLayout>
  );
};

export default DevelopBoardPage;
