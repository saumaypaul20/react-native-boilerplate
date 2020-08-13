import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { screenNames } from './screenNames'
import Home from '../pages/Home/Home';
import Welcome from '../pages/Welcome/Welcome';
 
const Stack = createStackNavigator();

const Routes = ({ login }) => {

    // const config = {
    //     animation: 'spring',
    //     config: {
    //       stiffness: 1000,
    //       damping: 100,
    //       mass: 3,
    //       overshootClamping: true,
    //       restDisplacementThreshold: 0.01,
    //       restSpeedThreshold: 0.01,
    //     },
    //   };

    return (
        <NavigationContainer>
            <Stack.Navigator
                // initialRouteName={login ? screenNames.PINSCREEN : screenNames.HOME}
                initialRouteName={screenNames.HOME}
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

                }}>

                <Stack.Screen name={screenNames.HOME} component={Home} />
                 
                

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
