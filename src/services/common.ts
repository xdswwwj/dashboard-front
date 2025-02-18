import URL from "@/config/url";
import { checkExpToken } from "@/lib/auth";
import { authFetcher } from "@/lib/fetch";
import useUserStore from "@/store/userStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export enum HttpMethodEnum {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type HttpMethod =
  | HttpMethodEnum.GET
  | HttpMethodEnum.POST
  | HttpMethodEnum.PUT
  | HttpMethodEnum.DELETE;

interface AuthCheckMutationProps {
  apiUrl: string; // 호출할 API의 URL
  method: HttpMethod; // HTTP 메서드
  queryKey?: string[] | null; // 쿼리 키 (React Query)
  onSuccess?: (data?: any) => void; // 성공 시 콜백
  onError?: (error: unknown) => void; // 에러 시 콜백
  onSettled?: () => void; // 요청 완료 시 콜백
}

export const checkUserToken = () => {
  const { token, clearUser } = useUserStore();

  if (!token || checkExpToken(token) === false) {
    clearUser();
    window.location.replace(URL.loginUrl);
    return "";
  }
  return token;
};
export const authCheckMutation = (props: AuthCheckMutationProps) => {
  const {
    apiUrl,
    method,
    queryKey = null,
    onSuccess = () => {},
    onError = () => {},
    onSettled = () => {},
  } = props;

  const token = checkUserToken();
  if (token === "") {
    return;
  }

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      console.log(data);
      return authFetcher(
        apiUrl,
        {
          method,
          body: JSON.stringify(data),
        },
        token
      );
    },
    onMutate: async (data) => {
      if (queryKey) {
        await queryClient.cancelQueries({ queryKey });
        const previousData = queryClient.getQueryData(queryKey);
        queryClient.setQueryData(queryKey, (oldData) => ({
          ...(typeof oldData === "object" && oldData !== null ? oldData : {}),
          ...(typeof data === "object" && data !== null ? data : {}),
        }));
        return { previousData }; // 반환된 데이터는 onError에서 사용 가능
      }
    },
    onSuccess: (data) => {
      if (queryKey) {
        queryClient.invalidateQueries({ queryKey });
      }
      onSuccess(data);
    },
    onError: (error) => {
      if (error instanceof Error) {
        console.error("Mutation failed:", error.message);
      } else {
        console.error("Mutation failed:", error);
      }
      onError(error);
    },
    onSettled: () => {
      if (queryKey) {
        queryClient.invalidateQueries({ queryKey });
      }
      onSettled();
    },
  });
};

interface AuthCheckQueryProps {
  apiUrl: string; // 요청할 API 경로
  queryKey: string[]; // React Query에서 사용할 키
  method: HttpMethod;
  options?: object;
  enabled?: boolean; // 쿼리 실행 여부 (기본값: true)
}

export const useAuthCheckQuery = ({
  apiUrl,
  queryKey,
  enabled = true,
  method,
  options = {},
}: AuthCheckQueryProps) => {
  const token = checkUserToken();

  // 토큰이 없으면 null 반환 (쿼리 실행 안 함)
  if (!token) {
    return {
      data: null,
      isError: true,
      isLoading: false,
      refetch: () => {},
    };
  }

  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await authFetcher(
        apiUrl,
        {
          method: method,
        },
        token
      );
      return response;
    },
    enabled, // 실행 여부 (false면 쿼리 실행 안 됨)
    ...options,
  });
};
