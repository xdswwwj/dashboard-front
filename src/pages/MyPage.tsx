import MyPageContainer from "@/containers/MyPageContainer";
import CommonLayout from "@/layout/CommonLayout";
import React from "react";

const MyPage: React.FC = () => {
  return (
    <CommonLayout>
      <MyPageContainer />
    </CommonLayout>
  );
};

export default MyPage;
