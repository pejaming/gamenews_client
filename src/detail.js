'use strict';
import React, {Component} from "react";
import {AppRegistry,ActivityIndicator,TouchableOpacity, Animated, FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import { WebView } from 'react-native';



const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
//const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars';


export default class DetailWebView extends Component {
     static navigationOptions = ({ navigation }) => ({
        title: '详情',
      });

    render() {
        const { params } = this.props.navigation.state;
        //alert(params);
        var REQUEST_URL = `${params.url}`;

        return (
          <WebView
             source={{uri:REQUEST_URL }}
            style={{marginTop: 20}}
          />
        );
      }


}
