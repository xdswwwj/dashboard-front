// src/pages/NotFoundPage.tsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-xl text-gray-500">페이지를 찾을 수 없습니다.</p>
        <Button className="mt-4" onClick={() => navigate("/")}>
          홈으로 돌아가기
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;
