/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableHighlight
 } from 'react-native';


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


var Input = React.createClass({

    handleUpdateChange(text, list) {
        this.props.updateChange(text, list);

    },

    indexOf(list, val) {
      for (var i = 0; i < list.length ; i++)
      {
        if (list[i] == val)
          return i;
      }
      return -1;
    },

    remove(list, val) {
      var index = list.indexOf(val);
      if (index > -1)
      {
        list.splice(index, 1);
      }
    },

    render() {
      // console.log("list = ", this.props.list);
      var list = this.props.list;

      list.push('bbb');
      // console.log(list);
      // this.remove(list, 'bbb');
      // console.log(list);
      // console.log("indexOf", this.indexOf(list, 'aaa'))
      return (
        <TextInput onChangeText={(text) => this.handleUpdateChange(text, list)} style={{ width : 200, height: 40, justifyContent: 'center', borderColor: 'gray', borderWidth: 1}} />
    );
  }
});

var ClickText = React.createClass({
  handleUpdateChange(text, list) {
      this.props.updateChange(text, list);

  },

  indexOf(list, val) {
    for (var i = 0; i < list.length ; i++)
    {
      if (list[i] == val)
        return i;
    }
    return -1;
  },

  remove(list, val) {
    var index = list.indexOf(val);
    if (index > -1)
    {
      list.splice(index, 1);
    }
  },

  _onPressButton() {
    var list = this.props.list;
    list.push('bbb');
    this.handleUpdateChange("点击事件", list)
  },

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text style={{  width: 100, flex: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'gray', borderWidth: 1}}>点我</Text>
        </TouchableHighlight>
    </View>
    );
  },

});


var ShowText = React.createClass({

    async test(list) {
      console.log(list);
    },

    getInitialState(){

      return {
        text : '我是文字',
        emp: ["aaa"],
      }
    },

    handleChange(textValue, list){
      this.setState({
        text: textValue,
        emp: list
      });

      // this.test(this.state.emp);
      console.log("zhanghuan", "emp: " + this.emp);
    },

    render() {

        return (
          <View style={{flex : 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#F5FCFF'}}>
            <Text>{this.state.emp}</Text>
            <ClickText updateChange={this.handleChange} list={this.state.emp} />
          </View>
        );
    }
});

module.exports = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        <ShowText />
      </View>
    );
  }
});
