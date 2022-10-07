import {
  ReactNode,
  createContext,
  useContext,
  // useEffect,
  useState,
} from "react";

const defaultValue = {
  isV2: false,
};

const EnvContext = createContext(defaultValue);

export const EnvProvider = ({ children }: { children: ReactNode }) => {
  const [isV2, setIsV2] = useState(false);

  // useEffect(() => {
  //   setIsV2(import.meta.env.VITE_IXNAY_V2 === "true");
  // }, []);

  const value = {
    isV2,
  };

  return <EnvContext.Provider value={value}>{children}</EnvContext.Provider>;
};

export const useEnv = () => useContext(EnvContext);
