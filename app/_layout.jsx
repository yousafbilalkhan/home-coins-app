import { Stack, Tabs, Slot } from "expo-router";

// Import your global CSS file
import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}

