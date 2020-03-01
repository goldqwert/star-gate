import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Header, ImageCard } from '../components/index.js'
import { STARGATE_DETAILS } from '../routes'

const url = 'http://api.tvmaze.com/search/shows?q=stargate'

export default class HomeScreen extends Component {
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
    const { navigation } = this.props
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Header title={title} />
        <ScrollView>
          <View style={container}>
            {data.map(item => (
              <ImageCard data={item.show} key={item.show.id}
                onPress={() => navigation.navigate(STARGATE_DETAILS, (item.show))}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 150
  }
});

