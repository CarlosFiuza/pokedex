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
    Grid
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
    const [filter, setFilter] = useState(true);

    const getPokedex = async () => {
        let data = await Api.getPokedex();
        let list = [{}];
        Object.keys(data['pokemon_species']).forEach(function(element) {
            let id = data['pokemon_species'][element].url.substring(42);
            id = id.slice(0, -1);
            list.push(factoryObjects(
                data['pokemon_species'][element].name,
                data['pokemon_species'][element].url,
                id
            ));   
        });
        list.shift();
        setPokemonList(list);
        setLoading(false);

    };

    const factoryObjects = (name, url, id) => {
        return { name, url, id};
    };

    const orderId = () => {
        let data = pokemonList;
        setLoading(true);
        if(filter){
            data.sort((a, b) => {
                return a.id > b.id;
            });
        } else {
            data.sort((a, b) => {
                return a.id < b.id;
            });
        }
        setPokemonList(data);
        setFilter(!filter);
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

                <FilterButton onPress={() => orderId()}>
                    <Icon name="hashtag" size={20} color="#000000"/>
                    {filter ?
                        <Icon name="long-arrow-up" size={20} color="#000000"/>
                        : <Icon name="long-arrow-down" size={20} color="#000000"/>
                    }
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
                    <Grid>
                        { pokemonList.map((items, k) => (
                            <PokemonBox key={k} data={items}/>
                        ))}
                    </Grid>
                </Scroller>
            </ItemsArea>

        </Container>
    );
}