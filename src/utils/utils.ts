export const formatDate = (date: Date | undefined) => {
  if (!date) return "";

  const _date = new Date(date);
  const day = String(_date.getDate()).padStart(2, "0");
  const month = String(_date.getMonth() + 1).padStart(2, "0");
  const year = _date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const sanitizerJSON = (json: string) => {
  const sanitized = json
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  return JSON.parse(sanitized);
};

export const apiRequest = (
  url: string,
  method: "GET" | "POST" = "GET",
  body?: Record<string, unknown>,
  signal?: AbortSignal
) =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(body),
    signal,
  }).then((res) => res.json());
