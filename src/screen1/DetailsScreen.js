import React, { PureComponent } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Header, ImageBigCard } from '../components'

export default class DetailsScreen extends PureComponent {

    render() {
        const { image, name, summary } = this.props.navigation.state.params
        const { navigation } = this.props
        const data = { image, name }
        const { container, text, title } = s
        return (
            <View style={container}>
                <Header title={name}
                    detail
                    onPress={() => navigation.goBack()}
                    leftIcon='ios-arrow-back'
                    leftColor='#fff' />
                <ScrollView>
                    <View style={{ padding: 20, alignItems: 'center' }}>
                        <ImageBigCard data={data} />
                        <Text style={title}>{name.toUpperCase()}</Text>
                        <Text style={text}>{summary.replace(/<[^>]+>/g, '')}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    text: {
        color: 'grey',
        fontSize: 15,
        textAlign: 'center'
    }
});

