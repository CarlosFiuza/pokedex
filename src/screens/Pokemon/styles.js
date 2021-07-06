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

export const SwipeDot = styled.View`
    background-color: ${props => props.color};
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeItem = styled.View`
    flex: 1;
    background-color: ${props => props.color};
    z-index: 10;
`;

export const DetailsArea = styled.View`
    margin-top: ${props => props.marginTop + 'px'};
    border-radius: 30px;
    border: 20px solid ${props => props.color};
    background-color: #FFFFFF;
    flex: 1;
    z-index: -1;
    flex-direction: column;
`;