import { GlobalStyles } from "@/constants/styles";
import { Text, TextInput, TextInputProps, View } from "react-native";

const Input = (props: {
  label: string;
  textInputConfig?: TextInputProps;
  className?: string;
  invalid?: boolean;
}) => {
  const { label, textInputConfig, className, invalid } = props;
  return (
    <View className={`mx-1 my-2 ${className}`}>
      <Text
        className="text-xs mb-1"
        style={{
          color: invalid
            ? GlobalStyles.colors.error500
            : GlobalStyles.colors.primary100,
        }}
      >
        {label}
      </Text>
      <TextInput
        {...textInputConfig}
        style={{
          backgroundColor: invalid
            ? GlobalStyles.colors.error50
            : GlobalStyles.colors.primary100,
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
