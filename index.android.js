'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  DeviceEventEmitter,
  ToastAndroid,
} from 'react-native';

import WeChat from 'react-native-wechat-android';

let appId = 'wx80c1fa604d0b9852';   // 你的AppId

let webpageOptions = {
      title: '分享这个网页给你',
      desc: '我发现这个网页很有趣，特意分享给你',
      thumbSize: 150,
      scene: 0,
      type: 3,

      webpageUrl: 'https://github.com/beefe/react-native-wechat-android',
      thumbImage: 'https://www.baidu.com/img/bd_logo1.png',
};

class MyProject extends Component{
  constructor(props){
    super(props);
    // 处理登录回调结果
    DeviceEventEmitter.addListener('finishedAuth',function(event){
       var success = event.success;
        if(success){
          console.log("XXXXXXXXXXXXXXXXX",event.code);
         ToastAndroid.show(
          ' code = ' + JSON.stringify(event.code) +
          ' state = ' + JSON.stringify(event.state),
          ToastAndroid.LONG
         );
        }else{
          console.log("XXXXXXXXXXXXXXXXX",event.code);
         ToastAndroid.show('授权失败',ToastAndroid.SHORT);
        }
      });
    DeviceEventEmitter.addListener('finishedShare',function(event){
      var success = event.success;
      if(success){
console.log("XXXXXXXXXXXXXXXXX",event.code);
        ToastAndroid.show('分享成功',ToastAndroid.SHORT);
      }else{
console.log("XXXXXXXXXXXXXXXXX",event.code);
        ToastAndroid.show('分享失败',ToastAndroid.SHORT);
      }
    });
  }
  _loginWechat(){
    WeChat.sendAuthReq('snsapi_userinfo','wechat_sdk_demo_test',(err,authReqOK) => {
            console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZ",authReqOK);
            ToastAndroid.show(authReqOK + '',ToastAndroid.SHORT);
      });

  }

  _registerApp(){
        WeChat.registerApp(appId,(err,registerOK) => {
            ToastAndroid.show(registerOK + '',ToastAndroid.SHORT);
        });
  }

  _openApp(){
        WeChat.openWXApp((err,res) => {

        });
  }

  _share(){
          WeChat.sendReq(webpageOptions,(err,sendOK) => {
          });
  }

  componentWillMount(){

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={this._loginWechat} >
        登录到微信
        </Text>
        <Text style={styles.text} onPress={this._registerApp} >
          注册到微信
        </Text>
        <Text style={styles.text} onPress={this._openApp} >
          打开微信
        </Text>
        <Text style={styles.text} onPress={this._share} >
          分享网页到微信
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
});

AppRegistry.registerComponent('RunnerCampShop', () => MyProject);
