import { View, StyleSheet, Text, Button } from 'react-native';
// import Header from '../components/Header';
// não precisa importar aqui as páginas

export const styles = StyleSheet.create({
    container: {
        // backgroundColor: "purple",
        //   flex: 1 ,
        justifyContent: "center",
        //   alignItems: "center",
        padding: 10,
        top: 10,


    },
    content: {
        fontSize: 16,

    }

});


export default function Home({ navigation }) {

    return (
        <View style={styles.container}>

            {/* <View style={{ backgroundColor: "green" }}> 
                <Header title="Orientação"/>
            </View> */}

            <Text style={styles.content}>
                Bem-vindo! :)
            </Text>
            <View style={{ marginTop: 10 }} />
            <Button
                mode="contained"
                onPress={() => navigation.navigate('bussola')}
                title="Ir para Bussola"
            />
            <View style={{ marginTop: 10 }} />
            <Text style={styles.content}>
                Desenvolvido por Isabella Schmitz & Maria Isadora
            </Text>
            

        </View>
    )
}