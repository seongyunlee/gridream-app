import NotFoundScreen from "../../NotFoundScreen.tsx";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeMain} from "../../../../pages/home/HomeMain.tsx";

export function HomeStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={HomeMain} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
