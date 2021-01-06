import { createContext, FC, useState, useCallback, useContext } from "react";

type AuthenticationData = {
  email: string | null;
  isAuthenticated: boolean;
  login(email: string): void;
  logout(): void;
};

const AuthenticationContext = createContext<AuthenticationData | undefined>(
  undefined
);
const LOCAL_USER_KEY = "user_email";

export const AuthenticationContextProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    window.localStorage.getItem(LOCAL_USER_KEY)
  );

  const login = useCallback(function login(email: string) {
    window.localStorage.setItem(LOCAL_USER_KEY, email);
    setCurrentUser(email);
  }, []);

  const logout = useCallback(function logout() {
    window.localStorage.removeItem(LOCAL_USER_KEY);
    setCurrentUser(null);
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        email: currentUser,
        isAuthenticated: currentUser != null,
        login,
        logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export function useAuthentication() {
  const ctx = useContext(AuthenticationContext);

  if (ctx === undefined) {
    throw new Error("Must be used inside AuthenticationContext");
  }

  return ctx;
}
