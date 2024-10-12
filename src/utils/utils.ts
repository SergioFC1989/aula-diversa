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
