/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, SafeAreaView, Dimensions, Image } from 'react-native';
import { Card, Tabs, Tab, ScrollableTab } from 'native-base';
import SQlite from 'react-native-sqlite-storage';
import Colors from '../../constants/Colors';
import {Button} from '../../components/Common/Index';
//Screens
import CalorieBreakdown from './SegmentScreens/CalorieBreakdown';
import TotalCaloriesConsumed from './SegmentScreens/TotalCaloriesConsumed';
let db = null; //initalize db variable globally

const {height, width} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
    const [hasData, setHasData] = React.useState(false);

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
    }, [navigation]);

    const _onDbOpenSuccess = () => {
        try {
            db.transaction(tx => {
                tx.executeSql('SELECT * FROM MealsConsumed',[],(tx, results) => {
                    let dataLength = results.rows.length;
                    if(0 < dataLength) {
                        setHasData(true)
                    }
                    else setHasData(false);
                })
            })
        } catch (error) {
            console.log('Error is : ',error);
        }
    };

    return (
        <SafeAreaView style={{flex:1, backgroundColor:Colors.PRIMARY_BG_COLOR, justifyContent:'center', alignItems:'center'}}>
            {!hasData ? (
                <Card style={{height:height - height/4, width: width-20 ,backgroundColor: "#fff", borderRadius:20}}>
                    <View style={{flex:4, justifyContent:'flex-start', alignItems:'center'}}>
                        <Text style={{alignSelf:'center', fontSize:28, fontWeight:'bold', color:Colors.ACCENT_COLOR, paddingVertical:20}}>Calorie Intake</Text>
                        <Image
                            source={require('../../assets/images/HomeImage.png')}
                            style={{height:250, width:250}}
                        />
                    </View>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:100}}>
                        <Text style={{alignSelf:'center', fontSize:18, fontWeight:'600', color:Colors.ACCENT_COLOR}}>Let's calculate our calories together</Text>
                    </View>
                    <View style={{flex:2, justifyContent:'center', alignItems:'center', paddingHorizontal: 10}}>
                        <Button
                            children = "Add your meal..."
                            onPress = {()=>{navigation.navigate('Calculator')}}
                            BGcolor={Colors.PRIMARY_COLOR}
                            borderColor={Colors.PRIMARY_COLOR}
                            iconName="search"
                        />
                    </View>
                </Card>
            ) : (
                <Tabs
                    renderTabBar={()=> <ScrollableTab style={{ backgroundColor: '#fff' }} />}
                    tabBarUnderlineStyle= {{ backgroundColor: Colors.PRIMARY_COLOR }}
                >
                    <Tab heading="Calorie breakdown"  tabStyle={{backgroundColor: '#fff'}}  activeTabStyle={{fontWeight: 'bold', backgroundColor: '#fff'}} textStyle={{color: Colors.ACCENT_COLOR}} activeTextStyle={{color: Colors.PRIMARY_COLOR, fontWeight: 'bold'}}>
                        <CalorieBreakdown/>
                    </Tab>
                    <Tab heading="Total calories consumed"  tabStyle={{backgroundColor:'#fff'}}  activeTabStyle={{fontWeight: 'bold', backgroundColor: '#fff'}} textStyle={{color: Colors.ACCENT_COLOR}} activeTextStyle={{color: Colors.PRIMARY_COLOR, fontWeight: 'bold'}}>
                        <TotalCaloriesConsumed/>
                    </Tab>
                </Tabs>
            )}
        </SafeAreaView>
    )
}
    
export default HomeScreen;
