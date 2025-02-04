import API_URL from "@/config/api.url";
import URL from "@/config/url";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { authCheckMutation, HttpMethodEnum } from "../common";

export const useCreateClubMutation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  return authCheckMutation({
    apiUrl: API_URL.CREATE_CLUB,
    method: HttpMethodEnum.POST,
    queryKey: ["userInfo"],
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "클럽을 생성하였습니다.",
        duration: 3000,
      });
      navigate(URL.clubListUrl);
    },
  });
};
