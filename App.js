import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import CodePush from 'react-native-code-push'

import { Scores } from './Scores'
import { NotScores } from './NotScores'

const codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME };

class App extends React.Component {
  render() {
    const { AppName } = this.props
    
    const moduleDictionary = {
      'Scores': Scores,
      'NotScores': NotScores
    }

    const ReactModule = moduleDictionary[AppName] || moduleDictionary['NotScores']

    return (
      <ReactModule {...this.props} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default CodePush(codePushOptions)(App);
