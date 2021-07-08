import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: ${props => props.color};
    flex: 1;
`;

export const Scroller = styled.ScrollView`
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
    width: 30px;
    height: 30px;
    justify-content: center;
    z-index: 9;
`;

export const Title = styled.Text`
    font-family: Poppins-bold;
    font-size: 24px;
    font-weight: 700;
    margin-left: 15px;
    color: #FFFFFF;
`;

export const Id = styled.Text`
    font-family: Poppins;
    font-size: 12px;
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
    align-items: center;
`;

export const DetailsArea = styled.View`
    flex: 1;
    margin-top: ${props => props.marginTop + 'px'};
    border-radius: 25px;
    border: 10px solid ${props => props.color};
    background-color: #FFFFFF;
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
    font-family: Poppins;
    color: #FFFFFF;
    font-size: 10px;
    font-weight: bold;
`;

export const AboutTitle = styled.Text`
    font-family: Poppins;
    color: ${props => props.color};
    font-size: 16px;
    font-weight: bold;
    alignSelf: center;
    margin-top: 16px;
`;

export const AboutArea = styled.View`
    flex-direction: row;
    justify-content: center;
    margin: 10px;
    margin-top: 16px;
`;

export const DivisorLine = styled.View`
    background-color: #E0E0E0;
    height: ${props => props.height + 'px'};
    width: 2px;
    margin: 0px ${props => props.margin + 'px'};
`;

export const WeightArea = styled.View`
    flex-direction: column;
    justify-content: space-around;
`;

export const WeightRow = styled.View`
    flex-direction: row;    
`;

export const WeightNumber = styled.Text`
    font-family: Poppins;
    color: #212121;
    font-size: 10px;
    font-weight: 400;
    alignSelf: center;
    margin-left: 8px;
`;

export const WeightName = styled.Text`
    font-family: Poppins;
    color: #666666;
    font-size: 8px;
    font-weight: 400;
    alignSelf: center;
    margin-top: 10px;
`;

export const HeightArea = styled.View`
    flex-direction: column;
    justify-content: space-around;
`;

export const HeightRow = styled.View`
    flex-direction: row;
`;

export const HeightNumber = styled.Text`
    color: #212121;
    font-size: 10px;
    font-weight: 400;
    alignSelf: center;
    margin-left: 8px;
`;

export const HeightName = styled.Text`
    font-family: Poppins;
    color: #666666;
    font-size: 8px;
    font-weight: 400;
    alignSelf: center;
    margin-top: 10px;
`;

export const AbilitiesArea = styled.View`
    flex-direction: column;
    justify-content: space-around;
`;

export const AbilityName = styled.Text`
    font-family: Poppins;
    color: #666666;
    font-size: 10px;
    font-weight: 400;
`;

export const AbilityTitle = styled.Text`
    font-family: Poppins;
    color: #666666;
    font-size: 8px;
    font-weight: 400;
    alignSelf: center;
    margin-top: 10px;
`;

export const StatusTitle = styled.Text`
    font-family: Poppins;
    color: ${props => props.color};
    font-size: 16px;
    font-weight: bold;
    alignSelf: center;
    margin-bottom: 30px;
    margin-top: 16px;
`;

export const StatusArea = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-bottom: 50px;
`;

export const StatusTypesArea = styled.View`
    flex-direction: column;
    align-items: flex-end;
    padding-left: 10px;
`;

export const StatusTypeName = styled.Text`
    font-family: Poppins;
    color: ${props => props.color};
    font-size: 10px;
    font-weight: bold;
    margin-bottom: 3px;
`;

export const StatusNumbersArea = styled.View`
    flex-direction: column;
    align-items: flex-start;
`;

export const StatusNumber = styled.Text`
    font-family: Poppins;
    font-weight: 400;
    color: #000000;
    font-size: 10px;
    margin-bottom: 3px;
`;

export const StatusBarsArea = styled.View`
    flex-direction: column;
    align-items: flex-start;
    padding-right: 10px;
    padding-left: 10px;
`;

export const StatusBarsRow = styled.View`
    flex-direction: row;
    flex: 1;
`;

export const StatusBar = styled.View`
    background-color: ${props => props.color};
    opacity: ${props => props.opacity};
    width: ${props => props.width + 'px'};;
    height: 4px;
    left: 0px;
    margin-top: 6.2px;
    margin-bottom: 6.2px;
    border-radius: 5px;
    align-items: flex-start;
`;