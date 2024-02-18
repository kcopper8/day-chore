import { PropsWithChildren, useEffect, useState } from "react";
import { initialize } from "../../apis/dataApi.ts";

type ApiServiceProviderProps = {} & PropsWithChildren;

const ApiServiceProvider = ({ children }: ApiServiceProviderProps) => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await initialize();
        setInitialized(true);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  if (!initialized) {
    return <>loading</>;
  }

  return <>{children}</>;
};

export default ApiServiceProvider;
