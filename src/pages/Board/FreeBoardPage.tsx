import FreeBoardContainer from "@/containers/board/FreeBoardContainer";
import CommonLayout from "@/layout/CommonLayout";
import React from "react";

const FreeBoardPage: React.FC = () => {
  return (
    <CommonLayout>
      <FreeBoardContainer />
    </CommonLayout>
  );
};

export default FreeBoardPage;
