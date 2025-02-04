import API_URL from "@/config/api.url";
import { HttpMethodEnum, useAuthCheckQuery } from "../common";

export const useClubList = () => {
  return useAuthCheckQuery({
    apiUrl: API_URL.LIST_CLUB,
    queryKey: ["clubList"],
    method: HttpMethodEnum.GET,
  });
};
