import React from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { h, w } from './../constants/constants'

const ImageBigCard = ({ data }) => {
    const { cover, text, container } = s
    const { image } = data;
    const img = `https${image.medium.slice(4)}`
    return (
        <View style={container}>
            <Image style={cover} source={{ uri: img }} />
        </View>
    );
};

const s = StyleSheet.create({
    cover: {
        width: w / 1.67,
        height: w * 0.9,
        borderRadius: 10,
    },
    container: {
        paddingVertical: 20
    }
});

export { ImageBigCard };
