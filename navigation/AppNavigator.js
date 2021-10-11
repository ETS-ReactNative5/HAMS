/* eslint-disable prettier/prettier */
import React from "react";
import {Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';
//HomeStack
import MainScreen from '../screens/HomeStack/MainScreen';
import BmrCalculator from '../screens/HomeStack/BmrCalculator';
import WeightCalculator from '../screens/HomeStack/WeightCalculator';
import MealList from '../screens/HomeStack/MealList';
import HomeScreen from '../screens/HomeStack/HomeScreen';
import CalorieBreakdown from '../screens/HomeStack/SegmentScreens/CalorieBreakdown';
import TotalCaloriesConsumed from '../screens/HomeStack/SegmentScreens/TotalCaloriesConsumed';
//Questions
import Fatigue from '../screens/Questions/Fatigue';
import Cardio from '../screens/Questions/Cardio';
import Digest from '../screens/Questions/Digest';
import Immune from '../screens/Questions/Immune';
import Mental from '../screens/Questions/Mental';

const HomeStack = createStackNavigator();
const CalculatorStack = createStackNavigator();
const QuestionsStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const AppNavigator = () => {
    const HomeStackScreen = () => (
        <HomeStack.Navigator
            initialRouteName="MainScreen"
        >
            <HomeStack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    title: 'HAMS',
                    headerStyle: {
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                    },
                    headerTintColor: Colors.PRIMARY_COLOR,
                }}
            />
            <HomeStack.Screen
                name="BmrCalculator"
                component={BmrCalculator}
                options={{
                    title: 'HAMS',
                    headerStyle: {
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                    },
                    headerTintColor: Colors.PRIMARY_COLOR,
                }}
            />
            <HomeStack.Screen
                name="WeightCalculator"
                component={WeightCalculator}
                options={{
                    title: 'HAMS',
                    headerStyle: {
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                    },
                    headerTintColor: Colors.PRIMARY_COLOR,
                }}
            />
            <HomeStack.Screen
                name="MealList"
                component={MealList}
                options={{
                    title: 'HAMS',
                    headerStyle: {
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                    },
                    headerTintColor: Colors.PRIMARY_COLOR,
                }}
            />
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'HAMS',
                    headerStyle: {
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                    },
                    headerTintColor: Colors.PRIMARY_COLOR,
                }}
            />
            <HomeStack.Screen
                name="CalorieBreakdown" 
                component={CalorieBreakdown} 
                options={{
                    title: 'HAMS',
                    headerStyle: {
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                    },
                    headerTintColor: Colors.PRIMARY_COLOR
                }}
            />
            <HomeStack.Screen
                name="TotalCaloriesConsumed"
                component={TotalCaloriesConsumed}
                options={{
                    title: 'HAMS',
                    headerStyle: {
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                    },
                    headerTintColor: Colors.PRIMARY_COLOR
                }}
            />
        </HomeStack.Navigator>
    )

    const QuestionsStackScreen = () => (
        <QuestionsStack.Navigator
            initialRouteName="Fatigue"
        >
            <QuestionsStack.Screen
                name="Fatigue"
                component={Fatigue}
                options={{
                    title: 'HAMS',
                    headerStyle: {
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                    },
                    headerTintColor: Colors.PRIMARY_COLOR,
                }}
            />
            <QuestionsStack.Screen
                name="Mental"
                component={Mental}
                options={{
                    title: 'HAMS',
                    headerStyle: {
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                    },
                    headerTintColor: Colors.PRIMARY_COLOR,
                }}
            />
            <QuestionsStack.Screen
                name="Cardio"
                component={Cardio}
                options={{
                    title: 'HAMS',
                    headerStyle: {
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                    },
                    headerTintColor: Colors.PRIMARY_COLOR,
                }}
            />
            <QuestionsStack.Screen
                name="Digest"
                component={Digest}
                options={{
                    title: 'HAMS',
                    headerStyle: {
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                    },
                    headerTintColor: Colors.PRIMARY_COLOR,
                }}
            />
            <QuestionsStack.Screen
                name="Immune"
                component={Immune}
                options={{
                    title: 'HAMS',
                    headerStyle: {
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                    },
                    headerTintColor: Colors.PRIMARY_COLOR,
                }}
            />
        </QuestionsStack.Navigator>
    );

    return (
        <NavigationContainer>
            <Tabs.Navigator
                tabBarOptions={{
                    inactiveBackgroundColor: Colors.PRIMARY_BG_COLOR,
                    activeBackgroundColor : Colors.PRIMARY_BG_COLOR,
                    activeTintColor : Colors.PRIMARY_COLOR,
                    inactiveTintColor : Colors.HINT_COLOR,
                    keyboardHidesTabBar : true,
                }}
            >
                <Tabs.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{
                        tabBarIcon: ({ size, focused, color  }) => {
                            let iconName = 'heart';
                            // You can return any component that you like here!
                            return <AntDesignIcon name={iconName} size={size} color={color} />
                        },
                        tabBarLabel: ({focused, color}) => {
                            return <Text style={{fontSize:12, fontWeight:'300', color: color}}>Home</Text>
                        }
                    }}
                />
                <Tabs.Screen
                    name="Questions"
                    component={QuestionsStackScreen}
                    options={{
                        tabBarIcon: ({ size, focused, color  }) => {
                            let iconName = 'question-answer';
                            // You can return any component that you like here!
                            return <MaterialIcons name={iconName} size={size} color={color} />
                        },
                        tabBarLabel: ({focused, color}) => {
                            return <Text style={{fontSize:12, fontWeight:'300', color: color}}>Questions</Text>
                        }
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;