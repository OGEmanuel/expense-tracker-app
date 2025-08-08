import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

const IconBtn = (props: {
  name: any;
  size: number;
  color: string | undefined;
  onPress: () => void;
}) => {
  const { name, size, color, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View className="rounded-3xl p-[6px] mx-2 my-0.5">
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
