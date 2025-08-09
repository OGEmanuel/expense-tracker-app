import { GlobalStyles } from "@/constants/styles";
import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

const Button = (props: {
  children: ReactNode;
  onPress: () => void;
  mode?: string;
  style?: any;
  className?: string;
}) => {
  const { children, onPress, mode, style, className } = props;
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        className={`active:opacity-75 active:bg-[#c6affc] active:rounded ${className}`}
      >
        <View
          className="rounded p-2"
          style={{
            backgroundColor:
              mode === "flat" ? "transparent" : GlobalStyles.colors.primary500,
          }}
        >
          <Text
            className="text-center"
            style={{
              color: mode === "flat" ? GlobalStyles.colors.primary200 : "white",
            }}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;
