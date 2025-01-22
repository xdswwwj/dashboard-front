import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const ClubContainer: React.FC = () => {
  const handleCreateClub = () => {
    // 클럽 생성 로직을 추가하세요
    console.log("클럽 생성 버튼 클릭됨");
  };
  return (
    <>
      <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">클럽 페이지</h1>
        <Button
          onClick={handleCreateClub}
          className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-full shadow-lg"
        >
          <Plus className="w-5 h-5" />
          <span>클럽 생성</span>
        </Button>
      </div>
    </>
  );
};

export default ClubContainer;
