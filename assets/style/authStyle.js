// import COLORS from "../../constants/color.JS";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        headerBox:{
        marginTop: 372,
        },
     header:{
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 64,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '92%', // 58.88px
        letterSpacing: 1.28,
     },
        authBox:{
            backgroundColor: 'white',
            height: 299,
            paddingTop: 40,
            paddingBottom: 16,
            flexDirection: 'column',
            alignItems: 'center',
            gap: 32,
            flexShrink: 0,
            alignSelf: 'stretch',
            borderRadius: 40,
        },
        button:{
            backgroundColor: '#4CAF50',
            width: 343,
            height: 56,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3,
        }
});

export default styles;
