import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import Api from '../Api';

import {useWindowDimensions} from 'react-native';

const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin: 5px;
    border-radius: 8px;
    flex-direction: column;
    border: 1px solid ${props => props.color};
    align-items: center;
    justify-content: space-between;
`;

const PokemonImage = styled.Image`
    flex: 1;
    resizeMode: contain;
`;

const PokemonID = styled.Text`
    color: ${props => props.color};
    font-family: Poppins;
    font-size: 16px;
    alignSelf: flex-end;
`;

const PokemonName = styled.Text`
    color: #FFFFFF;
    font-family: Poppins;
    font-size: 14px;
`;

const NameArea = styled.View`
    background-color: ${props => props.color};
    justify-content: center;
    borderBottomEndRadius: 8px;
    borderBottomStartRadius: 8px;
    align-items: center;
    font-weight: 400;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 20px;
    alignSelf: center;
`;

export default ({data}) => {

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);

    const getPokemonDetails = async () => {
        let response = await Api.getPokemon(data.id);
        let specie = await Api.getPokemonColor(response.species.name);
        await setDetails({
            name: response.name,
            color: specie.color.name,
            id: response.id,
            image: response.sprites.front_default});
        setLoading(false);
    };

    useEffect(() => {
        getPokemonDetails(data.name),
        setLoading(true)
    }, [data.id]);

    return (
        <Area style={{
            width: windowWidth*0.25, 
            height: windowWidth*0.27
            }}
            color={details.color}>

            <PokemonID color={`${details.color}`}> {'#'+details.id} </PokemonID>
            {loading && <LoadingIcon size="large" color="#000000"/>}
            <PokemonImage source={{uri: `${details.image}`}}
                style={{
                    width: windowWidth*0.24,
                    height: windowWidth*0.25
                }}
            />
            <NameArea style={{
                width: windowWidth*0.25, 
                }}
                color={`${details.color}`}>
                <PokemonName color={`${details.color}`}> {details.name} </PokemonName> 
            </NameArea>
        </Area>
    );
};