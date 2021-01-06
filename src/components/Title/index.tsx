import { Text } from "react-native";
import { FC } from "react";

import { styles } from "./styles";

type TitleProps = {
  children: string;
};

export const Title: FC<TitleProps> = ({ children }) => {
  return <Text style={styles.root}>{children}</Text>;
};
