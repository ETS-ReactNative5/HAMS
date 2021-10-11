/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React from 'react';
import {
    Text,
    View,
    Image,
    SafeAreaView,
    Dimensions,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Platform,
} from 'react-native';
import Colors from '../../constants/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Item, Input, Card, CardItem, InputGroup, Form} from 'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';
import Modal from 'react-native-modal';
import {Spinner, Button} from '../../components/Common/Index';
import {showMessage} from 'react-native-flash-message';
import SQlite from 'react-native-sqlite-storage';
import {useDispatch} from 'react-redux';
import {setNewBMR} from '../../redux/actions/profileAction';

let db = null;

const {height, width} = Dimensions.get('window');

const MealList = ({navigation}) => {
    const [appData, setAppData] = React.useState([]);
    const [mealData, setMealData] = React.useState([]);
    const [query, setQuery] = React.useState(null);
    const [itemData, setItemData] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);
    const [isTask, setIsTask] = React.useState(false);
    const [grams, setGrams] = React.useState(null);

    const dispatch = useDispatch();
    const calcBMR = (kcal) => {
        dispatch(setNewBMR(kcal));
    };

    React.useEffect(() => {
        db = SQlite.openDatabase(
            {
                name: 'HAMS1.db',
                createFromLocation: 1,
            },
            () => {
                _onDbOpenSuccess();
            },
            (err) => {
                console.log('error when connecting to SQlite DB is : ', err);
            },
        );
    }, []);

    const _onDbOpenSuccess = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM FoodList', [], (tx, results) => {
                    let dataLength = results.rows.length;
                    if (dataLength > 0) {
                        let helperArray = [];
                        for (let i = 0; i < results.rows.length; i++) {
                            helperArray.push(results.rows.item(i));
                        }
                        setAppData(helperArray);
                        setMealData(helperArray);
                    }
                });
            });
        } catch (error) {
            console.log('Error is : ', error);
        }
    };

    const _renderListHeader = () => {
        return (
            <View
                style={{
                    backgroundColor: Colors.TRANSPARENT,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginHorizontal: 10,
                }}>
                <Text
                    style={{
                        alignSelf: 'flex-start',
                        paddingLeft: 5,
                        paddingTop: 20,
                        fontSize: 16,
                        fontWeight: '500',
                        color: Colors.ACCENT_COLOR,
                    }}>
                    Choose Meal items from the below list to calculate your BMR
                    (kcal)
                </Text>
                <Item
                    regular
                    style={{
                        borderColor: Colors.ACCENT_COLOR,
                        borderWidth: 1,
                        borderRadius: 40,
                        height: 40,
                        backgroundColor: Colors.PRIMARY_BG_COLOR,
                        marginVertical: 10,
                    }}>
                    <InputGroup>
                        <IconFontAwesome
                            name="search"
                            size={20}
                            color={Colors.ACCENT_COLOR}
                        />
                        <Input
                            placeholder="Search your meal here..."
                            autoFocus={false}
                            autoCorrect={false}
                            clearButtonMode="while-editing"
                            keyboardAppearance="dark"
                            onChangeText={(text) => _handleSearch(text)}
                            value={query}
                        />
                    </InputGroup>
                </Item>
            </View>
        );
    };

    const _handleSearch = (text) => {
        const formatQuery = text.toLowerCase();
        const data = _.filter(mealData, (meal) => {
            const Name = meal.name.toLowerCase();
            if (Name.includes(formatQuery)) {
                return true;
            }
        });
        setQuery(text);
        setAppData(data);
    };

    const _renderImage = (item) => {
        if (item.name == 'HAUSA KOKO') {
            return (
                <Image
                    source={require('../../assets/images/HausaKoko.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'GARI') {
            return (
                <Image
                    source={require('../../assets/images/gari.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'YAM') {
            return (
                <Image
                    source={require('../../assets/images/Yam.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'FUFU') {
            return (
                <Image
                    source={require('../../assets/images/Fufu.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'WAAKYE') {
            return (
                <Image
                    source={require('../../assets/images/waakye.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'BEANS') {
            return (
                <Image
                    source={require('../../assets/images/beans.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'RICE') {
            return (
                <Image
                    source={require('../../assets/images/rice.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'BANANA') {
            return (
                <Image
                    source={require('../../assets/images/banana.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'EGG') {
            return (
                <Image
                    source={require('../../assets/images/egg.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'MEAT') {
            return (
                <Image
                    source={require('../../assets/images/meat.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'FISH') {
            return (
                <Image
                    source={require('../../assets/images/fish.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'GROUNDNUTS') {
            return (
                <Image
                    source={require('../../assets/images/groundnuts.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'BREAD') {
            return (
                <Image
                    source={require('../../assets/images/bread.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'GA KENKEY') {
            return (
                <Image
                    source={require('../../assets/images/GAkenkey.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'BANKU') {
            return (
                <Image
                    source={require('../../assets/images/banku.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'APPLE') {
            return (
                <Image
                    source={require('../../assets/images/apple.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'AKPLE') {
            return (
                <Image
                    source={require('../../assets/images/akple.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'COCOYAM') {
            return (
                <Image
                    source={require('../../assets/images/cocoyam.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'ORANGE') {
            return (
                <Image
                    source={require('../../assets/images/orange.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'PLANTAIN') {
            return (
                <Image
                    source={require('../../assets/images/plantain.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'POP CORN') {
            return (
                <Image
                    source={require('../../assets/images/pineapple.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'SPAGHETTI COOKED') {
            return (
                <Image
                    source={require('../../assets/images/spaghetti.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'INDOMIE') {
            return (
                <Image
                    source={require('../../assets/images/indomienoodles.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'POTATO FRIED') {
            return (
                <Image
                    source={require('../../assets/images/friedpotatoes.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'POTATO BOILED') {
            return (
                <Image
                    source={require('../../assets/images/boiledpotatoes.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'OATMEAL') {
            return (
                <Image
                    source={require('../../assets/images/oats.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'COCONUT WATER') {
            return (
                <Image
                    source={require('../../assets/images/coconutwater.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else if (item.name == 'COCONUT') {
            return (
                <Image
                    source={require('../../assets/images/coconut.png')}
                    style={{width: 70, height: 70}}
                />
            );
        } else
            return (
                <Image
                    source={require('../../assets/images/akple.png')}
                    style={{width: 70, height: 70}}
                />
            );
    };

    const _renderModalImage = (item) => {
        if (item.name == 'HAUSA KOKO') {
            return (
                <Image
                    source={require('../../assets/images/HausaKoko.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'GARI') {
            return (
                <Image
                    source={require('../../assets/images/gari.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'YAM') {
            return (
                <Image
                    source={require('../../assets/images/Yam.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'FUFU') {
            return (
                <Image
                    source={require('../../assets/images/Fufu.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'WAAKYE') {
            return (
                <Image
                    source={require('../../assets/images/waakye.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'BEANS') {
            return (
                <Image
                    source={require('../../assets/images/beans.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'RICE') {
            return (
                <Image
                    source={require('../../assets/images/rice.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'BANANA') {
            return (
                <Image
                    source={require('../../assets/images/banana.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'EGG') {
            return (
                <Image
                    source={require('../../assets/images/egg.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'MEAT') {
            return (
                <Image
                    source={require('../../assets/images/meat.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'FISH') {
            return (
                <Image
                    source={require('../../assets/images/fish.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'GROUNDNUTS') {
            return (
                <Image
                    source={require('../../assets/images/groundnuts.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'BREAD') {
            return (
                <Image
                    source={require('../../assets/images/bread.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'GA KENKEY') {
            return (
                <Image
                    source={require('../../assets/images/GAkenkey.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'BANKU') {
            return (
                <Image
                    source={require('../../assets/images/banku.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'APPLE') {
            return (
                <Image
                    source={require('../../assets/images/apple.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'AKPLE') {
            return (
                <Image
                    source={require('../../assets/images/akple.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'COCOYAM') {
            return (
                <Image
                    source={require('../../assets/images/cocoyam.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'ORANGE') {
            return (
                <Image
                    source={require('../../assets/images/orange.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'PLANTAIN') {
            return (
                <Image
                    source={require('../../assets/images/plantain.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'POP CORN') {
            return (
                <Image
                    source={require('../../assets/images/pineapple.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'SPAGHETTI COOKED') {
            return (
                <Image
                    source={require('../../assets/images/spaghetti.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'INDOMIE') {
            return (
                <Image
                    source={require('../../assets/images/indomienoodles.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'POTATO FRIED') {
            return (
                <Image
                    source={require('../../assets/images/friedpotatoes.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'POTATO BOILED') {
            return (
                <Image
                    source={require('../../assets/images/boiledpotatoes.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'OATMEAL') {
            return (
                <Image
                    source={require('../../assets/images/oats.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'COCONUT WATER') {
            return (
                <Image
                    source={require('../../assets/images/coconutwater.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else if (item.name == 'COCONUT') {
            return (
                <Image
                    source={require('../../assets/images/coconut.png')}
                    style={{width: 170, height: 170}}
                />
            );
        } else
            return (
                <Image
                    source={require('../../assets/images/akple.png')}
                    style={{width: 170, height: 170}}
                />
            );
    };

    const _renderitem = (item, index) => {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                }}
                onPress={() => {
                    _itemOnPress(item);
                }}>
                {_renderImage(item)}
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    const _itemOnPress = (item) => {
        setItemData(item);
        setShowModal(true);
    };

    const _renderButton = () => {
        if (isTask) {
            return <Spinner size="large" />;
        } else {
            return (
                <Button
                    children="Add meal item"
                    onPress={() => {
                        _calculateCalories();
                    }}
                    BGcolor={Colors.SECONDARY_COLOR}
                    borderColor={Colors.SECONDARY_COLOR}
                    iconName="add-circle-outline"
                />
            );
        }
    };

    const _calculateCalories = () => {
        setIsTask(true);
        if (grams == null || grams.length == 0) {
            alert('Enter grams consumed to continue.');
        } else if (isNaN(grams) || grams < 1) {
            alert('Invalid input entered.');
        } else {
            let totalcal = grams * itemData.calories;
            calcBMR(totalcal);
            setShowModal(false);
            setGrams(null);
            // db.transaction(function (tx) {
            //     tx.executeSql(
            //         'INSERT INTO MealsConsumed (name, totalgrams, totalcalories) VALUES (?,?,?)',
            //         [itemData.name, grams, totalcal],
            //         (tx, results) => {
            //             console.log('Results', results.rowsAffected);
            //             if (results.rowsAffected > 0) {
            //                 setShowModal(false);
            //                 setGrams(null);
            //                 showMessage({
            //                     message: 'Caloires added.',
            //                     description:
            //                         'Your Meal history is available from the Home Tab.',
            //                     type: 'success',
            //                     floating: true,
            //                     icon: 'success',
            //                     duration: 5000,
            //                 });
            //             } else alert('Error inserting');
            //         },
            //     );
            // });
        }
        setIsTask(false);
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: Colors.PRIMARY_BG_COLOR,
            }}>
            <Card
                style={{
                    width: width - 20,
                    borderRadius: 20,
                    borderColor: Colors.PRIMARY_BG_COLOR,
                    flex: 1,
                }}>
                <FlatList
                    data={appData}
                    ListHeaderComponent={_renderListHeader()}
                    renderItem={({item, index}) => _renderitem(item, index)}
                    keyExtractor={(item, index) => item + index}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                />
            </Card>
            {showModal == true ? (
                <Modal
                    style={{flex: 1}}
                    isVisible={showModal}
                    animationIn="slideInLeft"
                    animationOut="slideOutRight"
                    useNativeDriver
                    coverScreen
                    onBackButtonPress={() => {
                        setShowModal(false), setIsTask(false);
                    }}
                    onBackdropPress={() => {
                        setShowModal(false), setIsTask(false);
                    }}
                    hasBackdrop
                    hardwareAccelerated={true}
                    backdropOpacity={0.9}
                    backdropColor={Colors.LIGHT_BORDER}
                    style={{
                        borderRadius: 20,
                        justifyContent: 'flex-start',
                        backgroundColor: Colors.TRANSPARENT,
                        width: width - 20,
                        alignItems: 'center',
                        alignSelf: 'center',
                    }}>
                    <Card
                        style={{
                            borderRadius: 20,
                            borderColor: Colors.PRIMARY_BG_COLOR,
                            maxHeight: height * 0.75,
                            marginTop: 25,
                        }}>
                        <KeyboardAwareScrollView
                            style={{
                                backgroundColor: Colors.TRANSPARENT,
                                borderRadius: 20,
                                flex: 1,
                            }}
                            contentContainerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            scrollEnabled={true}
                            bounces={true}
                            keyboardShouldPersistTaps={'handled'}
                            showsVerticalScrollIndicator={false}
                            keyboardDismissMode="interactive"
                            enableOnAndroid={true}>
                            <CardItem
                                header
                                style={{
                                    backgroundColor: Colors.TRANSPARENT,
                                    width: width - 5,
                                    flex: 1,
                                    flexDirection: 'column',
                                }}>
                                <View style={styles.headerCancelButton}>
                                    <TouchableOpacity
                                        transparent
                                        onPress={() => {
                                            setShowModal(false),
                                                setIsTask(false);
                                        }}>
                                        <IconIonicons
                                            name={
                                                Platform.OS == 'ios'
                                                    ? 'ios-close-circle'
                                                    : 'md-close-circle'
                                            }
                                            size={32}
                                            color={Colors.PRIMARY_COLOR}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.headerTitle}>
                                    <Text
                                        style={{
                                            color: Colors.ACCENT_COLOR,
                                            fontWeight: 'bold',
                                            fontSize: 22,
                                        }}>
                                        {itemData.name}
                                    </Text>
                                </View>
                            </CardItem>
                            <CardItem
                                style={{
                                    flex: 2,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: Colors.TRANSPARENT,
                                }}>
                                {_renderModalImage(itemData)}
                            </CardItem>
                            <CardItem
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: Colors.TRANSPARENT,
                                }}>
                                <Form style={{width: width - width / 5}}>
                                    <Text
                                        style={{
                                            flex: 1,
                                            flexWrap: 'wrap',
                                            alignSelf: 'flex-start',
                                            fontSize: 16,
                                            color: Colors.ACCENT_COLOR,
                                            fontWeight: '400',
                                            paddingBottom: 5,
                                        }}>
                                        Enter grams of {itemData.name} consumed.
                                    </Text>
                                    <Item
                                        regular
                                        style={{
                                            borderColor: Colors.ACCENT_COLOR,
                                            borderWidth: 1,
                                            borderRadius: 10,
                                        }}>
                                        <Input
                                            placeholder="Eg 20."
                                            textContentType="telephoneNumber"
                                            autoCorrect={false}
                                            clearButtonMode="while-editing"
                                            keyboardAppearance="dark"
                                            keyboardType="numeric"
                                            maxLength={6}
                                            onChangeText={(g) => {
                                                setGrams(g);
                                            }}
                                            value={grams}
                                        />
                                    </Item>
                                </Form>
                            </CardItem>
                            <CardItem
                                footer
                                style={{
                                    backgroundColor: Colors.TRANSPARENT,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 20,
                                    marginBottom: 10,
                                }}>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flex: 1,
                                    }}>
                                    {_renderButton()}
                                </View>
                            </CardItem>
                        </KeyboardAwareScrollView>
                    </Card>
                </Modal>
            ) : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        alignItems: 'center',
    },
    fontStyle: {
        paddingTop: 10,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'stretch',
        color: Colors.ACCENT_COLOR,
    },
    modalView: {
        height: height - height / 3,
        backgroundColor: Colors.TRANSPARENT,
        alignSelf: 'center',
        elevation: 2,
        position: 'relative',
    },
    headerWrapper: {
        flex: 1,
        //flexDirection: 'row',
    },
    headerTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerCancelButton: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: 20,
        width: width - 30,
    },
});

export default MealList;
