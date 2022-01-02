import styled from "@emotion/native";

export const UserInformationContainer = styled.View`
    flex-flow: row;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(3) + ' ' + theme.spacing(2)};
    background-color: ${({ theme }) => theme.spacing(3) + ' ' + theme.colors.grey[100]};
`;

export const InformationContainer = styled.View`
    flex: 1;
    padding-left: ${({ theme }) => theme.spacing(2)};
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
`;

export const UserDescription = styled.Text`

`;