import { DrawerLayoutAndroid, Image, Text, View, Button, TouchableOpacity } from "react-native";
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";

const Home = () => {
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'SquadaOne-Regular': require('../assets/fonts/SquadaOne-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <SafeAreaView className="flex-1 items-center justify-around bg-gray-200 pt-3">

            {/* top Bar */}

            <View style={{ width: wp(90) }} className="flex-row items-center justify-between">
                <View className="flex-row items-center justify-between">
                    <TouchableOpacity
                        onPress={() => router.push("")}
                        className="bg-blue-900 p-2 mr-5 flex items-center justify-center rounded-full"
                    >
                        <Icon name="home" size={hp(3.5)} color="white" />
                    </TouchableOpacity>
                    <View>
                        <Text
                            style={{
                                fontSize: hp(3), fontFamily: 'SquadaOne-Regular', fontWeight: '600',
                            }}>
                            Welcome,
                        </Text>
                        <View className="flex-row items-center justify-start">
                            <Image className="w-4 h-4 mr-2" source={require('../assets/images/Vector.png')} />
                            <Text
                                style={{
                                    fontSize: hp(2), fontWeight: '200', fontFamily: 'Roboto-Regular'
                                }}>
                                Hi ,There
                            </Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => router.push("")}
                    className="bg-blue-900 p-2 flex items-center justify-center rounded-full"
                >
                    <Icon name="notifications" size={hp(3.5)} color="white" />
                </TouchableOpacity>
            </View>

            {/* Home Screen */}

            <View style={{ width: wp(90) }} className="flex-1 items-center justify-around flex-wrap mt-7">

                {/* Section 1 */}
                <View className="bg-blue-900 flex-row items-center justify-evenly px-7 py-3 rounded-2xl">
                    <View className="w-2/3">
                        <View className="flex-row items-center justify-start">
                            <Text
                                className="mr-2"
                                style={{
                                    fontSize: hp(3.2), fontWeight: '200', fontFamily: 'SquadaOne-Regular', color: 'white'
                                }}>
                                20%
                            </Text>
                            <Icon name="local-fire-department" size={hp(3.2)} color="#F8BD00" />
                        </View>
                        <View>
                            <Text
                                className="pt-4"
                                style={{
                                    fontSize: hp(2), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#F8BD00'
                                }}>
                                Today’s Special!
                            </Text>
                            <Text
                                className="pt-2"
                                style={{
                                    fontSize: hp(1.5), fontWeight: '400', fontFamily: 'Roboto-Regular', color: 'white'
                                }}>
                                Get Discount for every Service. Only Valid for today
                            </Text>
                        </View>
                    </View>
                    <View className="w-2/5">
                        <Image source={require('../assets/images/Group 34595.png')} />
                    </View>
                </View>


                {/* Section 2 */}
                <View className="flex-col items-center justify-around">

                    <View
                        className="pt-1 pb-1 pr-12 pl-12 mb-7"
                        style={{
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: 'gray'
                        }}>
                        <Text style={{
                            fontSize: hp(2), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#000000',
                        }}>
                            Our Services
                        </Text>
                    </View>

                    <View className="flex-row items-center justify-center">

                        {/* Section 2 box 1 */}
                        <View style={{ width: wp(26) }}>
                            <View
                                className="flex-col justify-between"
                                style={{
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: '#F8BD00',
                                    backgroundColor: '#3292EB1F',
                                    height: hp(10)
                                }}>
                                <View
                                    className="bg-blue-900 p-2 -mt-3 -ml-3 flex items-center justify-center rounded-full w-1/3"
                                >
                                    <Icon name="plumbing" size={hp(2)} color="white" />
                                </View>
                                <Text
                                    className="-top-2 px-2 text-center"
                                    style={{
                                        fontSize: hp(1.7), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: 'black'
                                    }}>
                                    Plumbing
                                </Text>

                                <TouchableOpacity
                                    onPress={() => router.push("/services/Plumbing")}
                                    className="flex-row items-center justify-center rounded pb-2"
                                >
                                    <Text
                                        className="text-white"
                                        style={{
                                            fontSize: hp(1.1), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                        }}>
                                        Read More
                                    </Text>
                                    <Icon name="arrow-forward" size={hp(1.1)} color="black" />
                                </TouchableOpacity>
                            </View>

                        </View>

                        {/* Section 2 box 2 */}
                        <View style={{ width: wp(26) }} className="mx-5">
                            <View
                                className="flex-col justify-between"
                                style={{
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: '#F8BD00',
                                    backgroundColor: '#3292EB1F',
                                    height: hp(10)
                                }}>
                                <View
                                    className="bg-blue-900 p-2 -mt-3 -ml-3 flex items-center justify-center rounded-full w-1/3"
                                >
                                    <Icon name="electric-bolt" size={hp(2)} color="white" />
                                </View>
                                <Text
                                    className="-top-2 px-4 text-center"
                                    style={{
                                        fontSize: hp(1.7), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: 'black'
                                    }}>
                                    Electrical work
                                </Text>

                                <TouchableOpacity
                                    onPress={() => router.push("")}
                                    className="flex-row items-center justify-center rounded pb-2"
                                >
                                    <Text
                                        className="text-white"
                                        style={{
                                            fontSize: hp(1.1), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                        }}>
                                        Read More
                                    </Text>
                                    <Icon name="arrow-forward" size={hp(1.1)} color="black" />
                                </TouchableOpacity>
                            </View>

                        </View>

                        {/* Section 2 box 3 */}
                        <View style={{ width: wp(26) }}>
                            <View
                                className="flex-col justify-between"
                                style={{
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: '#F8BD00',
                                    backgroundColor: '#3292EB1F',
                                    height: hp(10)
                                }}>
                                <View
                                    className="bg-blue-900 p-2 -mt-3 -ml-3 flex items-center justify-center rounded-full w-1/3"
                                >
                                    <Icon name="construction" size={hp(2)} color="white" />
                                </View>
                                <Text
                                    className="-top-2 px-2 text-center"
                                    style={{
                                        fontSize: hp(1.7), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: 'black'
                                    }}>
                                    HVAC Maintenance
                                </Text>

                                <TouchableOpacity
                                    onPress={() => router.push("")}
                                    className="flex-row items-center justify-center rounded pb-2"
                                >
                                    <Text
                                        className="text-white"
                                        style={{
                                            fontSize: hp(1.1), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                        }}>
                                        Read More
                                    </Text>
                                    <Icon name="arrow-forward" size={hp(1.1)} color="black" />
                                </TouchableOpacity>
                            </View>

                        </View>



                    </View>

                </View>


                {/* Section 3 */}
                <View className="flex-col items-center justify-around">

                    <View
                        className="pt-1 pb-1 pr-12 pl-12 mb-7"
                        style={{
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: 'gray'
                        }}>
                        <Text style={{
                            fontSize: hp(2), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#000000',
                        }}>
                            Our Plans
                        </Text>
                    </View>

                    <View className="flex-row items-start justify-center">

                        {/* Section 3 box 1 */}
                        <View style={{ width: wp(28) }}>
                            <View
                                className="flex-col justify-between"
                                style={{
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: 'darkblue',
                                    height: hp(15)
                                }}>
                                <Text
                                    className="py-1.5 text-center"
                                    style={{
                                        fontSize: hp(1.7), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#FFFFFF', backgroundColor: '#8A98E4', borderBottomWidth: 1, borderColor: 'darkblue'
                                    }}>
                                    Essentials
                                </Text>
                                <Text
                                    className="px-2 py-2 text-center"
                                    style={{
                                        fontSize: hp(0.9), fontWeight: '500', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    Standard 9 to 5 service calls for plumbing and electrical Works.
                                </Text>
                                <Text
                                    className="pb-2 px-2 text-center"
                                    style={{
                                        fontSize: hp(1), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    Starting From <Text style={{ color: '#283891' }}>150$/month</Text>
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => router.push("")}
                                className="bg-blue-900 flex items-center justify-center rounded mt-1.5"
                            >
                                <Text
                                    className="text-white"
                                    style={{
                                        fontSize: hp(1.4), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'white'
                                    }}>
                                    BOOK NOW
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Section 3 box 2 */}
                        <View style={{ width: wp(28) }} className="mx-3">
                            <View
                                className="flex-col justify-between"
                                style={{
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: 'darkblue',
                                    height: hp(15)
                                }}>
                                <Text
                                    className="py-1.5 pr-2 pl-2 text-center"
                                    style={{
                                        fontSize: hp(1.7), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#FFFFFF', backgroundColor: '#8A98E4', borderBottomWidth: 1, borderColor: 'darkblue'
                                    }}>
                                    Plus
                                </Text>
                                <Text
                                    className="px-2 py-2 text-center"
                                    style={{
                                        fontSize: hp(0.9), fontWeight: '500', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    24/7 emergency services for plumbing, electrical, and handyman services.
                                </Text>
                                <Text
                                    className="pb-2 px-2 text-center"
                                    style={{
                                        fontSize: hp(1), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    Starting From <Text style={{ color: '#283891' }}>250$/month</Text>
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => router.push("")}
                                className="bg-blue-900 flex items-center justify-center rounded mt-1.5"
                            >
                                <Text
                                    className="text-white"
                                    style={{
                                        fontSize: hp(1.4), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'white'
                                    }}>
                                    BOOK NOW
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Section 3 box 3 */}
                        <View style={{ width: wp(28) }}>
                            <View
                                className="flex-col justify-between"
                                style={{
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: 'darkblue',
                                    height: hp(15)
                                }}>
                                <Text
                                    className="py-1.5 pr-2 pl-2 text-center"
                                    style={{
                                        fontSize: hp(1.7), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#FFFFFF', backgroundColor: '#8A98E4', borderBottomWidth: 1, borderColor: 'darkblue'
                                    }}>
                                    Elite
                                </Text>
                                <Text
                                    className="px-2 py-1 text-center"
                                    style={{
                                        fontSize: hp(0.9), fontWeight: '500', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    Comprehensive coverage including HVAC, 24/7 emergency plumbing and electrical services, handyman services
                                </Text>
                                <Text
                                    className="pb-2 px-2 text-center"
                                    style={{
                                        fontSize: hp(1), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    Starting From <Text style={{ color: '#283891' }}>400$/month</Text>
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => router.push("")}
                                className="bg-blue-900 flex items-center justify-center rounded mt-1.5"
                            >
                                <Text
                                    className="text-white"
                                    style={{
                                        fontSize: hp(1.4), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'white'
                                    }}>
                                    BOOK NOW
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>


            </View>

            {/* Tab Navigation */}

            <View style={{ width: wp(100) }} className="bg-blue-900 rounded-t-xl mt-7">
                <TouchableOpacity
                    onPress={() => router.push("")}
                    className="flex-col items-start justify-center pl-3 py-1"
                >
                    <Icon name="home-filled" size={hp(6)} color="#F8BD00" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    )
}

export default Home