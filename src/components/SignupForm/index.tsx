import { FC } from "react";
import { TextInput, View, Text, ActivityIndicator } from "react-native";

import { Button } from "components";
import { styles } from "./styles";
import { UseSignup } from "hooks/useSignup";

type SignupFormProps = Omit<UseSignup, "onSignup"> & {
  onSignup(): void;
};

export const SignupForm: FC<SignupFormProps> = ({
  loading,
  email,
  setEmail,
  error,
  onSignup,
}) => {
  return (
    <View>
      <View>
        <Text>Email</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      </View>
      {error && <Text>{error}</Text>}
      {loading && <ActivityIndicator />}
      <Button disabled={loading} onPress={onSignup}>
        Créer mon compte
      </Button>
    </View>
  );
};
