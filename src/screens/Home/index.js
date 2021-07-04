import React, { useState, useEffect } from 'react';
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
    LoadingIcon,
     } from './styles';

import PokemonBox from '../../components/PokemonBox';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';


export default () => {
    
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);

    const getPokedex = async () => {
        let data = await Api.getPokedex();
        setPokemonList([]);
        setPokemonList(data['pokemon_species']);
        setLoading(false);

    };

    useEffect(() => {
        getPokedex()
    }, []);

    return (
        <Container>
            <HeaderArea>
                <PokeballIcon source={require('../../assets/pokeball.png')} />

                <PokedexTitle> Pokédex </PokedexTitle>

                <FilterButton onPress={() => getPokedex()}>
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
                    { loading && <LoadingIcon size="large" color="#000000"/>}
                    {pokemonList.map((item, k) => (
                        <PokemonBox key={k} data={item} />
                    ))}
                </Scroller>
            </ItemsArea>

        </Container>
    );
}