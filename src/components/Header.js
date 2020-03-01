import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const Header = ({ title }) => {
    const { container, text } = s
    return (
        <View style={container}>
            <Text style={text}>{title}</Text>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        backgroundColor: '#30d0fe',
        height: 116,
        justifyContent: 'center',
        paddingLeft: 22,
        paddingTop: 71,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        elevation: 2,
        position: 'relative'
    },
    text: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'AvenirNext-DemiBold'
    }
});

export { Header };
