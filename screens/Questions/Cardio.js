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

const {height, width} = Dimensions.get('window');

const Cardio = ({navigation, route}) => {
    const {Fatique, Mental} = route.params;
    const [Q11, setQ11] = React.useState(null);
    const [Q12, setQ12] = React.useState(null);
    const [Q13, setQ13] = React.useState(null);

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

    const _goToNext = () => {
        if (Q11 == null || Q12 == null || Q13 == null) {
            showMessage({
                message: 'Some Questions are unanswered',
                description: 'Answer all questions to move forward.',
                type: 'warning',
                icon: 'warning',
                floating: true,
            });
        }
        else {
            let total = 0;
            total = Q11+Q12+Q13;
            navigation.navigate('Digest',{Fatique,Mental,Cardio:total});
        }
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleStyle}>Questions on Cardiovascular system</Text>
            <ScrollView>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Felt out of breath while sitting still?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ11(0)}
                            point={0}
                            state={Q11}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ11(1)}
                            point={1}
                            state={Q11}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ11(2)}
                            point={2}
                            state={Q11}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ11(3)}
                            point={3}
                            state={Q11}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ11(4)}
                            point={4}
                            state={Q11}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Suffered from chest congestion?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ12(0)}
                            point={0}
                            state={Q12}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ12(1)}
                            point={1}
                            state={Q12}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ12(2)}
                            point={2}
                            state={Q12}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ12(3)}
                            point={3}
                            state={Q12}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ12(4)}
                            point={4}
                            state={Q12}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Were bothered by heart palpitations?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ13(0)}
                            point={0}
                            state={Q13}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ13(1)}
                            point={1}
                            state={Q13}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ13(2)}
                            point={2}
                            state={Q13}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ13(3)}
                            point={3}
                            state={Q13}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ13(4)}
                            point={4}
                            state={Q13}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => _goToNext()}
                    >
                        <Text style={styles.buttonTextStyle}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
});

export default Cardio;
