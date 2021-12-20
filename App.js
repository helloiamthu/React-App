import React, { Component, useState } from 'react';
import {
    Platform,
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/LoginAction';
import axios from 'axios';
import { event } from 'react-native-reanimated';
import Spinner from 'react-native-loading-spinner-overlay';
import _login, { setClientToken } from '../bkav_2/src/api/_login';


const { width: WIDTH } = Dimensions.get('window')

const initialState = {
    username: '',
    password: '',
    errors: {},
    isAuthorized: false,
    isLoading: false,
};
class App extends Component {
    
    constructor(props) {
        super();
        this.state = {
            showPass: true,
            press: false,
            username: '',
            password: '',
            errors: {},
            isAuthorized: false,
            token: '',
            isLoading: false,
        };

    }

    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }

    state = initialState;

    componentWillUnmount() { }

    onUsernameChange = username => {
        this.setState({ username });
    };

    onPasswordChange = password => {
        this.setState({ password });
    };

    onPressLogin() {
        const { username, password } = this.state;
        const payload = { username, password };
        console.log(payload);

        const onSuccess = ({ data }) => {
            // Set JSON Web Token on success
            setClientToken(data.token);
            this.setState({ isLoading: false, isAuthorized: true });
        };

        const onFailure = error => {
            console.log(error && error.response);
            this.setState({ errors: error.response.data, isLoading: false });
        };

        // Show spinner when call is made
        this.setState({ isLoading: true });

        _login.post('https://iam.bkav.com/oauth2/token', payload)
            .then(onSuccess)
            .catch(onFailure);
        // var session_url = 'https://iam.bkav.com/oauth2/token';
        // var username = 'ThuPTp';
        // var password = 'AT150156@1';
        // axios.post(session_url, {}, {
        //     auth: {
        //         username: username,
        //         password: password
        //     }
        // }).then(function (response) {
        //     console.log('Authenticated');
        // }).catch(function (error) {
        //     console.log('Error on Authentication');
        // });

    }


    getNonFieldErrorMessage() {
        // Return errors that are served in `non_field_errors`
        let message = null;
        const { errors } = this.state;
        if (errors.non_field_errors) {
            message = (
                <View style={styles.errorMessageContainerStyle}>
                    {errors.non_field_errors.map(item => (
                        <Text style={styles.errorMessageTextStyle} key={item}>
                            {item}
                        </Text>
                    ))}
                </View>
            );
        }
        return message;
    }

    getErrorMessageByField(field) {
        // Checks for error message in specified field
        // Shows error message from backend
        let message = null;
        if (this.state.errors[field]) {
            message = (
                <View style={styles.errorMessageContainerStyle}>
                    {this.state.errors[field].map(item => (
                        <Text style={styles.errorMessageTextStyle} key={item}>
                            {item}
                        </Text>
                    ))}
                </View>
            );
        }
        return message;
    }

    render() {
        const { isLoading } = this.state;
        return (
            <View style={styles.containerStyle}>
                <Spinner visible={isLoading} />

                {!this.state.isAuthorized ? <View>
                    <Image
                        source={require('../bkav_2/src/jmg/bkav-logo.webp')}
                        style={{ paddingRight: 80, paddingLeft: 200, marginTop: 70, marginBottom: 30, marginLeft: 60, alignItems: 'center', width: 50, height: 80 }}
                    />

                    <View style={styles.subView}>
                        <Text style={styles.subTxt}>ĐĂNG NHẬP</Text>
                        <View style={styles.userText}>
                            
                            <TextInput style={styles.input}
                                placeholder="Username"
                                placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                                underlineColorAndroid='transparent'
                                value={this.state.username}
                                autoCapitalize='none'
                                autoCorrect={false}
                                returnKeyType="next"
                                onSubmitEditing={event =>
                                    this.passwordInput.wrappedInstance.focus()
                                }
                                onChangeText={this.onUsernameChange}
                            />
                            <Icon name={'ios-person-sharp'} size={30} color={'rgba(255, 255, 255, 0.6)'} style={styles.inputIcon} />
                        </View>

                        {this.getErrorMessageByField('username')}

                        <View>
                            
                            <TextInput style={styles.input}
                                placeholder="Password"
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                                underlineColorAndroid='transparent'
                                onChangeText={this.onPasswordChange}
                                value={this.state.password}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="done"
                                blurOnSubmit
                                onSubmitEditing={this.onPressLogin.bind(this)}
                             />
                             <Icon name={"ios-lock-closed"} size={28} color={'rgba(255, 255, 255, 0.6)'}
                                 style={styles.inputIcon} />
                             <TouchableOpacity style={styles.btnEye}
                                onPress={this.showPass.bind(this)}>
                                <Icon name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'}
                                        size={28} color={'rgba(255, 255, 255, 0.7)'}
                                />
                             </TouchableOpacity>
                        </View>

                        {this.getErrorMessageByField('password')}

                        {this.getNonFieldErrorMessage()}
                        
                        <TouchableOpacity style={styles.btn} onPress={this.onPressLogin.bind(this)}>
                            <Text style={styles.btnTxt}>Đăng nhập</Text>
                         </TouchableOpacity>
                    <View style={styles.endView}>
                        <TouchableOpacity
                            style={styles.endBtn}
                            // onPress={() => this.props.navigation.navigate('login')}>
                            onPress={this.onPressLogin.bind(this)}>
                        </TouchableOpacity>
                    </View>
                
            
                        
                         
                
                    
                </View>
                    </View> : <View><Text>Successfully authorized!</Text></View>}
                </View>
        );
    }
}
const styles = StyleSheet.create({
    cantainer: {
        backgroundColor: 'white',
        height: 700,
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 45,
    },
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    subView: {
        backgroundColor: 'white',
        height: 500,
        marginTop: 10,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    headerTxt: {
        fontSize: 40,
        marginLeft: 40,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        marginTop: 140,
    },
    subTxt: {
        color: '#ff4500',
        marginTop: 40,
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 120,
    },
    input: {
        width: WIDTH - 55,
        height: 55,
        borderRadius: 25,
        fontSize: 18,
        paddingLeft: 70,
        backgroundColor: '#ff8c00',
        color: 'rgba(255, 255, 255, 0.6)',
        marginHorizontal: 25
    },
    userText: {
        marginTop: 90,
        marginBottom: 20,
    },

    btn: {
        height: 50,
        width: 180,
        backgroundColor: '#ff8c00',
        borderRadius: 30,
        // borderWidth: 0.6,
        marginLeft: 120,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        color :'rgba(255, 255, 255, 0.6)',
        // fontWeight: 'bold',
        fontSize: 18,
    },
    endView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    endTxt: {
        fontSize: 15,
        marginTop: 20,
        marginLeft: 40,
        fontWeight: 'bold',
    },
    btnEye: {
        position: 'absolute',
        top: 11,
        right: 45,
    }
    ,
    endBtn: {
        marginRight: 70,
    },
    loginTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 17,
        textAlign: 'center',
        marginLeft: 160,
    },
});
export default App;
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

//  import React, { Component } from 'react';
//  import {
//    Platform,
//    StyleSheet,
//    Text,
//    View,
//  } from 'react-native';
//  import SplashScreen from 'react-native-splash-screen';
 
//  import { AppNavigator } from './src/StackNavigator';
//  import { store } from './src/store/userStore';
//  import { Provider } from 'react-redux';
 
//  export default class App extends Component {
 
//    componentDidMount() {
 
//      setTimeout(() =>{
//          SplashScreen.hide();
//      }, 3600);
 
//    }
 
//    render() {
//      return (
//        <Provider store={store}>
//          <AppNavigator />
//        </Provider>
//      );
//    }
//  }




// import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {getProfileFetch} from './redux/actions';
// import Signup from './components/Signup';
// import Login from './components/Login';


// class App extends Component {
//   componentDidMount = () => {
//     this.props.getProfileFetch()
//   }

//   render() {
//     return (
//       <div>
//         <Switch>
//           <Route path="/signup" component={Signup}/>
//           <Route path="/login" component={Login}/>
//         </Switch>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   getProfileFetch: () => dispatch(getProfileFetch())
// })

// export default connect(null, mapDispatchToProps)(App);
