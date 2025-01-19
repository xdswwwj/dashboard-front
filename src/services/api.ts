import API_URL from "@/config/api.url";
import URL from "@/config/url";
import { useToast } from "@/hooks/use-toast";
import { checkExpToken } from "@/lib/auth";
import { fetcher } from "@/lib/fetch";
import useUserStore from "@/store/userStore";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { authCheckMutation, HttpMethodEnum } from "./common";

export interface JwtTokenPayload extends JwtPayload {
  id: string;
  email: string;
  provider: string;
}

export const useKakaoLogin = () => {
  return useQuery({
    queryKey: ["kakaoLogin"],
    queryFn: async () =>
      await fetcher(`/auth/kakao`, {
        method: "GET",
      }),
  });
};

export const useUserInfo = (options = {}) => {
  const { token: storeToken, clearUser } = useUserStore();
  const token: JwtTokenPayload | null = storeToken
    ? jwtDecode(storeToken)
    : null;

  if (!storeToken || checkExpToken(storeToken) === false) {
    clearUser();
    window.location.replace(URL.loginUrl);
  }
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () =>
      await fetcher(
        API_URL.GET_USER_INFO,
        {
          method: "POST",
          body: JSON.stringify({ id: token?.id }),
        },
        storeToken
      ),
    ...options,
  });
};

export const useUpdateUserInfoMutation = () => {
  const { user, setUser } = useUserStore();
  const { toast } = useToast();
  return authCheckMutation({
    apiUrl: API_URL.INFO_UPDATE,
    method: HttpMethodEnum.POST,
    queryKey: ["userInfo"],
    onSuccess: (res) => {
      const { data } = res;
      setUser({ ...user, ...data });
      toast({
        title: "Success!",
        description: "Mutation 성공적으로 완료되었습니다.",
        duration: 3000,
      });
    },
  });
};
