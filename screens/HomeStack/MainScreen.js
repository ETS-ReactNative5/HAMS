/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import {Card} from 'native-base';
import {useDispatch} from 'react-redux';
import LottieView from 'lottie-react-native';
import {clearNewBMR} from '../../redux/actions/profileAction';
import Colors from '../../constants/Colors';

const {height, width} = Dimensions.get('window');

const MainScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const clearFoodListBMR = () => {
        dispatch(clearNewBMR());
    };

    const _goToWeightCalc = () => {
        clearFoodListBMR();
        navigation.navigate('WeightCalculator');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Card style={{flex: 1, borderRadius: 20}}>
                <Text style={styles.titleTextStyle}>
                    HAMS Calculator Options
                </Text>
                <Text style={styles.subHeadingTextStyle}>
                    Hello, You can use this calculator to easily measure your
                    wight and BMR.
                </Text>
                <View style={styles.lottieViewStyle}>
                    <LottieView
                        speed={0.5}
                        source={require('../../assets/animations/fitnessloader.json')}
                        autoPlay
                        loop={true}
                        style={styles.lottieStyle}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('BmrCalculator')}
                >
                    <Text style={styles.buttonTextStyle}>Calculate BMR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonStyle, {marginVertical: 20}]}
                    onPress={() => _goToWeightCalc()}
                >
                    <Text style={styles.buttonTextStyle}>
                        Calculate Change in Weight
                    </Text>
                </TouchableOpacity>
            </Card>
        </SafeAreaView>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_BG_COLOR,
        padding: 10,
    },
    titleTextStyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.PRIMARY_COLOR,
    },
    subHeadingTextStyle: {
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: '500',
        color: Colors.ACCENT_COLOR,
    },
    lottieViewStyle: {
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 10,
        width: width - 50,
        alignItems: 'center',
    },
    lottieStyle: {
        height: height * 0.3,
        alignContent: 'center',
    },
    buttonStyle: {
        backgroundColor: Colors.HINT_COLOR,
        width: width - 50,
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextStyle: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.PRIMARY_BG_COLOR,
    },
});
