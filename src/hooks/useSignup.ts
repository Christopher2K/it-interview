import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import isEmail from "validator/lib/isEmail";

export type UseSignup = {
  email: string;
  error?: string;
  setEmail: Dispatch<SetStateAction<string>>;
  loading: boolean;
  onSignup: () => Promise<T.SignupData>;
};

export function useSignup(): UseSignup {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const onSignup = useCallback(
    function onSignup() {
      if (isEmail(email)) {
        setLoading(true);
        return fetch("http://jsonplaceholder.typicode.com/users", {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
          body: JSON.stringify({
            user: {
              email,
            },
          }),
        })
          .then((response) => response.json() as Promise<T.SignupData>)
          .finally(() => setLoading(false));
      } else {
        setError("Incorrect format");
        return Promise.reject("Incorrect format");
      }
    },
    [email]
  );

  useEffect(() => {
    if (error !== undefined) {
      setError(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  return {
    email,
    error,
    setEmail,
    loading,
    onSignup,
  };
}
