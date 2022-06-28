import { createContext, useState, useContext, useEffect } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { fetchCurrentUser } from '@/services';

export type InitialState = {
  token?: string;
  user?: API.CurrentUser;
};

export type AuthContextType = {
  initialState?: InitialState;
  setInitialState?: Dispatch<SetStateAction<InitialState>>;
};

const InitialStateContext = createContext<AuthContextType>({});

export function useInitialState() {
  return useContext(InitialStateContext);
}

function InitialStateProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [initialState, setInitialState] = useState<InitialState>({});

  // Application data initialization
  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    (async () => {
      if (token) {
        const user = await fetchCurrentUser();
        setInitialState((s) => ({ ...s, user, token }));
        setLoading(false);
      } else {
        setLoading(false);
      }
    })();
  }, []);

  const value = {
    initialState,
    setInitialState,
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return <InitialStateContext.Provider value={value}>{children}</InitialStateContext.Provider>;
}

export default InitialStateProvider;
