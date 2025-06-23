import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Actions from "../../components/Actions";


export default function App() {
        return (
                <View>
                        <Header />
                        <Balance saldo={'r$ 1200,00'} gasto={'r$ 200,00'} />

                        <Actions />
                </View>

        );
}