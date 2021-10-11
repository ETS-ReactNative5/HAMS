/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import {Card,Item,Input} from 'native-base';
import { showMessage } from 'react-native-flash-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from "react-native-modal"
import {useDispatch, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {setChangeInWeightDetails} from '../../redux/actions/profileAction';
import Colors from '../../constants/Colors';

const {height, width} = Dimensions.get('window');

const WeightCalculator = ({navigation}) => {
    const [isMale, setIsMale] = React.useState(null);
    const [initalBMR, setInitalBMR] = React.useState(null);
    const [newBMR, setNewBMR] = React.useState(null);
    const [weight, setWeight] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);

    const gen = useSelector(state => state.profileReducer.isMale);
    const e1 = useSelector(state => state.profileReducer.newBMR);

    React.useEffect(()=>{
        setIsMale(gen);
        setNewBMR(e1 === null ? e1 : e1.toString());
    },[gen, e1]);

    const refinitalBMR = React.useRef(null);
    const refnewBMR = React.useRef(null);

    const dispatch = useDispatch();
    const changeWeight = (gender, ChangeInWeight) => {
        dispatch(setChangeInWeightDetails(gender, ChangeInWeight));
    };

    const calculateWeight = () => {
        try {
            if (isMale === null) {
                showMessage({
                    message: 'No gender selected',
                    description: 'Select gender to continue',
                    type: 'warning',
                    icon: 'warning',
                    floating: true,
                });
            }
            else if (initalBMR === null || initalBMR === '') {
                refinitalBMR.current._root.focus();
                showMessage({
                    message: 'Inital BMR not filled',
                    description: 'Inital BMR can not be empty',
                    type: 'warning',
                    icon: 'warning',
                    floating: true,
                });
            }
            else if (newBMR === null || newBMR === '') {
                refnewBMR.current._root.focus();
                showMessage({
                    message: 'New BMR not filled',
                    description: 'New BMR can not be empty',
                    type: 'warning',
                    icon: 'warning',
                    floating: true,
                });
            }
            else if (isNaN(initalBMR) || initalBMR < 0 || initalBMR > 10000) {
                refinitalBMR.current._root.focus();
                showMessage({
                    message: 'Inital BMR has to be a positive number',
                    description: 'Enter valid input',
                    type: 'warning',
                    icon: 'warning',
                    floating: true,
                });
            }
            else if (isNaN(newBMR) || newBMR < 0 || newBMR > 10000) {
                refnewBMR.current._root.focus();
                showMessage({
                    message: 'New BMR has to be a positive number',
                    description: 'Enter valid input',
                    type: 'warning',
                    icon: 'warning',
                    floating: true,
                });
            }
            else if (isMale) {
                let grams = 0;
                grams = 0.0827 * (parseFloat(newBMR) - parseFloat(initalBMR)) + 20.714;
                setWeight(parseFloat((grams * 100) / 100).toFixed(5));
                setShowModal(true);
                changeWeight(isMale, grams);
            }
            else if (!isMale) {
                let grams = 0;
                grams = 0.0659 * (parseFloat(newBMR) - parseFloat(initalBMR)) + 45.555;
                setWeight(parseFloat((grams * 100) / 100).toFixed(5));
                setShowModal(true);
                changeWeight(isMale, grams);
            }
            else {
                showMessage({
                    message: 'Something does not seem right',
                    description: 'Check if you have entered everything correctly',
                    type: 'info',
                    icon: 'info',
                    floating: true,
                });
            }
        } catch (error) {
            showMessage({
                message: 'Something went wrong',
                description: 'Please contact administrator if issue persists',
                type: 'info',
                icon: 'info',
                floating: true,
            });
        }
    };

    const _showModal = () => {
		if (showModal) {
			return (
				<Modal style = {{flex: 1,}}
					isVisible= {showModal}
					animationIn = "slideInUp"
					animationOut = "slideOutDown"
					animationOutTiming = {10000}
					useNativeDriver
					coverScreen
					onBackButtonPress= {() => setShowModal(false)}
					onBackdropPress= {() => setShowModal(false)}
					hasBackdrop
					backdropColor = {Colors.ACCENT_COLOR}
					backdropOpacity = {0.98}
					style = {styles.modalContainer}
				>
					<View style={styles.modalView}>
						<Card style ={styles.modalCardStyle}>
							<ScrollView
								bounces={true}
							>
                                <View style={{flex:1,alignItems: 'center'}}>
                                    <LottieView
                                        source={require('../../assets/animations/scale.json')}
                                        autoPlay
                                        loop = {false}
                                        style = {{height:100}}
                                    />
                                </View>
								<Text style={styles.modalTextStyle}>Change in Weight</Text>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>Weight (grams) : </Text>
                                    <Text style={styles.modalTextValueStyle}>{weight}</Text>
                                </View>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>Gender : </Text>
                                    <Text style={styles.modalTextValueStyle}>{isMale === true ? 'Male' : 'Female'}</Text>
                                </View>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>Initial BMR (kcal) : </Text>
                                    <Text style={styles.modalTextValueStyle}>{parseFloat((initalBMR * 100) / 100).toFixed(5)}</Text>
                                </View>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>Total Food Energy (kcal) : </Text>
                                    <Text style={styles.modalTextValueStyle}>{parseFloat((newBMR * 100) / 100).toFixed(5)}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={styles.buttonStyle}
                                        onPress={() => setShowModal(false)}
                                    >
                                        <Text style={styles.buttonTextStyle}>Done.</Text>
                                    </TouchableOpacity>
                                </View>
							</ScrollView>
						</Card>
					</View>
				</Modal>
			);
		}
	};

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                scrollEnabled={true}
                bounces={true}
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator= {false}
                keyboardDismissMode="interactive"
                enableOnAndroid = {true}
            >
                <Card style={{flex: 1, borderRadius: 20}}>
                    <Text style={styles.titleTextStyle}>
                        Change in Weight Calculator (Grams)
                    </Text>
                    <Text style={styles.subHeadingTextStyle}>
                        To calculate your change in Weight the following is required:
                    </Text>
                    <Text style={styles.subHeadingText2Style}>
                        {'\n'}* Your gender.
                        {'\n'}* Inital BMR.
                        {'\n'}* BMR when calculating Change in weight.
                    </Text>
                    <Text style={styles.PickerLableStyle}>Gender</Text>
                    <View style={styles.PickerViewStyle}>
                        <TouchableOpacity
                            style={[styles.center, styles.PickerButtonStyle,{backgroundColor: isMale === true ? Colors.PRIMARY_COLOR : Colors.PRIMARY_BG_COLOR, borderColor: isMale === true ? Colors.PRIMARY_COLOR : Colors.ACCENT_COLOR}]}
                            onPress={()=>{setIsMale(true)}}
                        >
                            <Text style={[styles.PickerTextStyle,{color: isMale === true ? Colors.PRIMARY_BG_COLOR : Colors.ACCENT_COLOR}]}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.center, styles.PickerButtonStyle,{backgroundColor: isMale === false ? Colors.PRIMARY_COLOR : Colors.PRIMARY_BG_COLOR, borderColor: isMale === false ? Colors.PRIMARY_COLOR : Colors.ACCENT_COLOR}]}
                            onPress={()=>{setIsMale(false)}}
                        >
                            <Text style={[styles.PickerTextStyle,{ color: isMale === false ? Colors.PRIMARY_BG_COLOR : Colors.ACCENT_COLOR}]}>Female</Text>
                        </TouchableOpacity>
                    </View>
                    <View style= {[styles.labelViewStyle]}>
                        <Text style={styles.labelStyle}>Initial BMR (kcal)</Text>
                        <Item regular style = {[styles.textBoxStyle]}>
                            <Input
                                ref={refinitalBMR}
                                placeholder= "Enter your inital BMR here"
                                autoCorrect = {false}
                                clearButtonMode = "while-editing"
                                keyboardAppearance = "dark"
                                keyboardType = "number-pad"
                                maxLength = {10}
                                onChangeText = {(input) => setInitalBMR(input)}
                                value = {initalBMR}
                                secureTextEntry={false}
                                textContentType="none"
                            />
                        </Item>
                    </View>
                    <View style= {[styles.labelViewStyle]}>
                        <View style={styles.HorizontalViewStyle}>
                            <Text style={styles.textLeftHorizontalStyle}>Total Food Energy (kcal)</Text>
                            <TouchableOpacity
                                onPress={()=>navigation.navigate('MealList')}
                            >
                                <Text style={styles.rightButtonTextStyle}>Choose from list</Text>
                            </TouchableOpacity>
                        </View>
                        <Item regular style = {[styles.textBoxStyle]}>
                            <Input
                                ref={refnewBMR}
                                placeholder= "Enter BMR when calculating weight"
                                autoCorrect = {false}
                                clearButtonMode = "while-editing"
                                keyboardAppearance = "dark"
                                keyboardType = "number-pad"
                                maxLength = {5}
                                onChangeText = {(input) => setNewBMR(input)}
                                value = {newBMR}
                                secureTextEntry={false}
                                textContentType="none"
                            />
                        </Item>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => calculateWeight()}
                        >
                            <Text style={styles.buttonTextStyle}>Calculate Change in Weight</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
                {showModal === true ? _showModal() : null}
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default WeightCalculator;

const styles = StyleSheet.create({
    center:{
        alignSelf: 'center',
        justifyContent: 'center',
    },
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
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.ACCENT_COLOR,
    },
    subHeadingText2Style: {
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: '500',
        color: Colors.ACCENT_COLOR,
        textAlign:'justify',
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
        width: width - 100,
        marginTop: 40,
        marginBottom: 20,
        height: 50,
        alignSelf: 'center',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextStyle: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.PRIMARY_BG_COLOR,
    },
    PickerLableStyle: {
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.ACCENT_COLOR,
        paddingTop: 10,
        alignSelf:'flex-start',
    },
    PickerViewStyle: {
        backgroundColor: Colors.TRANSPARENT,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin: 5,
        height: 50,
        width: width - 50,
    },
    PickerButtonStyle: {
        borderRadius: 20,
        borderWidth:1,
        marginHorizontal: 5,
        height: 50,
        width: width * 0.4,
    },
    PickerTextStyle: {
        alignSelf:'center',
        fontSize:16,
        fontWeight:'600',
    },
    labelViewStyle: {
        flexDirection: 'column',
        width: width - 30,
        marginTop: 10,
        left: 8,
    },
    labelStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.ACCENT_COLOR,
        paddingVertical: 5,
        marginHorizontal:5,
    },
    textBoxStyle : {
		borderColor: Colors.TEXTBOX_BORDER,
		borderWidth: 1,
		borderRadius: 10,
		width : width - 50,
    },
    modalView: {
		width: width - 50,
		alignSelf:'center',
		elevation : 2,
		position : 'relative',
	},
    modalContainer: {
        borderRadius: 20,justifyContent: 'center',
    },
    modalCardStyle:{
        width: width - 50,
        borderRadius: 20,
        borderColor: Colors.PRIMARY_BG_COLOR,
    },
    modalTextStyle: {
        alignSelf:'center',
        fontWeight: 'bold',
        fontSize:16,
        color:Colors.ACCENT_COLOR,
        textDecorationLine:'underline',
        paddingBottom: 10,
    },
    modalHorizontalViewStyle: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        paddingHorizontal: 40,
        paddingVertical: 5,
    },
    modalTextLabelStyle:{
        alignSelf:'flex-start',
        fontWeight: 'bold',
        fontSize:16,
        color:Colors.ACCENT_COLOR,
    },
    modalTextValueStyle:{
        alignSelf:'flex-end',
        fontWeight: 'bold',
        fontSize:16,
        color:Colors.ACCENT_COLOR,
    },
    HorizontalViewStyle: {flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    textLeftHorizontalStyle: {
        alignSelf:'flex-start',
        fontSize:16,
        fontWeight: '600',
        color:Colors.ACCENT_COLOR,
    },
    rightButtonTextStyle: {
        alignSelf:'flex-end',
        fontSize:16,
        fontWeight: 'bold',
        color:'blue',
        paddingHorizontal: 10,
    },
});



