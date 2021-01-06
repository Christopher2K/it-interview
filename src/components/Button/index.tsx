import { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { generics } from "styles";

type ButtonProps = TouchableOpacityProps & {
  children: string;
};

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <TouchableOpacity {...props} style={generics.buttonRoot}>
    <Text>{children}</Text>
  </TouchableOpacity>
);
