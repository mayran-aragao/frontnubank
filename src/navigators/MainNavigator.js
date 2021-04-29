import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

const MainNavigator = createStackNavigator({
    Welcome:{
        screen:Welcome,
        
    },
    Login:{
        screen:Login
    }
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#9400d3',
            height:100
            
        },
        headerTitleContainerStyle:{
        },
        headerTintColor:'#fff'
    }
}
);

export default MainNavigator;