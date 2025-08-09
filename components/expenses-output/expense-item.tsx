import { GlobalStyles } from "@/constants/styles";
import { getFormattedDate } from "@/util/date";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ExpenseItem = (props: {
  description: string;
  amount: number;
  date: Date;
  id: string;
}) => {
  const router = useRouter();
  const { description, amount, date, id } = props;
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: "/modals",
          params: {
            expenseId: id,
          },
        });
      }}
      className="active:opacity-75"
    >
      <View
        className="p-3 my-2 flex-row justify-between rounded-[6px]"
        style={{
          backgroundColor: GlobalStyles.colors.primary500,
          elevation: 3,
          shadowColor: GlobalStyles.colors.gray500,
          shadowRadius: 4,
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.4,
        }}
      >
        <View>
          <Text style={styles.textBase} className="text-base mb-1 font-bold">
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View className="px-3 py-1 min-w-20 bg-white justify-center items-center rounded">
          <Text
            style={{
              color: GlobalStyles.colors.primary500,
            }}
            className="font-bold"
          >
            {amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  pressed: {
    opacity: 0.75,
  },
});
