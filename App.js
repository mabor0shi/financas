import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/pages/Home';
import Balance from './src/components/Balance';
import Actions from './src/components/Actions';

    export default function App() {
    return (
        <View id="app-wrapper" style={Styles.header}>
            <Home />
        </View>
        
    );
}
const Styles=StyleSheet.create({
    header:{
        width:'100%'
    }
})
