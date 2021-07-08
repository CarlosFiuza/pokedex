import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import Api from '../Api';

import {useWindowDimensions} from 'react-native';

import { SvgUri } from 'react-native-svg';

const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin: 5px;
    margin-bottom: 5px;
    border-radius: 8px;
    flex-direction: column;
    border: 1px solid ${props => props.color};
    align-items: center;
    justify-content: space-between;
`;

const PokemonID = styled.Text`
    font-family: Poppins;
    color: ${props => props.color};
    font-family: Poppins;
    font-size: 8px;
    alignSelf: flex-end;
`;

const PokemonName = styled.Text`
    font-family: Poppins;
    color: #FFFFFF;
    font-family: Poppins;
    font-size: 12px;
`;

const NameArea = styled.View`
    background-color: ${props => props.color};
    justify-content: center;
    borderBottomEndRadius: 8px;
    borderBottomStartRadius: 8px;
    align-items: center;
    font-weight: 400;
`;

const LoadingIcon = styled.ActivityIndicator`
    margin-top: 20px;
    alignSelf: center;
`;

export default ({data}) => {

    const navigation = useNavigation();

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    const [details, setDetails] = useState(false);
    const [loading, setLoading] = useState(true);

    const [pokemonDetails, setPokemonDetails] = useState([]);

    const getPokemonDetails = async (data) => {
        let color = await Api.getPokemonColor(data.id);
        const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+data.id+'.svg';
        if(color['color'].name === 'white') {
            data['color'] = '#D3D3D3';
        } else if (color['color'].name === 'yellow') {
            data['color'] = '#FFD700';
        } else{
            data['color'] = color['color'].name;
        }
        data['image'] = image;
        setDetails(true);

    };

    const onClick = () => {
        navigation.navigate("Pokemon", {
            name: data.name,
            id: data.id,
            image: data.image,
            color: data.color,
        });
    };

    const addZeros = (number) => {
        let num = number.toString();
        while(num.length < 3){
            num = '0' + num;
        }
        return num;
    };

    useEffect(() => {
        getPokemonDetails(data),
        setLoading(true)
    }, [data.id]);

    return (
        <Area style={{
            width: windowWidth*0.25, 
            height: windowWidth*0.27
            }}
            onPress={onClick}
            color={data.color}>
            {!details && <LoadingIcon size="large" color="#000000"/>}

            <PokemonID color={`${data.color}`}> {'#'+addZeros(data.id)} </PokemonID>

            {details && 
                <SvgUri width= {windowWidth*0.2}
                        height= {windowWidth*0.18}
                        resizeMode ="contain"
                        uri= {data.image}
                    />
            }

            <NameArea style={{width: windowWidth*0.25}} color={`${data.color}`}>

                <PokemonName color={`${data.color}`}> {data.name} </PokemonName> 
                
            </NameArea>
        </Area>
    );
};