import { Button } from "@/components/ui/button";
import URL from "@/config/url";
import { BadgePlus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ClubContainer: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">클럽 페이지</h1>
        <Link to={URL.clubCreateUrl}>
          <Button className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-full shadow-lg">
            <BadgePlus className="w-5 h-5" />
            <span>클럽 생성</span>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ClubContainer;
