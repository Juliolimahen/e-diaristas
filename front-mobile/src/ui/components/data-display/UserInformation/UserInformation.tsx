import React from 'React';
import { Avatar } from 'react-native-paper';

import {
    UserInformationContainer,
    InformationContainer,
    UserName,
    UserDescription,
} from './UserInformation.style'

export interface UserInformationProps {
    picture: string;
    rating: string;
    name: string;
    description: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
    return (
        <UserInformationContainer>
            <Avatar.Image source={{ uri: props.picture }} />
            <InformationContainer>
                <UserName>{props.name}</UserName>
                <UserDescription>{props.description}</UserDescription>
            </InformationContainer>
        </UserInformationContainer>
    );
};

export default UserInformation;