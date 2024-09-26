import { FormDataProps } from "./types";

export const groupByCol = (data: FormDataProps[]) => {
  return data.reduce((acc, field) => {
    const col = field.col;
    if (col !== undefined && !acc[col]) {
      acc[col] = [];
    }
    if (col !== undefined) {
      acc[col].push(field);
    }
    return acc;
  }, {} as { [key: number]: typeof data });
};
