import { GlobalStyles } from "@/constants/styles";
import { Text, TextInput, TextInputProps, View } from "react-native";

const Input = (props: {
  label: string;
  textInputConfig?: TextInputProps;
  className?: string;
}) => {
  const { label, textInputConfig, className } = props;
  return (
    <View className={`mx-1 my-2 ${className}`}>
      <Text
        className="text-xs mb-1"
        style={{
          color: GlobalStyles.colors.primary100,
        }}
      >
        {label}
      </Text>
      <TextInput
        {...textInputConfig}
        style={{
          backgroundColor: GlobalStyles.colors.primary100,
          color: GlobalStyles.colors.primary700,
          textAlignVertical:
            textInputConfig && textInputConfig.multiline ? "top" : "center",
        }}
        className={`p-[6px] rounded-[6px] text-lg ${textInputConfig && textInputConfig.multiline && "min-h-[100px]"}`}
      />
    </View>
  );
};

export default Input;
