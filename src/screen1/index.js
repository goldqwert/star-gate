import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import {
    STARGATE_HOME,
    STARGATE_DETAILS
} from '../routes'
import DetailsScreen from './DetailsScreen'

export default createStackNavigator(
    {
        [STARGATE_HOME]: HomeScreen,
        [STARGATE_DETAILS]: DetailsScreen
    },
    {
        headerMode: 'none'
    }
)