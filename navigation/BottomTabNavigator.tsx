/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import JyavScreen from '../screens/JyavScreen';
import FenglouScreen from '../screens/FenglouScreen';
import { BottomTabParamList, JyavParamList, FenglouParamList, ShenshiParamList } from '../types';
import ShenshiScreen from '../screens/ShenshiScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="jyav"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="jyav"
        component={JyavNavigator}
        options={{
          tabBarLabel: '巨硬AV',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-videocam" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="fenglou"
        component={FenglouNavigator}
        options={{
          tabBarLabel: '上林仙馆',
          tabBarIcon: ({ color }) => <TabBarIcon name="cube" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="shenshi"
        component={ShenshiNavigator}
        options={{
          tabBarLabel: '绅士之家',
          tabBarIcon: ({ color }) => <TabBarIcon name="people" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const JyavStack = createStackNavigator<JyavParamList>();

function JyavNavigator() {
  return (
    <JyavStack.Navigator>
      <JyavStack.Screen
        name="JyavScreen"
        component={JyavScreen}
        options={{ headerTitle: '巨硬AV' }}
      />
    </JyavStack.Navigator>
  );
}

const FenglouStack = createStackNavigator<FenglouParamList>();

function FenglouNavigator() {
  return (
    <FenglouStack.Navigator>
      <FenglouStack.Screen
        name="FenglouScreen"
        component={FenglouScreen}
        options={{ headerTitle: '上林仙馆' }}
      />
    </FenglouStack.Navigator>
  );
}
const ShenshiStack = createStackNavigator<ShenshiParamList>();

function ShenshiNavigator() {
  return (
    <ShenshiStack.Navigator>
      <ShenshiStack.Screen
        name="ShenshiScreen"
        component={ShenshiScreen}
        options={{ headerTitle: '绅士之家' }}
      />
    </ShenshiStack.Navigator>
  );
}
