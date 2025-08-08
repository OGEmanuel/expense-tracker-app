import { GlobalStyles } from "@/constants/styles";
import "@/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="modals"
          options={{
            presentation: "modal",
            title: "Manage Expense",
          }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
