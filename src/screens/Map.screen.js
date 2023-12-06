import { View } from "react-native";
import MapScreenStyle from "../styles/Map/Map.style";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { useEffect, useState } from "react";

const MapScreen = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    /**  사용자의 현재 위치를 가져옴
     * @author Yun Jisang
    */
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status != "granted") {
                setErrorMsg("Permission to access location was denied")
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, [])


    return <>
        {errorMsg && <Text>{errorMsg}</Text>}
        {
            location && <View style={MapScreenStyle.container}>
                <MapView style={MapScreenStyle.map} initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }} />
            </View>
        }
    </>
}

export default MapScreen;