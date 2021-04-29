import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';
import AuthRoutes from './tab.routs';

const stakcRouts = createStackNavigator();

const AppRouts: React.FC = () => (
    <stakcRouts.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}
    >
        <stakcRouts.Screen
            name="Welcome"
            component={Welcome}
        />

        <stakcRouts.Screen
            name="UserIdentification"
            component={UserIdentification}
        />

        <stakcRouts.Screen
            name="Confirmation"
            component={Confirmation}
        />

        <stakcRouts.Screen
            name="PlantSelection"
            component={AuthRoutes}
        />

        <stakcRouts.Screen
            name="PlantSave"
            component={PlantSave}
        />

        <stakcRouts.Screen
            name="MyPlants"
            component={AuthRoutes}
        />
    </stakcRouts.Navigator>
)

export default AppRouts;