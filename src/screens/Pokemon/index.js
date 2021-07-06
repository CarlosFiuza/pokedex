import React, { useState, useEffect } from 'react';
import { Text, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Api from '../../Api';

import {useWindowDimensions} from 'react-native';

import Swiper from 'react-native-swiper';

import { SvgUri } from 'react-native-svg';

import PokeballBackground from '../../assets/pokeball.svg';

import { Container,
         HeaderArea,
         TitleArea,
         ArrorBackButton,
         Title,
         Id,
         LoadingIcon,
         SwipeDot,
         SwipeItem,
         DetailsArea } from './styles';

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
        let images = [];
        images.push(info.image);
        for (let element in data['sprites']){
            if(data['sprites'][element] != null){
                if(element != 'versions' && element != 'other'){
                    images.push(data['sprites'][element]);
                }
            }
        }
        setInfo({
            name: info.name,
            id: info.id,
            color: info.color,
            images: images,
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

            {info.images && Object.keys(info.images).length > 0 ?
                <Swiper
                    style={{height: windowHeight * 0.33}}
                    dot={<SwipeDot color='#FFFFFF'/>}
                    activeDot={<SwipeDot color='#000000'/>}
                    paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
                    autoplay={true}
                    >

                    {info.images.map((element, key) => (
                            <SwipeItem key={key} color={info.color}>
                                {element.slice(-3) != 'svg' ?
                                    <Image source={{uri: `${element}`}}
                                        style={{
                                            width: '100%', 
                                            height: windowHeight * 0.25, 
                                            resizeMode: "contain",
                                        }}
                                        />
                                    :
                                    <SvgUri width='100%'
                                        height= {windowHeight * 0.25}
                                        resizeMode ="contain"
                                        uri= {element}
                                        position = 'absolute'
                                    />

                                    }
                            </SwipeItem>
                    ))}
                </Swiper>
                : 
                <LoadingIcon size="large" color="#000000"/>
                }
                
            <PokeballBackground width="100%" height="208" position='absolute' alignSelf="flex-end"/>

            <DetailsArea color={info.color} marginTop={windowHeight * -0.5}>
                <LoadingIcon size="large" color="#000000"/>
            </DetailsArea>
  
        </Container>
    );
}
