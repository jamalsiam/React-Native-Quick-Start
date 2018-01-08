import React , {Component} from 'react';
import {View , Text , StyleSheet} from 'react-native';
import {Button , Cart , CartItem , Input} from './common';

class Login extends Component{
    constructor(){
        super();
        this.state={
            username: '',
            password: ''
        }
    }
    Login(){
        console.log(this.state);
    }
    render(){
        return(
            <View>
                <Cart>
                    <CartItem>
                        <Input
                            label="Email"
                            placeholder='UserName'
                            secureTextEntry={false}
                            onChangeText={(username)=>this.setState({username:username})} />
                    </CartItem>
                    <CartItem>
                        <Input
                            label="Password"
                            placeholder='********'
                            secureTextEntry={true}
                            onChangeText={(password)=>this.setState({password:password})} />
                    </CartItem>
                    <CartItem>
                        <Button title="Login" onPress={this.Login.bind(this)}>
                        </Button>
                    </CartItem>
                </Cart>
            </View>
        );
    }
}

export default Login;