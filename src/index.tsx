import "./styles/reset.css";
import "./styles/root.css";
import { AppRegistry } from "react-native";
import { App } from "./app";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root"),
});
