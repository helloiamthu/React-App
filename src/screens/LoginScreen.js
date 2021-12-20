// import React, { Component } from 'react';
// import { 
//   Text, 
//   StyleSheet, 
//   View,
//   Image,
//   TouchableWithoutFeedback,
//   StatusBar,
//   TextInput,
//   SafeAreaView,
//   Keyboard,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Dimensions,

// } from 'react-native';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
// import { authenticate } from '../actions/route/login';


// const { width: WIDTH } = Dimensions.get('window')
// class LoginScreen extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: ""
//     }
//     this._handleLogin = this._handleLogin.bind(this);
//   }

//  _handleLogin(e){
//   const { username, password } = this.state;
//   this.props.authenticate(username, password);
//  }

//  _handleUnameChange = (username) => {
//    this.setState({ username: username })
//  }

//  _handlePasswd = (password) => {
//    this.setState({ password: password })
//  }

//  render() {

//           const { isLoading } = this.state;
//           return (
//               <View style={styles.containerStyle}>
//                   <Spinner visible={isLoading} />
  
//                   {!this.state.isAuthorized ? <View>
//                       <Image
//                           source={require('../jmg/bkav-logo.webp')}
//                           style={{ paddingRight: 80, paddingLeft: 200, marginTop: 50, marginBottom: 70, marginLeft: 60, alignItems: 'center', width: 200, height: 100 }}
//                       />
  
//                       <View style={styles.subView}>
//                           <Text style={styles.subTxt}>ĐĂNG NHẬP</Text>
//                           <View style={styles.userText}>
//                               <Icon name={'ios-person-outline'} size={32} color={'rgba(255, 255, 255, 0.9)'} style={styles.inputIcon} />
//                               <TextInput style={styles.input}
//                                   placeholder="Username"
//                                   placeholderTextColor={'rgba(255, 255, 255, 0.9)'}
//                                   underlineColorAndroid='transparent'
//                                   value={this.state.username}
//                                   autoCapitalize='none'
//                                   autoCorrect={false}
//                                   returnKeyType="next"
//                                   onSubmitEditing={event =>
//                                       this.passwordInput.wrappedInstance.focus()
//                                   }
//                                   onChangeText={this._handleUnameChange}
                                  
//                               />
//                                 {this.getErrorMessageByField('username')}

                              
//                           </View>
  
  
//                           <View>
//                               <Icon name={"lock-outline"} size={32} color={'rgba(255, 255, 255, 0.9)'}
//                                    style={styles.inputIcon} />
//                               <TextInput style={styles.input}
//                                   placeholder="Password"
//                                   secureTextEntry={this.state.showPass}
//                                   placeholderTextColor={'rgba(255, 255, 255, 0.9)'}
//                                   underlineColorAndroid='transparent'
//                                   onChangeText={this._handlePasswd}
//                                   value={this.state.password}
//                                   autoCapitalize="none"
//                                   autoCorrect={false}
//                                   returnKeyType="done"
//                                   blurOnSubmit
//                                   onSubmitEditing={this.onPressLogin.bind(this)}
//                                />
//                                <TouchableOpacity style={styles.btnEye}
//                                   onPress={this.showPass.bind(this)}>
//                                   <Icon name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'}
//                                           size={26} color={'rgba(255, 255, 255, 0.7)'}
//                                   />
//                                </TouchableOpacity>
//                                {this.getErrorMessageByField('password')}
  
//                                 {this.getNonFieldErrorMessage()}
//                           </View>
  
      
                          
//                           <TouchableOpacity style={styles.btn}>
//                               <Text style={styles.btnTxt}>Đăng nhập</Text>
//                            </TouchableOpacity>
//                       <View style={styles.endView}>
//                           <TouchableOpacity
//                               style={styles.endBtn}
//                               // onPress={() => this.props.navigation.navigate('login')}>
//                               onPress={this._handleLogin}>
//                           </TouchableOpacity>
//                       </View>
                  
              
                          
                           
//                       {/* </View> */}
                      
//                   </View>
//                       </View> : <View><Text>Successfully authorized!</Text></View>}
//                   </View>
//           );
//       }
//   }
  

// const mapStateToProps = (state, ownProps) => {
//   return {
//     login: state.user
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ authenticate }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)


// const styles = StyleSheet.create({
//       cantainer: {
//           backgroundColor: '#ff4500',
//           height: 700,
//       },
//       inputIcon: {
//           position: 'absolute',
//           top: 2,
//           left: 38,
//       },
//       containerStyle: {
//           flex: 1,
//           alignItems: 'center',
//           justifyContent: 'center',
//           backgroundColor: '#ff8c00',
//       },
//       subView: {
//           backgroundColor: 'white',
//           height: 430,
//           marginTop: 10,
//           borderTopRightRadius: 40,
//           borderTopLeftRadius: 40,
//       },
//       headerTxt: {
//           fontSize: 40,
//           marginLeft: 40,
//           fontWeight: 'bold',
//           color: 'white',
//           position: 'absolute',
//           marginTop: 140,
//       },
//       subTxt: {
//           color: '#ff4500',
//           marginTop: 20,
//           fontSize: 35,
//           fontWeight: 'bold',
//           marginLeft: 120,
//       },
//       input: {
//           width: WIDTH - 55,
//           height: 45,
//           borderRadius: 25,
//           fontSize: 16,
//           paddingLeft: 50,
//           backgroundColor: '#ff8c00',
//           color: 'rgba(255, 255, 255, 0.8)',
//           marginHorizontal: 25
//       },
//       userText: {
//           marginTop: 50,
//           marginBottom: 20,
//       },
  
//       btn: {
//           height: 50,
//           width: 180,
//           backgroundColor: '#ff8c00',
//           borderRadius: 80,
//           borderWidth: 1,
//           marginLeft: 120,
//           marginTop: 50,
//           justifyContent: 'center',
//           alignItems: 'center',
//       },
//       btnTxt: {
//           color: 'white',
//           // fontWeight: 'bold',
//           fontSize: 18,
//       },
//       endView: {
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//       },
//       endTxt: {
//           fontSize: 15,
//           marginTop: 20,
//           marginLeft: 40,
//           fontWeight: 'bold',
//       },
//       btnEye: {
//           position: 'absolute',
//           top: 6,
//           right: 45,
//       }
//       ,
//       endBtn: {
//           marginRight: 70,
//       },
//       loginTxt: {
//           fontSize: 15,
//           fontWeight: 'bold',
//           marginTop: 17,
//           textAlign: 'center',
//           marginLeft: 160,
//       },
//   });