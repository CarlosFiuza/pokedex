import React, { useState, useEffect } from 'react';
import { Text, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Api from '../../Api';

import {useWindowDimensions} from 'react-native';

import Swiper from 'react-native-swiper';

import { SvgUri } from 'react-native-svg';

import PokeballBackground from '../../assets/pokeball.svg';
import Ruler from '../../assets/ruler.svg';
import WeightBalance from '../../assets/weightBalance.svg';
import Previous from '../../assets/previous.svg';
import Next from '../../assets/next.svg';

import { Container,
         HeaderArea,
         TitleArea,
         ArrorBackButton,
         Title,
         Id,
         LoadingIcon,
         SwipeDot,
         SwipeItem,
         DetailsArea,
         PokeballBackgroundArea,

         TypesArea,
         TypeBox,
         TypeName,
         
         AboutTitle,
         AboutArea,
         DivisorLine,

         WeightArea,
         WeightRow,
         WeightNumber,
         WeightName,

         HeightArea,
         HeightRow,
         HeightNumber,
         HeightName,

         AbilitiesArea,
         AbilityName,
         AbilityTitle,

         StatusArea,
         StatusTypesArea,
         StatusTypeName,
         StatusTitle,
         StatusNumbersArea,
         StatusNumber,
         StatusBar
          } from './styles';


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

        let types = [];
        for(let element in data['types']){
            types.push(data['types'][element].type.name);
        }

        let abilities = [];
        for(let element in data['abilities']){
            abilities.push(data['abilities'][element].ability.name);
        }

        setInfo({
            name: info.name,
            id: info.id,
            color: info.color,
            images: images,
            types: types,
            abilities: abilities,
            height: data['height'],
            weight: data['weight'],
            statusBase: [
                'HP:' + data['stats'][0].base_stat,
                'ATK:' + data['stats'][1].base_stat,
                'DEF:' + data['stats'][2].base_stat,
                'SATK:' + data['stats'][3].base_stat,
                'SDEF:' + data['stats'][4].base_stat,
                'SPD:' + data['stats'][5].base_stat
            ]
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

            <PokeballBackground width="100%" height="208" position='absolute' alignSelf='flex-end'/>

            {info.images && Object.keys(info.images).length > 0 ?
                <Swiper
                    style={{height: windowHeight * 0.26}}
                    autoplay={true}
                    showsPagination={false}
                    showsButton={true}
                    >

                    {info.images.map((element, key) => (
                            <SwipeItem key={key}>
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
                                    />

                                    }
                            </SwipeItem>
                    ))}
                </Swiper>
                : 
                <LoadingIcon size="large" color="#000000"/>
            }
            <DetailsArea color={info.color} marginTop={windowHeight * -0.7}>

                {info.abilities && info.abilities.length > 0 &&
                    <TypesArea marginTop={(windowHeight * 0.15)}>
                        {info.types.map((element, key) => (
                            <TypeBox key={key} color={info.color}>
                                <TypeName key={key}> {element} </TypeName>
                            </TypeBox>
                        ))}
                    </TypesArea>
                }

                <AboutTitle color={info.color}> Sobre </AboutTitle>

                <AboutArea>
                    {info.weight && 
                        <WeightArea>
                                <WeightRow>
                                    <WeightBalance height="24" width="24" />
                                    <WeightNumber> {info.weight.toString() +  ' kg'} </WeightNumber>
                                </WeightRow>
                            <WeightName> Peso </WeightName>
                        </WeightArea>
                    }

                    <DivisorLine height={70}>
                    </DivisorLine>

                    {info.height &&
                        <HeightArea>
                                <HeightRow>
                                    <Ruler height="24" width="24" />
                                    <HeightNumber> {info.height.toString() + ' m'} </HeightNumber>
                                </HeightRow>
                            <HeightName> Altura </HeightName>
                        </HeightArea>
                    }

                    <DivisorLine height={70}>
                    </DivisorLine>

                    {info.abilities && info.abilities.length > 0 &&
                        <AbilitiesArea>
                            {info.abilities.map((element, key) => (
                                <AbilityName key={key}> {element} </AbilityName>
                            ))}
                            <AbilityTitle> Habilidades </AbilityTitle>
                        </AbilitiesArea>
                    }

                </AboutArea>
                {info.statusBase && <StatusTitle color={info.color}> Status Base </StatusTitle>}
                {info.statusBase && info.statusBase.length > 0 && 
                    <StatusArea>
                        <StatusTypesArea>
                            {info.statusBase.map((element, key) => (
                                <StatusTypeName key={key} color={info.color}> {element.split(':')[0]} </StatusTypeName>
                            ))}
                        </StatusTypesArea>

                        <DivisorLine height={140}>
                        </DivisorLine>

                        <StatusNumbersArea>
                            {info.statusBase.map((element, key) => (
                                <StatusNumber key={key}> {element.split(':')[1]} </StatusNumber>
                            ))}
                        </StatusNumbersArea>
                        <StatusNumbersArea>
                            {info.statusBase.map((element, key) => (
                                <StatusBar key={key} color={info.color} width={parseInt(element.split(':')[1]) * (windowWidth *0.004)} />
                            ))}

                        </StatusNumbersArea>
                    </StatusArea>
                }
        
            
            </DetailsArea>
  
        </Container>
    );
}
