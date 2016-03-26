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
  TouchableHighlight
} from 'react-native';

let items = ['bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla','bla',]
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

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
        <View style={{flex: 0.001,top: -60, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight style={{ backgroundColor: 'red', width: 50, height: 50, borderRadius: 25,justifyContent: 'center', alignItems: 'center', margin: 20}} onPress={()=>{console.log('touched');}}  >
            <Text>
              +
            </Text>
          </TouchableHighlight>
        </View>
      </View>

    );
  }
}


AppRegistry.registerComponent('floatButton', () => floatButton);
