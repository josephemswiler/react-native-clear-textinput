import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ChangeText from './ChangeText'

export default class App extends React.Component {
  state = { appText: 'Hello World' }

  writeText = text => {
    this.setState({
      appText: text
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>{this.state.appText}</Text>
        <ChangeText writeText={this.writeText} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
