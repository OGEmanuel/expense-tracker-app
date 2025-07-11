import { GlobalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
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
          name={"all-expenses/index"}
          options={{
            title: "All Expenses",
            tabBarLabel: "All Expenses",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
