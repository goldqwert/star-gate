import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import { h, w } from './../constants/constants'

const ImageCard = ({ data }) => {
    console.log(data)
    const { cover, text, container } = s
    const { image, name } = data;
    return (
        <View style={container}>
            <Image style={cover} source={{ uri: image }} />
            <Text style={text}>{name.toUpperCase()}</Text>
        </View>
    );
};

const s = StyleSheet.create({
    text: {
        fontFamily: '',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: w / 2.4,
        paddingTop: 10
    },
    cover: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10,
    },
    container: {
        width: w / 2.4,
        paddingVertical: 10,
        backgroundColor: 'white'
    }
});

export { ImageCard };
