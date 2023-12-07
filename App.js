import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse, faChartSimple, faHashtag, faUser, faMap } from "@fortawesome/free-solid-svg-icons";

import { MainStack } from './src/stacks/MainStack';
import { ChartStack } from './src/stacks/ChartStack';
import { ProfileStack } from './src/stacks/ProfileStack';
import { LoginSignIn } from './src/screens/LoginSignIn';
import { useEffect, useState } from 'react';
import { FeedStack } from './src/stacks/FeedStack';
import { MapStack } from './src/stacks/MapStack';

const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get("window");

export default function App() {
  const [userInfo, setUserInfo] = useState();
  

  useEffect(() => {
    const getUser = async () => {
      try {
        const User = await AsyncStorage.getItem("@book:userInfo");
        if (User !== null) {
          setUserInfo({"success": true, "value" : User})
        }
        else {
          setUserInfo({"success": false})
        }
      } catch (error) {
        console.error("Error!: ",error)
      }
    }

    if (userInfo === undefined) {
      getUser()
    }
    console.log("mount");
  }, [userInfo])

  return (
    <>
    {
      userInfo !== undefined && userInfo.success ? (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='main'
            screenOptions={{
              tabBarActiveTintColor: '#EC9C1D',
              tabBarStyle: {
                display: "flex",
                height: height * 0.07,
              },
              tabBarLabelStyle: {
                textAlign: "center"
              }
            }}
          >
            <Tab.Screen 
              name='main' 
              component={MainStack} 
              options={{
                headerShown:false,
                tabBarLabel: ({focused, color}) => {
                  return <Text style={{fontWeight: focused ? 'bold': 'normal', color, fontSize: 12, marginBottom:5}}>
                    홈
                  </Text>
                },
                tabBarIcon: ({color, size}) => {
                  return <FontAwesomeIcon 
                    icon={faHouse}
                    size={size}
                    color={color}
                    style={{marginTop: 5}}
                  />
                }
              }}
            />
            <Tab.Screen 
              name='feed' 
              component={FeedStack} 
              options={{
                headerShown:false,
                tabBarLabel: ({focused, color}) => {
                  return <Text style={{fontWeight: focused ? 'bold': 'normal', color, fontSize: 12, marginBottom: 5}}>
                    피드
                  </Text>
                },
                tabBarIcon: ({color, size}) => {
                  return <FontAwesomeIcon
                    icon={faHashtag}
                    size={size}
                    color={color}
                    style={{marginTop: 5}}
                  />
                }
              }}
            />
            <Tab.Screen 
              name='map' 
              component={MapStack} 
              options={{
                headerShown:false,
                tabBarLabel: ({focused, color}) => {
                  return <Text style={{fontWeight: focused ? 'bold': 'normal', color, fontSize: 12, marginBottom: 5}}>
                    지도
                  </Text>
                },
                tabBarIcon: ({color, size}) => {
                  return <FontAwesomeIcon
                    icon={faMap}
                    size={size}
                    color={color}
                    style={{marginTop: 5}}
                  />
                }
              }}
            />
            <Tab.Screen 
              name='chart' 
              component={ChartStack} 
              options={{
                headerShown:false,
                tabBarLabel: ({focused, color}) => {
                  return <Text style={{fontWeight: focused ? 'bold': 'normal', color, fontSize: 12, marginBottom: 5}}>
                    통계
                  </Text>
                },
                tabBarIcon: ({color, size}) => {
                  return <FontAwesomeIcon
                    icon={faChartSimple}
                    size={size}
                    color={color}
                    style={{marginTop: 5}}
                  />
                }
              }}
            />
            <Tab.Screen 
              name='profile' 
              component={ProfileStack} 
              options={{
                headerShown:false,
                tabBarLabel: ({focused, color}) => {
                  return <Text style={{fontWeight: focused ? 'bold': 'normal', color, fontSize: 12, marginBottom: 5}}>
                    마이
                  </Text>
                },
                tabBarIcon: ({color, size}) => {
                  return <FontAwesomeIcon
                    icon={faUser}
                    size={size * 0.9}
                    color={color}
                    style={{marginTop: 5}}
                  />
                }
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <LoginSignIn />
      )
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  GNB: {
    width: "100%", 
    height: 65,
    alignItems: "center", 
    justifyContent: "space-between", 
    borderTopColor: "#aaa",
    borderTopWidth: 1
  }
});