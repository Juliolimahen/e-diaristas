import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, View } from 'react-native';
import Button from "ui/components/inputs/Button/Button";
import { RootStackParamList } from "ui/router/Router";

type NavigationProp = StackNavigationProp<RootStackParamList, 'Index'>;
interface IndexProps {
    navigation: NavigationProp;
}

const Index: React.FC<IndexProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Button mode={'contained'} onPress={() => navigation.navigate('EncontrarDiaristas')}
            >Encontrar Diaristas
            </Button>
        </View>
    );
};

export default Index;