import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

import { ResponseAnnualPlanProps } from "@/utils/types";
import { mockedResponseAnnualPTVALPlan } from "@/utils/mocks";

interface AppContextProps {
  content: ResponseAnnualPlanProps | null;
  setContent: React.Dispatch<
    React.SetStateAction<ResponseAnnualPlanProps | null>
  >;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ResponseAnnualPlanProps | null>({
    ptval: mockedResponseAnnualPTVALPlan,
  });

  const values = useMemo(() => ({ content, setContent }), [content]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
