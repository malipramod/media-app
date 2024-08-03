const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

type Method = "GET" | "POST" | "PUT" | "DELETE";

export const api = async <T = unknown>({
  method,
  url,
  request,
}: {
  url: string;
  method: Method;
  request?: unknown;
}) => {
  if (!url) {
    throw new Error("URL is required");
  }

  const response = await fetch(`${API_URL}&${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: request ? JSON.stringify(request) : undefined,
  });
  return (await response.json()) as Promise<T>;
};
