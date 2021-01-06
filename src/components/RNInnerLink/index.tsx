import { FC, forwardRef, useCallback } from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { styles } from "./styles";
import { generics } from "styles";

type RNInnerLinkProps = {
  as?: "button" | "text";
  children: string;
  to: string;
};

export const RNInnerLink: FC<RNInnerLinkProps> = ({
  children,
  as = "text",
  to,
}) => {
  // Hooks
  const history = useHistory();

  // Callbacks
  const navigate = useCallback(
    function navigate(event: GestureResponderEvent) {
      event.preventDefault();
      history.push(to);
    },
    [to, history]
  );

  const TextComponent = forwardRef<Text>(({ children: _, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        {...props}
        onPress={navigate}
        style={styles.text}
        accessibilityRole="link"
      >
        {children}
      </Text>
    );
  });

  const ButtonComponent = forwardRef<TouchableOpacity>(
    ({ children: _, ...props }, ref) => {
      return (
        <TouchableOpacity
          ref={ref}
          {...props}
          onPress={navigate}
          style={generics.buttonRoot}
        >
          <Text style={generics.buttonText}>{children}</Text>
        </TouchableOpacity>
      );
    }
  );

  return (
    <Link to={to} component={as === "text" ? TextComponent : ButtonComponent} />
  );
};
