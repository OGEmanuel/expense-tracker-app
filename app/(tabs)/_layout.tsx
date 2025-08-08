import IconBtn from "@/components/ui/icon-btn";
import { GlobalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";

export default function InnerLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconBtn
            name={"add"}
            size={24}
            color={tintColor}
            onPress={() => {
              router.push("/modals");
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name={"index"}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={"all-expenses"}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
