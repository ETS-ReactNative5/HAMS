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

const Digest = ({navigation, route}) => {
    const {Fatique, Mental, Cardio} = route.params;
    const [Q14, setQ14] = React.useState(null);
    const [Q15, setQ15] = React.useState(null);
    const [Q16, setQ16] = React.useState(null);

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
        if (Q14 == null || Q15 == null || Q16 == null) {
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
            total = Q14+Q15+Q16;
            navigation.navigate('Immune',{Fatique,Mental,Cardio,Digest:total});
        }
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleStyle}>Questions on Digestive tract</Text>
            <ScrollView>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Appetite was poor?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ14(0)}
                            point={0}
                            state={Q14}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ14(1)}
                            point={1}
                            state={Q14}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ14(2)}
                            point={2}
                            state={Q14}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ14(3)}
                            point={3}
                            state={Q14}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ14(4)}
                            point={4}
                            state={Q14}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Suffered from heartburn?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ15(0)}
                            point={0}
                            state={Q15}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ15(1)}
                            point={1}
                            state={Q15}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ15(2)}
                            point={2}
                            state={Q15}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ15(3)}
                            point={3}
                            state={Q15}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ15(4)}
                            point={4}
                            state={Q15}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Suffered from nausea?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ16(0)}
                            point={0}
                            state={Q16}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ16(1)}
                            point={1}
                            state={Q16}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ16(2)}
                            point={2}
                            state={Q16}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ16(3)}
                            point={3}
                            state={Q16}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ16(4)}
                            point={4}
                            state={Q16}
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

export default Digest;
