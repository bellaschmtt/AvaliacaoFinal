import { StyleSheet, View, Text } from "react-native";
import { Magnetometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { Title } from "react-native-paper";
// import { Title } from "react-native-paper";
// oio
// socorro
const styles = StyleSheet.create({
    // fazer o style aqui depois
    container: {
        flex: 1,
        justifyContent: "center",
        top: -90,

    },
    content: {
        fontSize: 20,
        padding: 129,
    },
});
export default function Bussola() {

    const [magnetometro, setMagneto] = useState({});


    useEffect(() => {
        Magnetometer.addListener(magnetometroListener);

        return () => {
            Magnetometer.removeAllListeners();
        }
    }, [])

    const magnetometroListener = (data) => {
        setMagneto(data);
    }

    return (
        <View style={styles.container}>
            {/* <View style={{ backgroundColor: "green" }}>
               
            </View> */}

            <View style={styles.content}>
                <Text style={styles.sensor}>
                    <Title>Magnetômetro</Title>
                    {'\n'}
                    X: {magnetometro.x}
                    {'\n'}
                    Y: {magnetometro.y}
                    {'\n'}
                    Z: {magnetometro.z}
                    {'\n'}
                    {'\n'}
                </Text>
            </View>
        </View>
    );
}