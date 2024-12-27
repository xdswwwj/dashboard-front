export interface InfoResponse {
  id: number;
  name: string;
  description: string;
}

export const fetchInfo = async (): Promise<InfoResponse> => {
  const response = await fetch("/api/info");
  if (!response.ok) {
    throw new Error("Failed to fetch info");
  }
  const data: InfoResponse = await response.json();
  return data;
};
