import {
  BottomTabHeaderProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {TabHeader} from './TabHeader.tsx';
import {HomeStack} from './home/HomeStack.tsx';

export function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        header: (props: BottomTabHeaderProps) => <TabHeader {...props} />,
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Plans" component={HomeStack} />
      <Tab.Screen name="Friends" component={HomeStack} />
      <Tab.Screen name="Profile" component={HomeStack} />
    </Tab.Navigator>
  );
}
