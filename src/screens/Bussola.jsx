import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text} from "react-native";
import * as Location from "expo-location";
import { Magnetometer } from "expo-sensors";
import MapView, { Marker } from "react-native-maps"; // Import MapView and Marker

export default function Mapa1() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Não tem permissão");
        return;
      }

      let info = await Location.getCurrentPositionAsync({});
      console.log(info);
      setLocation(info);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text Text style={styles.infoText}>
            Magnetometro:{"\n"}
            z: {magnetometro?.z || "Loading..."} {"\n"}
            Latitude: {location?.coords?.latitude || "Loading..."}, Longitude:{" "}
            {location?.coords?.longitude || "Loading..."}
          </Text>
        </View>

        <View style={styles.mapcont}>
          {location && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title="My Location"
                description="This is where I am"
              />
            </MapView>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    paddingTop: 100,
    paddingBottom: 100,
  },
  mapcont: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  infoText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  map: {
    width: 200,
    height: 200,
  },
});