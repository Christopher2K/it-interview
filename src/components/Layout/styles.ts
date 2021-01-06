import { StyleSheet } from "react-native";
import { primitives } from "styles";

export const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: primitives.maxWidth,
    width: "100%",
    margin: "auto",
  },
});
