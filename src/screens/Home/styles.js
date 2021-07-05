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
`;
export const PokeballIcon = styled.Image`
    width: 26px;
    height: 26px;
    transform: rotate(39.5deg);
`;

export const PokedexTitle = styled.Text`
    font-family: Poppins;
    font-size: 30px;
    font-weight: bold;
    margin-left: 15px;
    color: #000000;
`;

export const FilterButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    flex-direction: row;
    align-items: center;
`;

export const SearchArea = styled.View`
    background-color: #FFFFFF;
    height: 40px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000000;
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

export const Grid = styled.View`
    flexDirection: row;
    flexWrap: wrap;
    alignContent: space-around;
    justify-content: space-between;
    marginBottom: 20px;
`;