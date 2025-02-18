import MyPageContainer from "@/containers/auth/MyPageContainer";
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
