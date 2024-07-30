import type { Dispatch, ReactNode } from 'react';
import { createContext, useReducer } from 'react';

const defaultValues: string='DASHBOARD'

const ClinicDashboardRouterContext = createContext<{
  clinicRouterState: string;
  dispatchClinicRoute: Dispatch<any>;
}>({
  clinicRouterState: defaultValues,
  dispatchClinicRoute: () => null,
});

type Props = {
  children: ReactNode;
};

export type Action =| { type: 'CHANGE'; payload: string }

const clinicDashboardRouterReducer = (clinicRouterState: string, action: Action): string => {
  switch (action.type) {
    case 'CHANGE':
      return action.payload;
    default:
      throw new Error('Unknown action type');
  }
};

function ClinicDashboardRouterProvider({ children }: Props) {
  const [clinicRouterState, dispatchClinicRoute] = useReducer(clinicDashboardRouterReducer, defaultValues);

  return (
    <ClinicDashboardRouterContext.Provider value={{ clinicRouterState, dispatchClinicRoute }}>
      <div>{children}</div>
    </ClinicDashboardRouterContext.Provider>
  );
}
export { ClinicDashboardRouterContext, ClinicDashboardRouterProvider };
