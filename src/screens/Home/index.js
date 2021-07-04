import React, { useState } from 'react';
import { 
    Container, 
    HeaderArea, 
    PokedexTitle,  
    PokeballIcon, 
    FilterButton,
    SearchArea,
    SearchInput,
    ItemsArea,
    Scroller,
     } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';



export default () => {
    
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState('');

    return (
        <Container>
            <HeaderArea>
                <PokeballIcon source={require('../../assets/pokeball.png')} />

                <PokedexTitle> Pokédex </PokedexTitle>

                <FilterButton onPress={() => navigation.navigate('SplashScreen')}>
                    <Icon name="hashtag" size={20} color="#000000"/>
                    <Icon name="long-arrow-up" size={20} color="#000000"/>
                </FilterButton>

            </HeaderArea>

            <SearchArea>

                <Icon name="search" size={15} color="#666666"/>
                <SearchInput 
                    placeholder="Pesquisar"
                    value={searchText}
                    onChangeText={t=>setSearchText(t)}
                />
            </SearchArea>

            <ItemsArea>
                <Scroller>
                </Scroller>
            </ItemsArea>

        </Container>
    );
}