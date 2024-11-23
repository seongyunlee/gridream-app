import {
  BottomTabHeaderProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {TabHeader} from './TabHeader.tsx';
import {HomeStack} from './home/HomeStack.tsx';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function TabNavigation() {
  const Tab = createBottomTabNavigator();

  const navigation = useNavigation();

  const handleWriteTabPress = () => {
    navigation.navigate('Write');
  };
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        header: (props: BottomTabHeaderProps) => <TabHeader {...props} />,
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Plans" component={HomeStack} />
      <Tab.Screen
        name="Write"
        component={() => null}
        options={{
          tabBarButton: props => (
            <TouchableOpacity
              onPress={handleWriteTabPress}
              style={{
                width: '100%',
                height: '100%',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}>
              {/* Customize the appearance of the fake tab button here */}
              <Text style={{textAlign: 'center'}}>Write</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Friends" component={HomeStack} />
      <Tab.Screen name="Profile" component={HomeStack} />
    </Tab.Navigator>
  );
}
