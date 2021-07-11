import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #F7F7F7;
    flex: 1;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
`;

export const TitleArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 5px;
`;

export const PokedexTitle = styled.Text`
    font-family: Poppins;
    font-size: 24px;
    font-weight: bold;
    margin-left: 16px;
    color: #000000;
`;

export const FilterButton = styled.TouchableOpacity`
    width: 24px;
    height: 32px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SearchArea = styled.View`
    background-color: #FFFFFF;
    height: 40px;
    border-radius: 15px;
    border: 1px solid #E0E0E0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const SearchInput = styled.TextInput`
    font-size: 16px;
    color: #000000;
    alignSelf: flex-start;
    flex: 1;
`;

export const EraseButton = styled.TouchableOpacity`
    width: 30px;
    height: 10px;
`;

export const ItemsArea = styled.View`
    flex: 1;
    margin-top: 10px;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 20px;
    alignSelf: center;
`;

export const NotFoundText = styled.Text`
    font-family: Poppins;
    font-size: 18px;
    color: #000000;
    alignSelf: center;
`;