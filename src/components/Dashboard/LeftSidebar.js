import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Vibration} from 'react-native';
import Svg, {Path} from 'react-native-svg';

class LeftSidebar extends Component {

    onAvgSpeedPress = () => {
        // this.setState({
        //     avgSpeed: this.state.avgSpeed + 1
        // });
    };

    onAvgSpeedLongPress = () => {
        // this.setState({avgSpeed: 0});
        Vibration.vibrate(50);
    };


    onTripDistancePress = () => {
        // this.setState({
        //     tripDistance: this.state.tripDistance + 1
        // });
    };

    render() {
        const {avgSpeed,tripDistance,odoMiles} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onAvgSpeedPress} onLongPress={this.onAvgSpeedLongPress} style={[styles.box, styles.borderBottom]}>
                    <View>
                        <Svg style={styles.icon} width={icon.width} height={icon.height} viewBox={icon.viewBox}>
                            <Path
                                d="m6,12.5c-3.314,0-6,2.687-6,6s2.686,6 6,6c3.313,0 6-2.687 6-6s-2.687-6-6-6zm0,10c-2.209,0-4-1.791-4-4s1.791-4 4-4 4,1.791 4,4-1.791,4-4,4zm18-10c-0.626,0-1.218,0.123-1.785,0.301l-2.693-5.301h2.478v1c0,0.553 0.447,1 1,1 0.553,0 1-0.447 1-1v-2c0-0.553-0.447-1-1-1h-4.943c-0.033,0-0.06,0.016-0.091,0.019-0.169-0.006-0.339,0.019-0.495,0.113-0.45,0.272-0.604,0.871-0.345,1.341l1.593,3.137-3.681,6.378-4.522-8.988h0.484c0.553,0 1-0.447 1-1 0-0.553-0.447-1-1-1h-4c-0.553,0-1,0.447-1,1 0,0.553 0.447,1 1,1h1.392l5.627,11.182c0.04,0.272 0.186,0.522 0.446,0.666 0.035,0.019 0.074,0.019 0.111,0.034 0.275,0.149 0.608,0.169 0.897-0.005 0.226-0.136 0.376-0.354 0.439-0.599l3.835-6.645 .763,1.502c-1.514,1.091-2.51,2.857-2.51,4.865 0,3.313 2.686,6 6,6 3.313,0 6-2.687 6-6s-2.687-6-6-6zm0,10c-2.209,0-4-1.791-4-4 0-1.227 0.565-2.312 1.434-3.045l1.81,3.564c0.26,0.469 0.835,0.63 1.285,0.358 0.45-0.271 0.604-0.87 0.345-1.34l-1.745-3.435c0.281-0.063 0.571-0.102 0.871-0.102 2.209,0 4,1.791 4,4s-1.791,4-4,4z"
                                fill="#FFFFFF"/>
                        </Svg>
                        <Text style={styles.value}>{avgSpeed.toFixed(2)}</Text>
                        <Text style={styles.label}>AVG Speed</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onTripDistancePress} style={[styles.box, styles.borderBottom]}>
                    <View>
                        <Svg style={styles.icon} width={icon.width} height={icon.height} viewBox={icon.viewBox}>
                            <Path
                                d="m25.299,8.779c0.977-0.977 0.977-2.559 0-3.535-0.976-0.977-2.559-0.977-3.535,0-0.977,0.977-0.977,2.559 0,3.535 0.976,0.977 2.559,0.977 3.535,0zm-5.768,6.701h3.502c0.383,0.218 0.872,0.182 1.199-0.142l3.539-3.505c0.042-0.042 0.061-0.095 0.094-0.141 0.084-0.075 0.179-0.13 0.26-0.21 2.541-2.517 2.541-6.598 0-9.114-2.541-2.517-6.661-2.517-9.202,0s-2.541,6.598 0,9.114c0.081,0.08 0.176,0.135 0.26,0.21 0.033,0.046 0.052,0.099 0.094,0.141l1.695,1.679h-1.504v0.037c-2.456,0.035-4.438,2.03-4.438,4.494 0,2.485 2.015,4.438 4.5,4.438h4c1.381,0 2.5,1.15 2.5,2.531s-1.119,2.5-2.5,2.5h-14.537l1.761-1.744c0.042-0.042 0.061-0.094 0.094-0.141 0.084-0.075 0.179-0.13 0.26-0.21 2.541-2.517 2.541-6.598 0-9.114-2.541-2.517-6.661-2.517-9.202,0-2.541,2.517-2.541,6.598 0,9.114 0.081,0.08 0.176,0.135 0.26,0.21 0.033,0.047 0.052,0.099 0.094,0.141l3.539,3.505c0.265,0.263 0.638,0.332 0.975,0.239h16.82v-0.006c2.456-0.035 4.438-2.03 4.438-4.494 0-2.448-1.957-4.43-4.391-4.489v-0.011l-4.234,.019c-1.321-0.067-2.375-1.15-2.375-2.487-0.001-1.382 1.118-2.564 2.499-2.564zm.818-5.39l.001-.001c-0.003-0.004-0.007-0.006-0.011-0.009-1.759-1.742-1.759-4.567 0-6.31 1.759-1.742 4.611-1.742 6.371,0 1.759,1.742 1.759,4.567 0,6.31-0.011,0.011-0.024,0.017-0.036,0.028l.003,.004-3.153,3.122-3.175-3.144zm-13.842,17.08l-3.175-3.146v-0.001c-0.003-0.003-0.007-0.006-0.011-0.009-1.759-1.742-1.759-4.567 0-6.31 1.759-1.742 4.611-1.742 6.371,0 1.759,1.742 1.759,4.567 0,6.31-0.011,0.011-0.024,0.018-0.036,0.029l.003,.003-3.152,3.124zm-1.743-7.926c-0.977,0.977-0.977,2.559 0,3.535 0.976,0.977 2.559,0.977 3.535,0 0.977-0.977 0.977-2.559 0-3.535-0.976-0.976-2.559-0.976-3.535,0z"
                                fill="#FFFFFF"/>
                        </Svg>
                        <Text style={styles.value}>{tripDistance.toFixed(2)}</Text>
                        <Text style={styles.label}>Trip Distance</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.box}>
                    <Svg style={styles.icon} width={icon.width} height={icon.height} viewBox={icon.viewBox}>
                        <Path
                            d="m21.764,11.748c-0.977,0.977-0.977,2.559 0,3.535 0.977,0.977 2.559,0.977 3.535,0 0.977-0.977 0.977-2.559 0-3.535-0.976-0.976-2.558-0.976-3.535,0zm6.363-2.828c-1.023-1.025-2.308-1.615-3.639-1.812l-6.665-6.713c-0.026-0.033-0.038-0.073-0.069-0.104-0.199-0.198-0.461-0.292-0.723-0.288-0.262-0.004-0.523,0.09-0.723,0.29-0.023,0.023-0.029,0.054-0.049,0.079l-7.251,7.258-7.27-7.321-.015-.016c-0.391-0.391-1.023-0.391-1.414,0-0.217,0.216-0.301,0.506-0.277,0.788v19.837c-0.023,0.283 0.06,0.572 0.277,0.789l8.002,8.06c0.391,0.391 1.023,0.391 1.414,0 0.025-0.026 0.033-0.061 0.056-0.089l7.243-7.25 7.287,7.339c0.391,0.391 1.023,0.391 1.414,0 0.104-0.104 0.176-0.227 0.225-0.356 0.052-0.121 0.082-0.254 0.082-0.395v-8.808l1.742-1.742 .354-.354c2.538-2.539 2.538-6.654-0.001-9.192zm-20.095,17.727l-6-6.043v-17.162l6,6.043v17.162zm8-6.047l-6,6.006v-17.179l6-6.006v17.179zm2-10.526v-6.632l3.801,3.828c-1.059,0.286-2.066,0.817-2.896,1.649-0.368,0.368-0.671,0.774-0.929,1.2 0.009-0.014 0.014-0.03 0.024-0.045zm6,12.065v4.508l-6-6.043v-3.646c-0.009-0.015-0.015-0.031-0.024-0.046 0.257,0.426 0.56,0.833 0.929,1.2l.354,.354 3.535,3.535c0.391,0.391 1.023,0.391 1.414,0-0.062,0.062-0.137,0.096-0.208,0.138zm2.681-5.442c-0.008,0.008-0.017,0.013-0.023,0.021l.002,.002-3.16,3.16-3.204-3.204 .003-.003c-1.735-1.759-1.73-4.59 0.02-6.339 1.757-1.758 4.606-1.758 6.363,0 1.757,1.757 1.757,4.606-0.001,6.363z"
                            fill="#FFFFFF"/>
                    </Svg>
                    <Text style={styles.value}>{odoMiles.toFixed(2)}</Text>
                    <Text style={styles.label}>ODO Miles</Text>
                </View>
            </View>
        );
    }
}

const icon = {
    width: 100,
    height: 30,
    viewBox: "0 0 30 30"
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%'
    },
    box: {
        height: '33%',
        borderRightWidth: 1,
        borderRightColor: '#777777',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#777777'
    },
    value: {
        fontSize: 27,
        color: 'red',
        textAlign: 'center'
    },
    label: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    }
});

export default LeftSidebar;