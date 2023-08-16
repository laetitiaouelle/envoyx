import type { Dispatch, ReactNode } from 'react';
import { createContext, useReducer } from 'react';

const defaultValues: string='DASHBOARD'

const DashboardRouterContext = createContext<{
  routerState: string;
  dispatchRoute: Dispatch<any>;
}>({
  routerState: defaultValues,
  dispatchRoute: () => null,
});

type Props = {
  children: ReactNode;
};

export type Action =| { type: 'CHANGE'; payload: string }

const dashboardRouterReducer = (routerState: string, action: Action): string => {
  switch (action.type) {
    case 'CHANGE':
        // alert(action.payload)
      return action.payload;
    default:
      throw new Error('Unknown action type');
  }
};

function DashboardRouterProvider({ children }: Props) {
  const [routerState, dispatchRoute] = useReducer(dashboardRouterReducer, defaultValues);

  return (
    <DashboardRouterContext.Provider value={{ routerState, dispatchRoute }}>
      <div>{children}</div>
    </DashboardRouterContext.Provider>
  );
}
export { DashboardRouterContext, DashboardRouterProvider };
