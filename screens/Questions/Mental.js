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

const Mental = ({navigation, route}) => {
    const {Fatique} = route.params;
    const [Q18, setQ18] = React.useState(null);
    const [Q19, setQ19] = React.useState(null);
    const [Q20, setQ20] = React.useState(null);
    const [Q21, setQ21] = React.useState(null);
    const [Q22, setQ22] = React.useState(null);
    const [Q23, setQ23] = React.useState(null);
    const [Q24, setQ24] = React.useState(null);
    
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
        if (Q18 == null || Q19 == null || Q20 == null || Q21 == null || Q22 == null || Q23 == null || Q24 == null) {
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
            total = Q18+Q19+Q20+Q21+Q22+Q23+Q24;
            navigation.navigate('Cardio',{Fatique: Fatique, Mental: total});
        }
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleStyle}>Questions on Mental Status</Text>
            <ScrollView>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Had difficulty falling asleep?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ18(0)}
                            point={0}
                            state={Q18}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ18(1)}
                            point={1}
                            state={Q18}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ18(2)}
                            point={2}
                            state={Q18}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ18(3)}
                            point={3}
                            state={Q18}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ18(4)}
                            point={4}
                            state={Q18}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Had trouble with waking up during night? i.e., kept waking up at night</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ19(0)}
                            point={0}
                            state={Q19}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ19(1)}
                            point={1}
                            state={Q19}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ19(2)}
                            point={2}
                            state={Q19}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ19(3)}
                            point={3}
                            state={Q19}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ19(4)}
                            point={4}
                            state={Q19}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Had trouble with your short-term memory?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ20(0)}
                            point={0}
                            state={Q20}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ20(1)}
                            point={1}
                            state={Q20}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ20(2)}
                            point={2}
                            state={Q20}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ20(3)}
                            point={3}
                            state={Q20}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ20(4)}
                            point={4}
                            state={Q20}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Could not respond quickly?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ21(0)}
                            point={0}
                            state={Q21}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ21(1)}
                            point={1}
                            state={Q21}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ21(2)}
                            point={2}
                            state={Q21}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ21(3)}
                            point={3}
                            state={Q21}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ21(4)}
                            point={4}
                            state={Q21}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Had difficulty concentrating?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ22(0)}
                            point={0}
                            state={Q22}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ22(1)}
                            point={1}
                            state={Q22}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ22(2)}
                            point={2}
                            state={Q22}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ22(3)}
                            point={3}
                            state={Q22}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ22(4)}
                            point={4}
                            state={Q22}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Were distracted for no reason?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ23(0)}
                            point={0}
                            state={Q23}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ23(1)}
                            point={1}
                            state={Q23}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ23(2)}
                            point={2}
                            state={Q23}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ23(3)}
                            point={3}
                            state={Q23}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ23(4)}
                            point={4}
                            state={Q23}
                            pointDescription="Always"
                        />
                    </View>
                </Card>
                <Card style= {[styles.labelViewStyle]}>
                    <Text style={styles.labelStyle}>Felt nervous or jittery?</Text>
                    <View style={{flex: 1,flexDirection: 'row', flexWrap:'wrap'}}>
                        <OptionButton
                            onPress={()=>setQ24(0)}
                            point={0}
                            state={Q24}
                            pointDescription="never or almost never"
                        />
                        <OptionButton
                            onPress={()=>setQ24(1)}
                            point={1}
                            state={Q24}
                            pointDescription="Occasionally"
                        />
                        <OptionButton
                            onPress={()=>setQ24(2)}
                            point={2}
                            state={Q24}
                            pointDescription="Often"
                        />
                        <OptionButton
                            onPress={()=>setQ24(3)}
                            point={3}
                            state={Q24}
                            pointDescription="Very often"
                        />
                        <OptionButton
                            onPress={()=>setQ24(4)}
                            point={4}
                            state={Q24}
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

export default Mental;
