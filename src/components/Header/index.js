import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const alturadaBarra = StatusBar.currentHeight
    ? StatusBar.currentHeight + 22
    : 64;


export default function Header() {

    return (
        <View style={Styles.container}>
            
            <View style={Styles.conteudo}>
                <Text style={Styles.nome}>cris</Text>
                <TouchableOpacity style={Styles.botao}>
                    <Feather name='user' size={27} color='#' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',//cor de fundo
        textdirection: 'row',//alinhar na mesma linha
        paddingTop: alturadaBarra,
        paddingEnd: 16,//argem embaixo
        paddingStart: 16,//margem em cima
        paddingBottom: 44,

    },

    conteudo: {
        flex: 1, //ocupa toda a caixa
        alignItems: 'center',//alinha ao centro
        flexDirection: 'row',//alinhar na mesma linha
        justifyContent:'space-between',//dar espaço
    },
    nome: {
        fontSize: 18,//tamnho da fonte
        color: 'black',
        fontWeight: 'bold',
    },
    botao: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,8.5)',
        alignItems: 'center',
        borderRadius: '50%',
    },

    
    },



)
