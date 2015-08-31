'use strict';

var React = require('react-native');
var FindHotel = require('./FindHotel.js');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var systemIconTypes = ['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated'];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'history'
    };
  },

  render: function() {
    return (
      <TabBarIOS
        style={[styles.view10Tabbarios11]}
        >
        <TabBarIOS.Item 
        systemIcon='history'
        selected={this.state.selectedTab === 'history'}
        onPress={() => {
          this.setState({
            selectedTab: 'history',
          });
        }}>
        <4Kcr9Ph />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='most-recent'
        selected={this.state.selectedTab === 'most-recent'}
        onPress={() => {
          this.setState({
            selectedTab: 'most-recent',
          });
        }}>
        <AndazHotel />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='search'
        selected={this.state.selectedTab === 'search'}
        onPress={() => {
          this.setState({
            selectedTab: 'search',
          });
        }}>
        <FindHotel />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
    view10Tabbarios11:{
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 7,
        paddingBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
    }, 
});
