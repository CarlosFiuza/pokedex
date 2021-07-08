import React, { useState, useEffect } from 'react';
import { 
    Container, 
    HeaderArea,
    TitleArea, 
    PokedexTitle, 
    FilterButton,
    SearchArea,
    SearchInput,
    EraseButton,
    ItemsArea,
    Scroller,
    LoadingIcon,
    Grid,
    NotFoundText
     } from './styles';

import PokemonBox from '../../components/PokemonBox';

import PokeballIcon from '../../assets/pokeballIcon.svg';
import AtoZIcon from '../../assets/aToZ.svg';
import ArrowDownIcon from '../../assets/arrowDown.svg';
import HashtagIcon from '../../assets/hashtag.svg';
import DeleteIcon from '../../assets/delete.svg';
import SearchIcon from '../../assets/search.svg';

import Api from '../../Api';

import {useRoute} from '@react-navigation/native';

export default () => {

    const route = useRoute();

    const [searchText, setSearchText] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [pokemonList, setPokemonList] = useState(route.params.data);
    const [searchList, setSearchList] = useState([]);
    const [filter, setFilter] = useState(false);

    const sortList = (data) => {
        if(filter){
            data.sort((a, b) => {
                return a.id > b.id;
            });
        } else {
            data.sort((a, b) => {
                return a.name > b.name;
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

    const ClearSearchInput = () => {
        setIsSearching(false);
        setNotFound(false)
        setSearchText('');
    };

    useEffect(() => {
        if(isSearching){
            Object.keys(searchList).length < 1 ? setNotFound(true) : setNotFound(false);
        }
    }, [searchList]);

    return (
        <Container>
            <HeaderArea>
                <TitleArea>
                    <PokeballIcon width="24" height="24" />
                    <PokedexTitle> Pokédex </PokedexTitle>
                </TitleArea>

                <FilterButton onPress={() => 
                    isSearching ? 
                        setSearchList(sortList(searchList))
                        : setPokemonList(sortList(pokemonList))
                    }>

                    {filter ?
                        <AtoZIcon width='6' height='16' />
                        : <HashtagIcon width='9' height='16' />
                    }

                    <ArrowDownIcon widht='9' height='16'/>
                </FilterButton>

            </HeaderArea>

            <SearchArea>

                <SearchIcon width='24' height='12' />
                <SearchInput 
                    placeholder="Pesquisar"
                    value={searchText}
                    onChangeText={t=>setSearchText(t)}
                    onSubmitEditing={()=> { searchPokemon(searchText) }}
                />
                {isSearching &&
                    <EraseButton onPress={() => ClearSearchInput()}>
                        <DeleteIcon height='12' widht ='12' />
                    </EraseButton>
                }

            </SearchArea>

            <ItemsArea>
                <Scroller>
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