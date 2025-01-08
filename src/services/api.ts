import { AccountFormValues } from "@/components/form/schema/schema";
import { fetcher } from "@/lib/fetch";
import useUserStore from "@/store/userStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { jwtDecode, JwtPayload } from "jwt-decode";

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
  const { token: storeToken } = useUserStore();
  const token: JwtTokenPayload | null = storeToken
    ? jwtDecode(storeToken)
    : null;
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () =>
      await fetcher(
        `/user/info`,
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
  return useMutation({
    mutationFn: async (data: AccountFormValues) =>
      await fetcher(`/user/update`, {
        method: "POST",
        body: JSON.stringify(data),
      }),
  });
};
