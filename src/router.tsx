import { FC } from "react";
import { View, Text } from "react-native";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import * as Pages from "pages";
import { useAuthentication } from "hooks/useAuthentication";

type RouterProps = {};

export const Router: FC<RouterProps> = () => {
  const { isAuthenticated } = useAuthentication();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Pages.HomePage} />
        <Route path="/signup" exact>
          {isAuthenticated ? <Redirect to="/" /> : <Pages.SignupPage />}
        </Route>
        <Route path="/protected" exact>
          {isAuthenticated ? <Pages.ProtectedPage /> : <Redirect to="/" />}
        </Route>
        <Route>
          <View>
            <Text>404 Not Found</Text>
          </View>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
