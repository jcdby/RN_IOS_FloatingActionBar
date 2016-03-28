/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  ListView,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  StyleSheet
} from 'react-native';

let items = ['bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla',]
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
let dimensions = Dimensions.get('window');


class floatButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasource: ds.cloneWithRows(items)
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ListView style={{flex: 1}}dataSource={this.state.datasource} renderRow={(rowData) => <Text>{rowData}
        </Text>}/>
          <TouchableHighlight style={styles.floatingButton} onPress={()=>{console.log('touched');}}  >
            <Text>
              +
            </Text>
          </TouchableHighlight>
      </View>

    );
  }
}

let styles = StyleSheet.create({
  floatingButton: {
    position:'absolute',
    top: dimensions.height - 100,
    left: dimensions.width - 100,
    borderRadius: 25,
    width:50,
    height:50,
    backgroundColor: '#3668ba',
    justifyContent: 'center',
    alignItems: 'center'
  }
})



AppRegistry.registerComponent('floatButton', () => floatButton);
