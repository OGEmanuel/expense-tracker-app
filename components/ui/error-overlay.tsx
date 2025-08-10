import { GlobalStyles } from "@/constants/styles";
import { Text, View } from "react-native";
import Button from "./button";

const ErrorOverlay = (props: { message: string; onConfirm: () => void }) => {
  const { message, onConfirm } = props;
  return (
    <View
      className="flex-1 justify-center items-center p-6"
      style={{
        backgroundColor: GlobalStyles.colors.primary700,
      }}
    >
      <Text className="text-center mb-2 text-xl font-bold text-white">
        An Error Occured!
      </Text>
      <Text className="text-center mb-2 text-white text-sm">{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
};

export default ErrorOverlay;
