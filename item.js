import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import GridView from "react-native-easy-grid-view"

class Item extends Component{
    constructor(props) {
      super(props);
      var ds = new GridView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithCells(this.props.list, 3)
      };
    }

    _renderCell(cell) {
        return (
            <View style={{justifyContent:'center'}}>
                <Text style={{backgroundColor:'#0004',textAlign:'center',color:'#fff',fontSize:24}}>{cell}</Text>
            </View>
        );
      }

  render() {
    var outStyle={
      width:parseInt(this.props.width),
      height:parseInt(this.props.height),
      backgroundColor:this.props.color,
    }
    var text=this.props.text;
    return (
      <View style={[outStyle]}>
        <Text style={styles.text}>{text}</Text>
        <GridView dataSource={this.state.dataSource}
                  renderCell={(Data) => <Text>{Data}</Text>}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  text:{
    color:'#ffffff',
    alignItems:'center'
  }
});

module.exports = Item;
