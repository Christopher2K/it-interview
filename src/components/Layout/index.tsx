import { View } from "react-native";
import { FC } from "react";
import { Title } from "components";

import { styles } from "./styles";

export const Layout: FC = ({ children }) => {
  return (
    <View style={styles.root}>
      <Title>X-SQUAD</Title>
      {children}
    </View>
  );
};
