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
    z-index: 9;
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
    z-index: 12;
`;

export const DetailsArea = styled.View`
    margin-top: ${props => props.marginTop + 'px'};
    border-radius: 30px;
    border: 10px solid ${props => props.color};
    background-color: #FFFFFF;
    flex: 1;
    z-index: -1;
    flex-direction: column;
`;

export const TypesArea = styled.View`
    margin-top: ${props => props.marginTop + 'px'};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TypeBox = styled.View`
    background-color: ${props => props.color};
    border-radius: 10px;
    align-items: center;
    padding: 5px;
    margin: 5px;
`;

export const TypeName = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
`;

export const AboutTitle = styled.Text`
    color: ${props => props.color};
    font-size: 26px;
    font-weight: bold;
    alignSelf: center;

`;

export const AboutArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
`;

export const DivisorLine = styled.View`
    background-color: #E0E0E0;
    height: ${props => props.height + 'px'};
    width: 2px;
    margin: 3px;
`;

export const WeightArea = styled.View`
    flex-direction: column;
`;

export const WeightRow = styled.View`
    flex-direction: row;    
`;

export const WeightNumber = styled.Text`
    color: #212121;
    font-size: 16px;
    font-weight: 400;
    alignSelf: center;
`;

export const WeightName = styled.Text`
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    alignSelf: center;
    margin-top: 10px;
`;

export const HeightArea = styled.View`
    flex-direction: column;
`;

export const HeightRow = styled.View`
    flex-direction: row;
`;

export const HeightNumber = styled.Text`
    color: #212121;
    font-size: 16px;
    font-weight: 400;
    alignSelf: center;
`;

export const HeightName = styled.Text`
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    alignSelf: center;
    margin-top: 10px;
`;

export const AbilitiesArea = styled.View`
    flex-direction: column;
`;

export const AbilityName = styled.Text`
    color: #666666;
    font-size: 16px;
    font-weight: 400;
`;

export const AbilityTitle = styled.Text`
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    alignSelf: center;
    margin-top: 10px;
`;

export const StatusTitle = styled.Text`
    color: ${props => props.color};
    font-size: 24px;
    font-weight: bold;
    alignSelf: center;
    margin-bottom: 30px;
`;

export const StatusArea = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const StatusTypesArea = styled.View`
    flex-direction: column;
    align-items: flex-end;
`;

export const StatusTypeName = styled.Text`
    color: ${props => props.color};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 3px;
`;

export const StatusNumbersArea = styled.View`
    flex-direction: column;
    align-items: flex-start;
`;

export const StatusNumber = styled.Text`
    color: #000000;
    font-size: 16px;
    margin-bottom: 3px;
`;

export const StatusBar = styled.View`
    background-color: ${props => props.color};
    width: ${props => props.width + 'px'};;
    height: 15px;
    margin: 5px;
    alignSelf: flex-start;
    border-radius: 5px;
`;