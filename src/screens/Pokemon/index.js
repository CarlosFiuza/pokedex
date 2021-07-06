import React, { useState, useEffect } from 'react';
import { Text, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Api from '../../Api';

import {useWindowDimensions} from 'react-native';

import { Container,
         HeaderArea,
         TitleArea,
         ArrorBackButton,
         Title,
         Id,
         LoadingIcon } from './styles';

export default () => {

    const navigation = useNavigation();
    const route = useRoute();

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    const [isReady, setIsReady] = useState(false);
    const [merda, setmerda] = useState(route.params.image);

    const [info, setInfo] = useState({
        name: route.params.name,
        id: route.params.id,
        image: route.params.image,
        color: route.params.color,
    });

    const navigateBack = () => {
        navigation.goBack();
    }

    const getPokemonDetails = async () => {
        let data = await Api.getPokemon(info.id);
        setInfo({
            name: info.name,
            id: info.id,
            color: info.color,
            images: data['sprites'],
            types: data['types'],
            abilities: data['abilities'],
            height: data['height'],
            weight: data['weight'],
            hp: data['stats'][0].base_stats,
            atk: data['stats'][1].base_stats,
            def: data['stats'][2].base_stats,
            satk: data['stats'][3].base_stats,
            sdef: data['stats'][4].base_stats,
            spd: data['stats'][5].base_stats
        });
    };

    useEffect(() => {
        getPokemonDetails();
    }, [])

    useEffect(() => {
        if(Object.keys(info).length === 14){
            setIsReady(true);
        }
    }, [info.images])

    return (
        <Container color={info.color}>
           <HeaderArea>
                <TitleArea>
                    <ArrorBackButton onPress={navigateBack}>
                        <Icon name="arrow-left" size={32} color="#FFFFFF"/>
                        </ArrorBackButton>
                    <Title> {info.name} </Title>
                </TitleArea>
                <Id> {'#' + info.id} </Id>
            </HeaderArea>
            {isReady && <Image source={{uri: `${info.images.back_default}`}}
                    style={{
                        width: windowWidth, 
                        height: windowHeight, 
                        resizeMode: "contain",}} 
                        />}

            {!isReady && <LoadingIcon size="large" color="#000000"/>}
        
        </Container>
    );
}
