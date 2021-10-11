/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Dimensions, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import {Button} from '../../../components/Common/Index';
import Colors from '../../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import SQlite from 'react-native-sqlite-storage';
import { Card } from 'native-base';
import { showMessage } from "react-native-flash-message";

let db = null; //initalize db variable globally
const {width} = Dimensions.get('window');

const CalorieBreakdown = () => {
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
                tx.executeSql('SELECT id,name, sum(totalgrams) AS totalgrams, sum(totalcalories) as totalcalories FROM MealsConsumed GROUP BY name',[],(tx, results) => {
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
    
    const _renderImage = (item) => {
        if(item.name == 'HAUSA KOKO') {
            return(
                <Image 
                    source = {require('../../../assets/images/HausaKoko.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'GARI') {
            return(
                <Image 
                    source = {require('../../../assets/images/gari.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'YAM') {
            return(
                <Image 
                    source = {require('../../../assets/images/Yam.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'FUFU') {
            return(
                <Image 
                    source = {require('../../../assets/images/Fufu.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'WAAKYE') {
            return(
                <Image 
                    source = {require('../../../assets/images/waakye.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'BEANS') {
            return(
                <Image 
                    source = {require('../../../assets/images/beans.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'RICE') {
            return(
                <Image 
                    source = {require('../../../assets/images/rice.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'BANANA') {
            return(
                <Image 
                    source = {require('../../../assets/images/banana.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'EGG') {
            return(
                <Image 
                    source = {require('../../../assets/images/egg.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'MEAT') {
            return(
                <Image 
                    source = {require('../../../assets/images/meat.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'FISH') {
            return(
                <Image 
                    source = {require('../../../assets/images/fish.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'GROUNDNUTS') {
            return(
                <Image 
                    source = {require('../../../assets/images/groundnuts.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'BREAD') {
            return(
                <Image 
                    source = {require('../../../assets/images/bread.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'GA KENKEY') {
            return(
                <Image 
                    source = {require('../../../assets/images/GAkenkey.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'BANKU') {
            return(
                <Image 
                    source = {require('../../../assets/images/banku.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'APPLE') {
            return(
                <Image 
                    source = {require('../../../assets/images/apple.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'AKPLE') {
            return(
                <Image 
                    source = {require('../../../assets/images/akple.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'COCOYAM') {
            return(
                <Image 
                    source = {require('../../../assets/images/cocoyam.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'ORANGE') {
            return(
                <Image 
                    source = {require('../../../assets/images/orange.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'PLANTAIN') {
            return(
                <Image 
                    source = {require('../../../assets/images/plantain.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'POP CORN') {
            return(
                <Image 
                    source = {require('../../../assets/images/pineapple.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'SPAGHETTI COOKED') {
            return(
                <Image 
                    source = {require('../../../assets/images/spaghetti.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'INDOMIE') {
            return(
                <Image 
                    source = {require('../../../assets/images/indomienoodles.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'POTATO FRIED') {
            return(
                <Image 
                    source = {require('../../../assets/images/friedpotatoes.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'POTATO BOILED') {
            return(
                <Image 
                    source = {require('../../../assets/images/boiledpotatoes.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'OATMEAL') {
            return(
                <Image 
                    source = {require('../../../assets/images/oats.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'COCONUT WATER') {
            return(
                <Image 
                    source = {require('../../../assets/images/coconutwater.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else if(item.name == 'COCONUT') {
            return(
                <Image 
                    source = {require('../../../assets/images/coconut.png')}
                    style={{width:50, height:50}}
                />
            )
        }
        else return(
            <Image 
                source = {require('../../../assets/images/akple.png')}
                style={{width:50, height:50}}
            />
        )
    }

    const _renderitem = (item, index) => {
        return(
            <View style={{flex:1, alignItems:'center', marginBottom: 5}}>
                <TouchableOpacity 
                    style={{backgroundColor: Colors.TRANSPARENT, height: 80, width: width - 20, flexDirection:'row', alignItems:'center'}}
                    onLongPress = {() => {
                        Alert.alert(
                            "Delete Item",
                            "Would you like to remove "+item.name+ " from your Calorie breakdown ?",
                            [
                                {
                                text: "Ask me later",
                                onPress: () => console.log("Ask me later pressed")
                                },
                                {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                                },
                                { text: "Delete", onPress: () => _deleteItem(item)}
                            ],
                            { cancelable: false }
                        );
                    }}
                >
                    <View style={{flex: 1, alignItems:'flex-start', justifyContent:'center', paddingLeft:10}}>
                        {_renderImage(item)}
                    </View>
                    <View style={{flex:4, justifyContent:'center', flexDirection:'row', alignItems: 'flex-start'}}>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Text style={{ fontWeight:'300', fontSize: 14, color:Colors.ACCENT_COLOR }}>Meal :</Text>
                            <Text style={{ fontWeight:'300', fontSize: 14, color:Colors.ACCENT_COLOR }}>Grams consumed :</Text>
                            <Text style={{ fontWeight:'300', fontSize: 14, color:Colors.ACCENT_COLOR }}>Calories Intake :</Text>
                        </View>
                        <View style={{flex:1, justifyContent:'center', alignItems:'flex-end', marginRight:20}}>
                            <Text style={{ fontWeight:'600', fontSize: 14, color:Colors.ACCENT_COLOR }}>{item.name}</Text>
                            <Text style={{ fontWeight:'600', fontSize: 14, color:Colors.ACCENT_COLOR }}>{item.totalgrams} grams</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 14, color:Colors.ACCENT_COLOR }}>{parseFloat(Math.round(item.totalcalories * 100) / 100).toFixed(3)} calories</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ height : 0.4, width: width - 40, backgroundColor:Colors.ACCENT_COLOR}}/>
            </View>
            
        )
    }

    const _deleteItem = (item) => {
        try {
            db.transaction(tx => {
                tx.executeSql(
                    'DELETE FROM MealsConsumed WHERE name = ?',
                    [item.name],
                    (tx, results) => {
                        if (results.rowsAffected > 0) {
                            showMessage({
                                message: "Meal deleted",
                                description: "Meal item deleted from calorie list.",
                                type: "danger",
                                floating: true,
                                icon :"success",
                            });
                        } else alert('Error deleting');
                    }
                )
            });
        } catch (err) {
            console.log('Error while deleting : ',err)
        }
    }

    return(
        <View style={{flex:1, alignItems:'center', backgroundColor: Colors.PRIMARY_BG_COLOR}}>
            <Card style={{flex:1, width: width-20 ,backgroundColor: "#fff", borderRadius:20}}>
                <FlatList 
                    data={data}
                    renderItem = {({ item, index }) => _renderitem(item, index)}
                    keyExtractor={(item, index) => item.id }
                    showsVerticalScrollIndicator = {false}
                />
                <View style={{ paddingBottom: 20, paddingHorizontal: 20 }}>
                    <Button 
                        children = 'Add your meal...'
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
    
export default CalorieBreakdown;
