import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

import { SingleAnnualPlanProps } from "@/modules/annual-plan/types";

interface AppContextProps {
  singleAnnualPlan: SingleAnnualPlanProps | null;
  setSingleAnnualPlan: React.Dispatch<
    React.SetStateAction<SingleAnnualPlanProps | null>
  >;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [singleAnnualPlan, setSingleAnnualPlan] =
    useState<SingleAnnualPlanProps | null>(null);

  const values = useMemo(
    () => ({ singleAnnualPlan, setSingleAnnualPlan }),
    [singleAnnualPlan]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
