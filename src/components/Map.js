import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MapView, {AnimatedRegion, Marker} from "react-native-maps";
import haversine from "haversine";
import {connect} from 'react-redux';

const LATITUDE = 51.509865;
const LONGITUDE = -0.118092;
const LATITUDE_DELTA = 0.009; // 0.0043
const LONGITUDE_DELTA = 0.009; // 0.0034

class Map extends Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         latitude: LATITUDE,
    //         longitude: LONGITUDE,
    //         routeCoordinates: [],
    //         distanceTravelled: 0,
    //         prevLatLng: {},
    //         coordinate: new AnimatedRegion({
    //             latitude: LATITUDE,
    //             longitude: LONGITUDE
    //         })
    //     };
    // }

    // componentDidMount() {
    //     this.watchID = navigator.geolocation.watchPosition(
    //         position => {
    //             const {latitude, longitude} = position.coords;
    //             const newCoordinate = {
    //                 latitude,
    //                 longitude
    //             };
    //
    //             if (Platform.OS === "android") {
    //                 if (this.marker) {
    //                     this.marker._component.animateMarkerToCoordinate(
    //                         newCoordinate,
    //                         500
    //                     );
    //                 }
    //             } else {
    //                 coordinate.timing(newCoordinate).start();
    //             }
    //
    //         },
    //         error => console.log(error),
    //         {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    //     );
    // }

    getMapRegion = () => ({
        latitude: this.props.currentLocation.coords.latitude || LATITUDE,
        longitude: this.props.currentLocation.coords.longitude || LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    getPolyline() {
        if (this.props.routeCoordinates.length > 1) {
            return (
                <MapView.Polyline coordinates={this.props.routeCoordinates} strokeWidth={5}/>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    showUserLocation
                    followUserLocation
                    loadingEnabled
                    region={this.getMapRegion()}
                >
                    {this.getPolyline()}
                    {/*<Marker.Animated*/}
                        {/*ref={marker => {this.marker = marker}}*/}
                        {/*coordinate={this.props.currentLocation.coords}*/}
                    {/*/>*/}
                </MapView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.bubble, styles.button]}>
                        <Text style={styles.bottomBarContent}>
                            {parseFloat(this.props.tripDistance).toFixed(2)} Miles
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
        height: "90%"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    bubble: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,0.7)",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20
    },
    latlng: {
        width: 200,
        alignItems: "stretch"
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: "center",
        marginHorizontal: 10
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 20,
        backgroundColor: "transparent"
    },
    bottomBarContent: {}
});

const mapStateToProps = state => {
    const {currentLocation, routeCoordinates, tripDistance} = state.location;
    return {currentLocation, routeCoordinates, tripDistance}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);