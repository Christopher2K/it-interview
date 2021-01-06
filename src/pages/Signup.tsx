import { FC, useCallback } from "react";

import { Layout, SignupForm } from "components";
import { useSignup } from "hooks/useSignup";
import { useAuthentication } from "hooks/useAuthentication";

type SignupPageProps = {};

export const SignupPage: FC<SignupPageProps> = () => {
  const { onSignup, ...useSignupHook } = useSignup();
  const { login } = useAuthentication();

  const startSignupFlow = useCallback(
    function startSignupFlow() {
      onSignup()
        .then((userData) => {
          login(userData.user.email);
        })
        .catch((e) => {
          console.error(e);
        });
    },
    [onSignup, login]
  );

  return (
    <Layout>
      <SignupForm {...useSignupHook} onSignup={startSignupFlow} />
    </Layout>
  );
};
