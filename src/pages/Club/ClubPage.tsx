import ClubContainer from "@/containers/club/ClubContainer";
import ClubListContainer from "@/containers/club/ClubListContainer";
import CommonLayout from "@/layout/CommonLayout";
import React from "react";

const ClubPage: React.FC = () => {
  return (
    <CommonLayout>
      <ClubContainer />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* <Card> */}
        <ClubListContainer isMyClub={true} title="내 클럽 목록" />
        {/* </Card> */}
      </div>
    </CommonLayout>
  );
};

export default ClubPage;
