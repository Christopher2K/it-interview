import { FC } from "react";
import { View } from "react-native";

import { Button, Layout, RNInnerLink } from "components";
import { useAuthentication } from "hooks/useAuthentication";

type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
  const { isAuthenticated, logout } = useAuthentication();
  return (
    <Layout>
      <View>
        {isAuthenticated ? (
          <>
            <RNInnerLink as="button" to="/protected">
              Acceder à la ressource
            </RNInnerLink>
            <Button onPress={logout}>Se déconnecter</Button>
          </>
        ) : (
          <RNInnerLink as="button" to="/signup">
            Inscription avec mon email
          </RNInnerLink>
        )}
      </View>
    </Layout>
  );
};
