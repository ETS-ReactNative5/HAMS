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
import {setBmrDetails} from '../../redux/actions/profileAction';
import Colors from '../../constants/Colors';

const {height, width} = Dimensions.get('window');

const BmrCalculator = ({navigation}) => {
    const [isMale, setIsMale] = React.useState(null);
    const [initalWeight, setInitalWeight] = React.useState(null);
    const [newWeight, setNewWeight] = React.useState(null);
    const [BMR, setBMR] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);

    const refinitalWeight = React.useRef(null);
    const refnewWeight = React.useRef(null);

    const gen = useSelector(state => state.profileReducer.isMale);

    const dispatch = useDispatch();
    const calcBMR = (gender, kcal) => {
        dispatch(setBmrDetails(gender, kcal));
    };

    React.useEffect(()=>{
        setIsMale(gen);
    },[gen]);

    const calculateBMR = () => {
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
            else if (initalWeight === null || initalWeight === '') {
                refinitalWeight.current._root.focus();
                showMessage({
                    message: 'Inital Weight not filled',
                    description: 'Inital Weight can not be empty',
                    type: 'warning',
                    icon: 'warning',
                    floating: true,
                });
            }
            else if (newWeight === null || newWeight === '') {
                refnewWeight.current._root.focus();
                showMessage({
                    message: 'New weight not filled',
                    description: 'New Weight can not be empty',
                    type: 'warning',
                    icon: 'warning',
                    floating: true,
                });
            }
            else if (isNaN(initalWeight) || initalWeight < 5) {
                refinitalWeight.current._root.focus();
                showMessage({
                    message: 'Inital Weight has to be a positive number',
                    description: 'Enter valid input',
                    type: 'warning',
                    icon: 'warning',
                    floating: true,
                });
            }
            else if (isNaN(newWeight) || newWeight < 5) {
                refnewWeight.current._root.focus();
                showMessage({
                    message: 'New Weight has to be a positive number',
                    description: 'Enter valid input',
                    type: 'warning',
                    icon: 'warning',
                    floating: true,
                });
            }
            else if (isMale) {
                let changeWeight = 0;
                let kcal = 0;
                changeWeight = parseFloat(newWeight) - parseFloat(initalWeight); //delta weight
                kcal = 13.792 * (parseFloat(initalWeight) + parseFloat(changeWeight)) + 660.84;
                setBMR(parseFloat((kcal * 100) / 100).toFixed(5));
                setShowModal(true);
                calcBMR(isMale,kcal);
            }
            else if (!isMale) {
                let changeWeight = 0;
                let kcal = 0;
                changeWeight = parseFloat(newWeight) - parseFloat(initalWeight); //delta weight
                kcal = 11.679 * (parseFloat(initalWeight) + parseFloat(changeWeight)) + 43.682;
                setBMR(parseFloat((kcal * 100) / 100).toFixed(5));
                setShowModal(true);
                calcBMR(isMale,kcal);
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
		if(showModal) {
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
                                        source={require('../../assets/animations/heartBeat.json')} 
                                        autoPlay
                                        loop = {false}
                                        style = {{height:100}}
                                    />
                                </View>
								<Text style={styles.modalTextStyle}>Change in BMR</Text>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>BMR (kcal) : </Text>
                                    <Text style={styles.modalTextValueStyle}>{BMR}</Text>
                                </View>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>Gender : </Text>
                                    <Text style={styles.modalTextValueStyle}>{isMale === true ? 'Male' : 'Female'}</Text>
                                </View>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>Initial Weight (Kg) : </Text>
                                    <Text style={styles.modalTextValueStyle}>{initalWeight}</Text>
                                </View>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>New Weight (Kg) : </Text>
                                    <Text style={styles.modalTextValueStyle}>{newWeight}</Text>
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
                        BMR Calculator (kcal)
                    </Text>
                    <Text style={styles.subHeadingTextStyle}>
                        To calculate your change in BMR:
                    </Text>
                    <Text style={styles.subHeadingText2Style}>
                        {'\n'}* please enter your gender.
                        {'\n'}* Inital weight.
                        {'\n'}* Weight when calculating Change in BMR.
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
                        <Text style={styles.labelStyle}>Initial Weight (Kg)</Text>
                        <Item regular style = {[styles.textBoxStyle]}>
                            <Input
                                ref={refinitalWeight}
                                placeholder= "Enter your inital Weight here"
                                autoCorrect = {false}
                                clearButtonMode = "while-editing"
                                keyboardAppearance = "dark"
                                keyboardType = "number-pad"
                                maxLength = {5}
                                onChangeText = {(input) => setInitalWeight(input)}
                                value = {initalWeight}
                                secureTextEntry={false}
                                textContentType="none"
                            />
                        </Item>
                    </View>
                    <View style= {[styles.labelViewStyle]}>
                        <Text style={styles.labelStyle}>New Weight (Kg)</Text>
                        <Item regular style = {[styles.textBoxStyle]}>
                            <Input
                                ref={refnewWeight}
                                placeholder= "Enter weight when calculating BMR"
                                autoCorrect = {false}
                                clearButtonMode = "while-editing"
                                keyboardAppearance = "dark"
                                keyboardType = "number-pad"
                                maxLength = {5}
                                onChangeText = {(input) => setNewWeight(input)}
                                value = {newWeight}
                                secureTextEntry={false}
                                textContentType="none"
                            />
                        </Item>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => calculateBMR()}
                        >
                            <Text style={styles.buttonTextStyle}>Calculate BMR</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
                {showModal === true ? _showModal() : null}
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default BmrCalculator;

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
});



