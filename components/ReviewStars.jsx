import { View, Text } from 'react-native';
import React from 'react';
import { Rating } from 'react-native-ratings';

export default function App() {
    return (
        <View>
            <Rating
                className="flex-row-reverse"
                type='star'
                ratingCount={5}
                showRating={true}
                ratingTextColor="gray"
                imageSize={20}
                // readonly
                // showReadOnlyText={false}
                fractions={1} // 0-20
                jumpValue={0.1}
                startingValue={4.5}
            />
        </View>
    );
}