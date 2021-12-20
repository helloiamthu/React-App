/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component, useState } from 'react';
 import { StyleSheet, Text, View, Button, TextInput, Image , TouchableOpacity, Dimensions} from 'react-native';
 import Icon from 'react-native-vector-icons/Ionicons';
 import axios from 'axios';
 
//  const baseUrl = 'https://iam.bkav.com/oauth2/token';
 
 const { width: WIDTH } = Dimensions.get('window')
 export default class App extends React.Component {
   constructor(props) {
     super();
     this.state = {
       showPass: true,
       press: false
     }
//    {/*Hàm: đăng nhập*/}
//      this.state = {
//        username: '',
//        password: '',
//        result: false,
//      }
 }
 
   // updateState = () => {
   //   this.setState({ myState: 'The state is updated' });
   // }
 
   // _userLogin(props) {
   //   var username = this.state.username;
   //   var password = this.state.password;
   //   if (username && password) { // if validation fails, value will be null
   //     fetch("https://iam.bkav.com/oauth2/token", {
   //       method: "POST",
   //       headers: {
   //         'Accept': 'a689ab5f-56e8-379d-b754-a55b05bdbe69',
   //         'Content-Type': 'Bearer'
   //       },
   //       body: JSON.stringify({
   //         username: username,
   //         password: password,
   //       })
   //     })
   //       .then((response) => response.json())
   //       .then((responseData) => {
   //         console.log(responseData);
   //         alert(
   //           "Login Success!",
   //         ),
   //           this._onValueChange(STORAGE_KEY, responseData.id_token)
   //       })
   //       .done();
   //     renderResults();
   //   }
   
//    onChangeUsernameHandler = (username) => {
//      setFullName(username);
//    };
 
//    onChangePasswordHandler = (password) => {
//      setEmail(password);
//    };
//    onSubmitFormHandler = async (event) => {
//      if (!username.trim() || !password.trim()) {
//        alert("Khong duoc de trong!");
//        return;
//      }
//      setIsLoading(true);
//      try {
//        const response = await axios.post(`${baseUrl}/api/users`, {
//          username,
//          password,
//        });
//        if (response.status === 201) {
//          alert("Dang nhap thanh cong");
//          setIsLoading(false);
//          setUsername('');
//          setPassword('');
//        } else {
//          throw new Error("Co loi xay ra!");
//        }
//      } catch (error) {
//        alert("Co loi xay ra!");
//        setIsLoading(false);
//      }
//    }
 
   
//    static post(path = '', data = {}, optionalHeader = {}) {
//      return client({
//        method: 'POST',
//        url: path,
//        data,
//        headers: { ...authHeader(), ...optionalHeader }
//      })
//    }
 
//    static patch(path = '', data = {}) {
//      return client({
//        method: 'PATCH',
//        url: path,
//        data: JSON.stringify(data),
//        headers: { ...authHeader() }
//      })
//    }
 
//    static put(path = '', data = {}) {
//      return client({
//        method: 'PUT',
//        url: path,
//        data: JSON.stringify(data),
//        headers: { ...authHeader() }
//      })
//    }
 
//    static delete(path = '') {
//      return client({
//        method: 'DELETE',
//        url: path,
//        headers: { ...authHeader() }
//      })
//    }
//  }
 
//  /**
//   * axios interceptors runs before and after a request, letting the developer modify req,req more
//   * For more details on axios interceptor see https://github.com/axios/axios#interceptors
//   */
//  client.interceptors.request.use(config => {
//    // do something before executing the request
//    // For example tag along the bearer access token to request header or set a cookie
//    const requestConfig = config
//    const { headers } = config
//    requestConfig.headers = {
//      ...headers,
//      Authorization: `Bearer ${getItem('access_token')}`
//    }
//    return requestConfig
//  })
 
   showPass = () => {
     if(this.state.press == false ){
       this.setState({showPass: false, press: true})
     }else {
       this.setState({showPass: true, press: false})
     }
   }
   // renderResults = () => {
   //   if (responseData) {
   //     this.setState({
   //       result: true
   //     })
   //   }
 
   // handleUsername = (text) => {
   //   this.setState({ username: text })
   // }
 
   // handlePassword = (text) => {
   //   this.setState({ password: text })
   // }
 
   
   render(){
     return (
       <View style={styles.cantainer}>
         {/* <Image
           source={require('./jmg/bkav-logo.webp')}
           style={{ paddingRight: 80, paddingLeft: 200, marginTop: 50, marginBottom: 70, marginLeft: 60, alignItems: 'center', width: 300, height: 100 }}
         /> */}
         <View style={styles.subView}>
           <Text style={styles.subTxt}>ĐĂNG NHẬP</Text>
           <View style= {styles.userText}>
               <Icon name={'ios-person-circle'} size={32} color= {'black'} style={styles.inputIcon}/>
               <TextInput style={styles.input} 
                           placeholder="Username" 
                           placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                           underlineColorAndroid= 'transparent'
                           // onChangeText= {(username => {this.setState({username})})}
                           onChangeText = {onChangeUsernameHandler}
               />
           </View>
 
            <View>
               <Icon name= "ios-lock-closed" size={30} color= "black" style={styles.inputIcon}/>
               <TextInput style={styles.input} 
                           placeholder="Password" 
                           secureTextEntry= {this.state.showPass}
                           placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                           underlineColorAndroid= 'transparent'
                           // onChangeText={(password => { this.setState({ password }) })}
                           onChangeText = {onChangePasswordHandler}
               />
               <TouchableOpacity style={styles.btnEye} 
                  onPress={this.showPass.bind(this)}>
                 <Icon name={ this.state.press == false ?'ios-eye-outline': 'ios-eye-off-outline' }
                 size = {26} color={'rgba(255, 255, 255, 0.7)'}
                 />
               </TouchableOpacity>
           </View>
           
           
           <TouchableOpacity style={styles.btn} onPress={this._userLogin}>
             <Text style={styles.btnTxt}>Đăng nhập</Text>
           </TouchableOpacity>
           <View style={styles.endView}>
             <TouchableOpacity
               style={styles.endBtn}
               // onPress={() => this.props.navigation.navigate('login')}>
               // onPress ={() => this._userLogin}>
               onPress = {onSubmitFormHandler}
               disabled={isLoading}>
               <Text style={styles.loginTxt}>Quên mật khẩu?</Text>
             </TouchableOpacity>
           </View>
         </View>
       </View>
     );
   };
 
 styles = StyleSheet.create({
   cantainer: {
     backgroundColor: '#ff4500',
     height: 700,
   },
   subView: {
     backgroundColor: 'white',
     height: 430,
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
     color: 'black',
     marginTop: 30,
     fontSize: 30,
     fontWeight: 'bold',
     marginLeft: 120,
   },
   inputIcon: {
     position: 'absolute',
     top: 2,
     left: 38,
   }
   ,
   input: {
     width: WIDTH -55,
     height: 45,
     borderRadius: 25,
     fontSize: 16,
     paddingLeft: 50,
     backgroundColor: '#ff7f50',
     // color: 'rgba(255, 255, 255, 0.9)',
     marginHorizontal: 25
   },
   userText:{
     marginTop: 50,
     marginBottom: 20,
   },
 
   btn: {
     height: 50,
     width: 180,
     backgroundColor: '#ff4500',
     borderRadius: 80,
     borderWidth: 1,
     marginLeft: 120,
     marginTop: 50,
     justifyContent: 'center',
     alignItems: 'center',
   },
   btnTxt: {
     color: 'white',
     fontWeight: 'bold',
     fontSize: 20,
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
     top: 6,
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
 });}