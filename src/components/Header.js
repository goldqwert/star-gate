import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { w } from '../constants/constants';

const Header = ({ title, detail, onPress, leftIcon, leftColor }) => {
    const { container, text, leftButtonStyle } = s
    return (
        <View style={container}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name={leftIcon} style={[leftButtonStyle, { paddingLeft: detail ? 10 : 20 }]} color={leftColor} size={40} />
            </TouchableOpacity>
            <Text numberOfLines={1} ellipsizeMode='tail' style={[text, { paddingLeft: leftIcon ? 10 : 0 }]}>{title}</Text>
        </View>
    );
};
const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#30d0fe',
        height: 116,
        paddingLeft: 22,
        paddingTop: 71,
        elevation: 10,
        position: 'relative'
    },
    text: {
        color: '#fff',
        width: w - 70,
        fontSize: 28,
        fontFamily: 'AvenirNext-DemiBold'
    },
    leftButtonStyle: {
        paddingRight: 10
    }
});

export { Header };
