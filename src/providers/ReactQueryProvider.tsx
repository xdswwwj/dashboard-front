import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true, // 윈도우 포커스 시 쿼리 재요청
      refetchOnReconnect: true, // 네트워크 연결 복구 시 재요청
      retry: 3, // 3번 재시도
      staleTime: 60000, // 10초 동안 데이터 신선 유지
    },
    mutations: {
      retry: 2, // 뮤테이션 실패 시 2번 재시도
    },
  },
});

export const ReactQueryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);
