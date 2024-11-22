import {RootStackParamList} from "./types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TabNavigation} from "./tabs/TabNavigation.tsx";
import NotFoundScreen from "./NotFoundScreen.tsx";

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = "Tab";

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
