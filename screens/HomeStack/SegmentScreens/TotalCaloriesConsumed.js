/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SQlite from 'react-native-sqlite-storage';
import { Card } from 'native-base';
import Colors from '../../../constants/Colors';
import {Button} from '../../../components/Common/Index';

const {width} = Dimensions.get('window');

let db = null; //initalize db variable globally

const TotalCaloriesConsumed = () => {
    const navigation = useNavigation();
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        db = SQlite.openDatabase(
            {
                name: "HAMS1.db",
                createFromLocation: 1
            },
            () => {_onDbOpenSuccess()},
            (err) => {console.log('error when connecting to SQlite DB is : ',err)}
        );
		const unsubscribe = navigation.addListener('focus', () => {
            db = SQlite.openDatabase(
                {
                    name: "HAMS1.db",
                    createFromLocation: 1
                },
                () => {_onDbOpenSuccess()},
                (err) => {console.log('error when connecting to SQlite DB is : ',err)}
            );
		});
		return unsubscribe;
    }, [navigation,data]);
    
    const _onDbOpenSuccess = () => {
        try {
            db.transaction(tx => {
                tx.executeSql('SELECT count(DISTINCT(name)) as count, sum(totalgrams) as totalgrams, sum(totalcalories) as totalcalories FROM MealsConsumed',[],(tx, results) => {
                    let dataLength = results.rows.length;
                    if(dataLength > 0) {
                        let helperArray = [];
                        for (let i = 0; i < results.rows.length; i++) {
                            helperArray.push(results.rows.item(i));
                        }
                        setData(helperArray)
                    }
                })
            })
        } catch (error) {
            console.log('Error is : ',error);
        }
    }
    return(
        <View style={{flex:1, alignItems:'center', backgroundColor: Colors.PRIMARY_BG_COLOR}}>
            <Card style={{flex:1, width: width-20 ,backgroundColor: "#fff", borderRadius:20}}>
                <View style={{flex:3, alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        source={require('../../../assets/images/Plate.png')}
                        style={{height: 150, width: 150}}
                    />
                </View>
                <View style={{flex:1, width: width-20}}>
                    <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Text style={{fontWeight:'300', fontSize:18, color:Colors.ACCENT_COLOR, paddingLeft: 10}}>Total meals</Text>
                        <Text style={{fontWeight:'300', fontSize:18, color:Colors.ACCENT_COLOR, paddingRight: 10}}>Total grams</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Text style={{fontWeight:'300', fontSize:18, color:Colors.ACCENT_COLOR, paddingLeft: 10}}>Consumed</Text>
                        <Text style={{fontWeight:'300', fontSize:18, color:Colors.ACCENT_COLOR, paddingRight: 10}}>Consumed</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Text style={{fontWeight:'bold', fontSize:18, color:Colors.ACCENT_COLOR, paddingLeft: 10}}>{data.length != 0 ? data[0].count : "0"} meals</Text>
                        <Text style={{fontWeight:'bold', fontSize:18, color:Colors.ACCENT_COLOR, paddingRight: 10}}>{data.length != 0 ? data[0].totalgrams : "0"} grams</Text>
                    </View>
                </View>
                <View style={{flex:1, width: width-20, justifyContent:'center', alignItems:'center', paddingBottom:30}}>
                    <Text style={{fontWeight:'300', fontSize:18, color:Colors.ACCENT_COLOR, paddingLeft: 10}}>Total calories Consumed</Text>
                    <Text style={{fontWeight:'bold', fontSize:18, color:Colors.ACCENT_COLOR, paddingRight: 10}}>{data.length != 0 ? parseFloat(Math.round(data[0].totalcalories * 100) / 100).toFixed(3) : "0"} calories</Text>
                </View>
                <View style={{ paddingBottom: 20, paddingHorizontal: 20 }}>
                    <Button 
                        children = 'Add more...'
                        onPress = {()=>{navigation.navigate('Calculator')}}
                        BGcolor={Colors.PRIMARY_COLOR}
                        borderColor={Colors.PRIMARY_COLOR}
                        iconName="add-circle-outline"
                    />
                </View>
            </Card>
        </View>
    )
}
    
export default TotalCaloriesConsumed;
