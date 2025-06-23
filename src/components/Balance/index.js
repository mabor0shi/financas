
import { View,StyleSheet,Text} from "react-native";

export default function Balance({ saldo, gastos }) {

    return(
        <View style={Styles.conteiner}>
            <View style={Styles.iten}>
                <Text style={Styles.titleIten}>saldo</Text>
                <View style={Styles.conteudo}>
                    <Text style={Styles.saldo}>{saldo}</Text>
                </View>
            </View>

            <View style={Styles.iten}>
                <Text style={Styles.titleIten}>Gastos</Text>
                <Text style={Styles.gastos}>{gastos}</Text>
            </View>
        </View>
    );
}
const Styles = StyleSheet.create({
    container: {
        backgroundcolor:'#b340cf',
        flexdirection:'row',
        justifycontent:'space-between',

        paddingstart:18,
        paddingend:18,
        margintop:-24,
        marginstart:14,
        marginend:14,
        borderradius:4,
        paddingtop:22,
        paddingbottom:22,
        zindex:99,//sobrepoem tudo
    },
    titleiten:{
        fontside:20,
        color: '#f38bcf'
    },
    conteudo:{
        flexdirection:'row',
        alignitems:'center',
    },
    saldo: {
        color: 'green',
        fontsize: 22,
    },
}
)