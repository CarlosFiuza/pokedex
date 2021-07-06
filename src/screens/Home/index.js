import React, { useState, useEffect } from 'react';
import { 
    Container, 
    HeaderArea,
    TitleArea, 
    PokedexTitle,  
    PokeballIcon, 
    FilterButton,
    SearchArea,
    SearchInput,
    ItemsArea,
    Scroller,
    LoadingIcon,
    Grid,
    NotFoundText
     } from './styles';

import PokemonBox from '../../components/PokemonBox';

import Icon from 'react-native-vector-icons/FontAwesome';

import Api from '../../Api';


export default () => {

    const [searchText, setSearchText] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [filter, setFilter] = useState(false);

    const getPokedex = async () => {
        let data = await Api.getPokedex();
        let list = [{}];
        data['pokemon_species'].map((element, key) => {
            let id = element.url.substring(42);
            id = id.slice(0, -1);
            id = Number(id);  
            list.push(factoryObjects(
                element.name,
                element.url,
                id,
                null,
                null
            )); 
        });
        list.shift();
        setLoading(false);
        setPokemonList(list);
    };

    const factoryObjects = (name, url, id, color, image) => {
        return { name, url, id, color, image};
    };

    const sortId = (data) => {
        if(filter){
            data.sort((a, b) => {
                return a.id > b.id;
            });
        } else {
            data.sort((a, b) => {
                return a.id < b.id;
            });
        }
        setFilter(!filter);
        return data;
    };

    const searchPokemon = async (text) => {
        setIsSearching(true);
        setSearchList([]);
        if(text === ''){
            setIsSearching(false);
        } else {
            let list = await pokemonList.filter(customFilter);
            function customFilter(item) {
                if(item.name.includes(text)){
                    return true;
                } else {
                    return false;
                }
            };
            setSearchList(list);
        }
    };

    useEffect(() => {
        getPokedex()
    }, []);

    useEffect(() => {
        if(isSearching){
            Object.keys(searchList).length < 1 ? setNotFound(true) : setNotFound(false);
        } else {
            setNotFound(false);
        }
    }, [searchList]);

    return (
        <Container>
            <HeaderArea>
                <TitleArea>
                    <PokeballIcon source={require('../../assets/pokeball.png')} />

                    <PokedexTitle> Pokédex </PokedexTitle>
                </TitleArea>

                <FilterButton onPress={() => 
                    isSearching ? 
                        setSearchList(sortId(searchList))
                        : setPokemonList(sortId(pokemonList))
                    }>
                    <Icon name="hashtag" size={20} color="#000000"/>

                    {filter ?
                        <Icon name="long-arrow-down" size={20} color="#000000"/>
                        : <Icon name="long-arrow-up" size={20} color="#000000"/>
                    }
                </FilterButton>

            </HeaderArea>

            <SearchArea>

                <Icon name="search" size={15} color="#666666"/>
                <SearchInput 
                    placeholder="Pesquisar"
                    value={searchText}
                    onChangeText={t=>setSearchText(t)}
                    onSubmitEditing={()=> { searchPokemon(searchText) }}
                />
            </SearchArea>

            <ItemsArea>
                <Scroller>
                    { loading && <LoadingIcon size="large" color="#000000"/>}
                    { notFound && <NotFoundText> Nenhum resultado para sua pesquisa! </NotFoundText> }
                     <Grid>
                        { isSearching ? 
                            searchList.map((items, k) => (
                                <PokemonBox key={items.id} data={items}/>))
                            : pokemonList.map((items, k) => (
                                <PokemonBox key={items.id} data={items}/>))
                        }
                    </Grid>
                </Scroller>
            </ItemsArea>

        </Container>
    );
}