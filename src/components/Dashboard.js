import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {connect} from 'react-redux';
import LeftSidebar from './Dashboard/LeftSidebar';
import SpeedGauge from './Dashboard/SpeedGauge';
import RightSidebar from './Dashboard/RightSidebar';
import BluetoothSerial from "react-native-bluetooth-serial";

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            avgSpeed: 0,
            tripDistance: 0,
            odoMiles: 0,
            maxSpeed: 30,
            speed: 0,
            batteryLevel: 0,
        };

        BackgroundTimer.setInterval(() => {
            this.getData();
        }, 1000);
    }


    getData() {
        if (this.props.isBluetoothConnected === true) {
            BluetoothSerial.write("status")
                .then((res) => {
                    BluetoothSerial.readFromDevice().then((data) => {
                        data = JSON.parse(data);
                        if (data.status === "OK") {
                            this.setState({
                                avgSpeed: data.avgSpeed,
                                tripDistance: data.tripDistance,
                                odoMiles: data.odoMiles,
                                speed: data.speed,
                                batteryLevel: data.batteryLevel,
                            });
                            // console.log(this.state);
                        }
                    }).catch((err) => console.log(err.message));
                })
                .catch((err) => console.log(err.message));
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sideBar}>
                    <LeftSidebar
                        avgSpeed={this.state.avgSpeed}
                        tripDistance={this.state.tripDistance}
                        odoMiles={this.state.odoMiles}
                    />
                </View>
                <View style={styles.main}>
                    <SpeedGauge maxMph={this.state.maxSpeed} mph={this.state.speed}/>
                </View>
                <View style={styles.sideBar}>
                    <RightSidebar batteryLevel={this.state.batteryLevel}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        width: '60%'
    },
    sideBar: {
        width: '20%'
    }
});

const mapStateToProps = state => {
    return {
        isBluetoothConnected: state.bluetooth.isBluetoothConnected,
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);