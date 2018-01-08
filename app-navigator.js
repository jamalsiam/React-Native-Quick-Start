import {StackNavigator} from 'react-navigation';
import Home from './app/Home';
import Login from './app/login';

const Nav = StackNavigator({
    Login:{screen:Login,
           navigationOptions:{
                title:"Login"
            }
    },
    Home: { screen: Home,
            navigationOptions:{
              title:"Home"
            }
    }

});

export default Nav ;