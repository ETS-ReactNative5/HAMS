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

const Fatigue = ({navigation}) => {
    const [Q1, setQ1] = React.useState(null);
    const [Q2, setQ2] = React.useState(null);
    const [Q3, setQ3] = React.useState(null);
    const [Q4, setQ4] = React.useState(null);
    const [Q5, setQ5] = React.useState(null);
    const [Q6, setQ6] = React.useState(null);
    const [Q8, setQ8] = React.useState(null);
    const [Q9, setQ9] = React.useState(null);
    const [Q10, setQ10] = React.useState(null);
    

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
        if (Q1 == null || Q2 == null || Q3 == null || Q4 == null || Q5 == null || Q6 == null || Q8 == null || Q9 == null || Q10 == null) {
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
            total = Q1+Q2+Q3+Q4+Q5+Q6+Q8+Q9+Q10;
            navigation.navigate('Mental',{Fatique : total});
        }
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleStyle}>Questions on Fatigue</Text>
            <ScrollView>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Were exhausted without greatly increasing your physical activity?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ1(0)}
                            point={0}
                            state={Q1}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ1(1)}
                            point={1}
                            state={Q1}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ1(2)}
                            point={2}
                            state={Q1}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ1(3)}
                            point={3}
                            state={Q1}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ1(4)}
                            point={4}
                            state={Q1}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Experienced fatigue that could not be substantially alleviated by rest?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ2(0)}
                            point={0}
                            state={Q2}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ2(1)}
                            point={1}
                            state={Q2}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ2(2)}
                            point={2}
                            state={Q2}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ2(3)}
                            point={3}
                            state={Q2}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ2(4)}
                            point={4}
                            state={Q2}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Were lethargic when working?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ3(0)}
                            point={0}
                            state={Q3}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ3(1)}
                            point={1}
                            state={Q3}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ3(2)}
                            point={2}
                            state={Q3}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ3(3)}
                            point={3}
                            state={Q3}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ3(4)}
                            point={4}
                            state={Q3}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Suffered from headaches?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ4(0)}
                            point={0}
                            state={Q4}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ4(1)}
                            point={1}
                            state={Q4}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ4(2)}
                            point={2}
                            state={Q4}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ4(3)}
                            point={3}
                            state={Q4}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ4(4)}
                            point={4}
                            state={Q4}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Suffered from dizziness?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ5(0)}
                            point={0}
                            state={Q5}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ5(1)}
                            point={1}
                            state={Q5}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ5(2)}
                            point={2}
                            state={Q5}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ5(3)}
                            point={3}
                            state={Q5}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ5(4)}
                            point={4}
                            state={Q5}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Eyes ached or were tired?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ6(0)}
                            point={0}
                            state={Q6}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ6(1)}
                            point={1}
                            state={Q6}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ6(2)}
                            point={2}
                            state={Q6}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ6(3)}
                            point={3}
                            state={Q6}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ6(4)}
                            point={4}
                            state={Q6}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Muscles or joints felt stiff?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ8(0)}
                            point={0}
                            state={Q8}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ8(1)}
                            point={1}
                            state={Q8}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ8(2)}
                            point={2}
                            state={Q8}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ8(3)}
                            point={3}
                            state={Q8}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ8(4)}
                            point={4}
                            state={Q8}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Have pain in your shoulder/neck/waist?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ9(0)}
                            point={0}
                            state={Q9}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ9(1)}
                            point={1}
                            state={Q9}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ9(2)}
                            point={2}
                            state={Q9}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ9(3)}
                            point={3}
                            state={Q9}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ9(4)}
                            point={4}
                            state={Q9}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Have a heavy feeling in your legs when walking?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ10(0)}
                            point={0}
                            state={Q10}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ10(1)}
                            point={1}
                            state={Q10}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ10(2)}
                            point={2}
                            state={Q10}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ10(3)}
                            point={3}
                            state={Q10}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ10(4)}
                            point={4}
                            state={Q10}
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

export default Fatigue;
