import { FC } from "react";
import { AuthenticationContextProvider } from "hooks/useAuthentication";
import { Router } from "router";

export const App: FC = () => {
  return (
    <AuthenticationContextProvider>
      <Router />
    </AuthenticationContextProvider>
  );
};
