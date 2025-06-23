import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Actions() {

    return (
        <View>
            <ScrollView style={styles.container}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.botaoAcao}>
                    <View style={styles.area}>
                        <AntDesign name='addfolder' size={26} color={'#000'} />
                    </View>

                    <Text style={styles.titleBotao}>estratos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoAcao}>
                    <View style={styles.area}>
                        <AntDesign name='tagso' size={26} color={'#000'} />
                    </View>

                    <Text style={styles.titleBotao}>compras</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoAcao}>
                    <View style={styles.area}>
                        <AntDesign name='creditcard' size={26} color={'#000'} />
                    </View>

                    <Text style={styles.titleBotao}>carteira</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoAcao}>
                    <View style={styles.area}>
                        <AntDesign name='barcode' size={26} color={'#000'} />
                    </View>

                    <Text style={styles.titleBotao}>boleto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoAcao}>
                    <View style={styles.area}>
                        <AntDesign name='setting' size={26} color={'#000'} />
                    </View>

                    <Text style={styles.titleBotao}>conta</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        maxheight: 96,
        marginbottom: 14,
        margintop: 18,
        paddingend: 20,
        paddingstart: 20,
    },
    botaoAcao: {
        alignItems: 'center',
        marginRight: 32,
    },
    area: {
        backgroundColor: 'ecf0f1',
        height: 60 ,
        alignItems: 'center',
        width: 60,
        justifyContent: 'center'
    },
    titleBotao:{
        fontSize:4,
        textAlign:'center',
        fontweigth:'bold',
    },
})