import { View, Text } from "react-native";
import MapScreenStyle from "../styles/Map/Map.style";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import getLibraryLocation from "../apis/books/getLibraryLocation";

const MapScreen = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [libraries, setLibraries] = useState(null);
    const [loading, setLoading] = useState(true);

    /**  사용자의 현재 위치를 가져옴
     * @author Yun Jisang
    */
    useEffect(() => {
        const getUserLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status != "granted") {
                setErrorMsg("Permission to access location was denied")
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }

        const getLocationLibraries = async () => {
            const libraries = await getLibraryLocation();
            setLibraries(libraries);
        }

        getUserLocation();
        getLocationLibraries();
        setLoading(false);
    }, [])


    return <>
        {loading && <Text>Loading...</Text>}
        {errorMsg && <Text>{errorMsg}</Text>}
        {
            location && <View style={MapScreenStyle.container}>
                <MapView style={MapScreenStyle.map} initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00321,
                }} >
                    <Marker coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }} pinColor="#3B63DF" title="내 위치" description="현재 내가 있는 위치예요" />
                    {
                        libraries && libraries.map((value, idx) => {
                            return <Marker
                                key={idx}
                                coordinate={{
                                    latitude: parseFloat(value.latitude),
                                    longitude: parseFloat(value.longitude),
                                }} pinColor="#F74345" title={value.name} description={value.desc} />
                        })
                    }
                </MapView>
            </View>
        }
    </>
}

export default MapScreen;