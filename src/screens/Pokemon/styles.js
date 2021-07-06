import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: ${props => props.color};
    flex: 1;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    margin: 20px;
    align-items: center;
    justify-content: space-between;
`;

export const TitleArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ArrorBackButton= styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: Poppins;
    font-size: 30px;
    font-weight: 700;
    margin-left: 15px;
    color: #FFFFFF;
`;

export const Id = styled.Text`
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 20px;
    alignSelf: center;
`;