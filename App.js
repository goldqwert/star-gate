import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Header, ImageCard } from './src/components'

const url = 'https://gitlab.com/gHashTag/react-native-init/raw/master/db.json' // на github проблемы c запросом, поэтому ссылку поменял

export default class App extends Component {
  state = {
    title: 'STAR GATE',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET'
      })
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      console.warn('e', e) // eslint-disable-line
      throw e
    }
  }

  render() {
    const { title, data } = this.state
    const { container } = s
    return (
      <View>
        <Header title={title} />
        <ScrollView>
          <View style={container}>
            {data.map(item => (
              <ImageCard data={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 150
  }
});

