/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';
import {Card} from 'native-base';
import { showMessage } from 'react-native-flash-message';
import Modal from 'react-native-modal'
import LottieView from 'lottie-react-native';

const {height, width} = Dimensions.get('window');

const Immune = ({navigation, route}) => {
    const {Fatique, Mental, Cardio, Digest} = route.params;
    const [Q7, setQ7] = React.useState(null);
    const [Q17, setQ17] = React.useState(null);
    const [Q25, setQ25] = React.useState(null);
    const [totalPoints, setTotalPoints] = React.useState(0);
    const [immuneVal, setImmuneVal] = React.useState(0);
    const [showModal, setShowModal] = React.useState(false);


    const OptionButton = ({onPress, point, state, pointDescription}) => (
        <TouchableOpacity style = {{minWidth: width *0.2, minHeight: 50, borderRadius: 10, margin: 5, backgroundColor: state ==  point? Colors.PRIMARY_COLOR : Colors.PRIMARY_BG_COLOR, borderWidth:1, borderColor: state ==  point? Colors.TRANSPARENT : Colors.ACCENT_COLOR ,justifyContent:'center', alignItems:'center'}}
            onPress = {onPress}
        >
            <View style={{padding : 10,alignItems:'center'}}>
                <Text style= {{color : state == point ? Colors.PRIMARY_BG_COLOR: Colors.HINT_COLOR, fontWeight:'bold', alignSelf:'center'}}>
                    {pointDescription}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const _completeQuestions = () => {
        if (Q7 == null || Q17 == null || Q25 == null) {
            showMessage({
                message: 'Some Questions are unanswered',
                description: 'Answer all questions to move forward.',
                type: 'warning',
                icon: 'warning',
                floating: true,
            });
        }
        else {
            let Immune = 0;
            let total = 0;
            Immune = Q7+Q17+Q25;
            total = parseInt(Fatique,10) + parseInt(Mental,10) + parseInt(Cardio,10) + parseInt(Digest,10) + parseInt(Immune,10);
            setImmuneVal(Immune);
            setTotalPoints(total);
            setShowModal(true);
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
								<Text style={styles.modalTextStyle}>Questionaire Points</Text>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>Fatique : </Text>
                                    <Text style={styles.modalTextValueStyle}>{Fatique}</Text>
                                </View>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>Cardiovascular system : </Text>
                                    <Text style={styles.modalTextValueStyle}>{Cardio}</Text>
                                </View>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>Digestive tract : </Text>
                                    <Text style={styles.modalTextValueStyle}>{Digest}</Text>
                                </View>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>Immune system : </Text>
                                    <Text style={styles.modalTextValueStyle}>{immuneVal}</Text>
                                </View>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>Mental status : </Text>
                                    <Text style={styles.modalTextValueStyle}>{Mental}</Text>
                                </View>
                                <View style={{borderWidth:1}}/>
                                <View style={styles.modalHorizontalViewStyle}>
                                    <Text style={styles.modalTextLabelStyle}>Total Score : </Text>
                                    <Text style={styles.modalTextValueStyle}>{totalPoints}</Text>
                                </View>
                                <Text style={{fontSize:16, fontWeight:'bold', color:Colors.HINT_COLOR, alignSelf:'center'}}>
                                    {totalPoints > 34 ? 'Kindly contact HAMS Dr' : 'Stay healthy'}
                                </Text>
                                <View>
                                    <TouchableOpacity
                                        style={styles.buttonStyle}
                                        onPress={() => navigation.popToTop()}
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
            <Text style={styles.titleStyle}>Questions on Immune system</Text>
            <ScrollView>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Suffered from a sore throat?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ7(0)}
                            point={0}
                            state={Q7}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ7(1)}
                            point={1}
                            state={Q7}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ7(2)}
                            point={2}
                            state={Q7}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ7(3)}
                            point={3}
                            state={Q7}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ7(4)}
                            point={4}
                            state={Q7}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Could not tolerate cold environments?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ17(0)}
                            point={0}
                            state={Q17}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ17(1)}
                            point={1}
                            state={Q17}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ17(2)}
                            point={2}
                            state={Q17}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ17(3)}
                            point={3}
                            state={Q17}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ17(4)}
                            point={4}
                            state={Q17}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Caught a cold in the past 3 months?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ25(0)}
                            point={0}
                            state={Q25}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ25(1)}
                            point={1}
                            state={Q25}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ25(2)}
                            point={2}
                            state={Q25}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ25(3)}
                            point={3}
                            state={Q25}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ25(4)}
                            point={4}
                            state={Q25}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => _completeQuestions()}
                    >
                        <Text style={styles.buttonTextStyle}>Complete</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {_showModal()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    cardStyles: {
        flex:1,
        borderRadius: 20,
        backgroundColor: Colors.PRIMARY_BG_COLOR,
        width: width - 20,
        alignSelf:'center',
        height: height - 20,
    },
    titleStyle:{
        fontSize:16,
        fontWeight: 'bold',
        color: Colors.PRIMARY_COLOR,
        margin: 10,
    },
    labelViewStyle: {
        maxHeight: height * 0.22,
        maxWidth: width - 20,
        marginTop: 10,
        marginLeft: 5,
        alignSelf:'center',
        borderRadius:15,
    },
    labelStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.ACCENT_COLOR,
        paddingVertical: 5,
        marginHorizontal:5,
    },
    buttonStyle: {
        backgroundColor: Colors.HINT_COLOR,
        width: width - 100,
        marginTop: 20,
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

export default Immune;
