import { useClubList } from "@/services/club/club.quert";
import React from "react";

const ClubListContainer: React.FC = () => {
  const { data, isLoading, isError } = useClubList();

  console.log("data >>", data);
  return <div>ClubListContainer</div>;
};

export default ClubListContainer;
