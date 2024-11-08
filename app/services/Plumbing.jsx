import { DrawerLayoutAndroid, Image, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import ReviewStars from "../../components/ReviewStars";

const Plumbing = () => {
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'SquadaOne-Regular': require('../../assets/fonts/SquadaOne-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <KeyboardAvoidingView behavior="padding" className="bg-white flex items-center">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View className="flex-1 flex-wrap items-center justify-between pb-10">

                    {/* Plumbing Services Screen */}

                    {/* Section 1 */}
                    <View style={{ width: wp(100) }} className="flex-col items-start justify-start">
                        <Image className="w-full" source={require('../../assets/images/Plumbing Services.png')} />
                    </View>

                    {/* Section 2 */}
                    <View style={{ width: wp(90) }} className="flex-col items-start justify-center flex-wrap">

                        {/* main heading */}
                        <Text
                            className="py-7"
                            style={{
                                fontSize: hp(3), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: 'black'
                            }}>
                            Plumbing Services
                        </Text>

                        {/* about worker */}
                        <View className="flex-row items-center justify-center">

                            <Image source={require('../../assets/images/image 2363.png')} />

                            <View className="flex-col items-start justify-center ml-2">
                                <Text
                                    style={{
                                        fontSize: hp(2), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    Jhon Abrahm
                                </Text>


                                <ReviewStars />


                                <View className="flex-row items-center">
                                    <Icon name="location-on" size={hp(1.5)} color="black" />
                                    <Text
                                        className="pl-1"
                                        style={{
                                            fontSize: hp(1.5), fontWeight: '600', fontFamily: 'Roboto-Regular', color: 'black'
                                        }}>
                                        New York, USA
                                    </Text>
                                </View>

                            </View>
                        </View>

                        {/* column 1 */}
                        <View>
                            <Text
                                className="pt-5"
                                style={{
                                    fontSize: hp(1.7), fontWeight: '400', fontFamily: 'Roboto-Regular', color: 'black'
                                }}>
                                Inspection Fee
                            </Text>

                            <Text
                                className="pt-4 pb-2"
                                style={{
                                    fontSize: hp(2), fontWeight: '600', fontFamily: 'Roboto-Regular', color: '#319F43'
                                }}>
                                Free
                            </Text>

                            <Text
                                style={{
                                    fontSize: hp(1.5), fontWeight: '400', fontFamily: 'Roboto-Regular', color: 'black'
                                }}>
                                Our goal is to provide peace of mind to homeowners by offering affordable and reliable coverage for home services.
                            </Text>
                        </View>

                        {/* column 2 */}
                        <View>
                            <Text
                                className="pt-4 pb-2"
                                style={{
                                    fontSize: hp(2), fontWeight: '500', fontFamily: 'Roboto-Regular', color: 'black'
                                }}>
                                About me
                            </Text>

                            <Text
                                style={{
                                    fontSize: hp(1.5), fontWeight: '400', fontFamily: 'Roboto-Regular', color: 'black'
                                }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Read more..
                            </Text>

                        </View>

                        {/* column 3 */}
                        <View>
                            <Text
                                className="pt-4 pb-2"
                                style={{
                                    fontSize: hp(2), fontWeight: '500', fontFamily: 'Roboto-Regular', color: 'black'
                                }}>
                                Review
                            </Text>

                            <TextInput
                                style={{
                                    height: hp(20),
                                    width: wp(90),
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    borderRadius: 15,
                                    paddingHorizontal: 10,
                                    marginVertical: 10,
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: hp(1.7),
                                    color: 'black'
                                }}
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                placeholderTextColor="gray"
                                multiline={true}
                                onChangeText={(text) => {
                                    if (text.split('\n').length === 1 && text.length >= wp(90) / hp(1.7)) {
                                        text += '\n';
                                    }
                                }}
                            />

                        </View>
                    </View>

                    {/* Section 3 */}
                    <View style={{ width: wp(90) }} className="flex-row items-center justify-around flex-wrap">
                        <View
                            style={{ height: hp(5), width: wp(35) }}
                            className="bg-gray-300 flex-col items-start justify-around px-7 py-2 rounded-2xl">
                            <Text
                                className="pb-1"
                                style={{ fontSize: hp(1.3), fontWeight: '400', fontFamily: 'Roboto-Regular', color: '#0000008F' }}>
                                Price
                            </Text>
                            <Text
                                style={{ fontSize: hp(1.7), fontWeight: '500', fontFamily: 'Roboto-Regular', color: 'black' }}>
                                $34.00/Hr
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => router.push("")}
                            style={{ height: hp(5), width: wp(50) }}
                            className="bg-blue-900 flex items-center justify-center rounded-2xl"
                        >
                            <Text
                                style={{ fontSize: hp(2.3), fontWeight: '600', fontFamily: 'Roboto-Regular', color: 'white' }}>
                                BOOK NOW
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Plumbing