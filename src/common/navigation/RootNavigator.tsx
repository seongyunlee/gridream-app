import {TabNavigation} from './tabs/TabNavigation.tsx';
import NotFoundScreen from './NotFoundScreen.tsx';
import {HomeMain} from '../../pages/home/HomeMain.tsx';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import {WriteMain} from '../../pages/write/WriteMain.tsx';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = 'Tab';

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen
        name="Write"
        component={WriteMain}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
