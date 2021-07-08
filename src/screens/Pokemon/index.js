import React, { useState, useEffect } from 'react';
import { Text, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import Api from '../../Api';

import {useWindowDimensions} from 'react-native';

import Swiper from 'react-native-swiper';

import { SvgUri } from 'react-native-svg';

import PokeballBackground from '../../assets/pokeball.svg';
import Ruler from '../../assets/ruler.svg';
import WeightBalance from '../../assets/weightBalance.svg';
import Previous from '../../assets/previous.svg';
import Next from '../../assets/next.svg';
import ArrowBack from '../../assets/arrowBack.svg';

import { Container,
         Scroller,
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
         StatusBarsArea,
         StatusBarsRow,
         StatusBar } from './styles';


export default () => {

    const navigation = useNavigation();
    const route = useRoute();

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    const [isReady, setIsReady] = useState(false);

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
            height: data['height']/10,
            weight: parseFloat(data['weight'])/10,
            statusBase: [
                'HP:' + data['stats'][0].base_stat,
                'ATK:' + data['stats'][1].base_stat,
                'DEF:' + data['stats'][2].base_stat,
                'SATK:' + data['stats'][3].base_stat,
                'SDEF:' + data['stats'][4].base_stat,
                'SPD:' + data['stats'][5].base_stat
            ]
        });
        setIsReady(true);
    };

    const addZeros = (number) => {
        if(typeof number === 'number'){
            number = number.toString();
        }
        while(number.length < 3){
            number = '0' + number;
        }
        return number;
    };

    const addCommaZero = (number) => {
        if(Math.floor(number) != number){
            return number.toString().replace('.', ',') + 'kg';
        }
        return number.toString() + ',0 kg';

    };

    const upperCaseLetter = (string) => {
        return string.slice(0,1).toUpperCase() + string.substring(1);
    };

    useEffect(() => {
        getPokemonDetails();
    }, [])

    return (
        <Container color={info.color}>
            { isReady ?
                <Scroller>
                    <HeaderArea>
                            <TitleArea>
                                <ArrorBackButton onPress={navigateBack}>
                                    <ArrowBack width='18' height='18'/>
                                </ArrorBackButton>
                                <Title> {info.name} </Title>
                            </TitleArea>
                            <Id> {'#' + addZeros(info.id)} </Id>
                    </HeaderArea>

                    <PokeballBackground width={windowWidth * 0.6} height={windowHeight * 0.33} position='absolute' left={windowWidth * 0.35}/>

                    {info.images && Object.keys(info.images).length > 0 &&
                        <Swiper
                            style={{height: windowHeight * 0.33}}
                            autoplay={true}
                            showsPagination={false}
                            showsButtons={true}
                            buttonWrapperStyle={{position: 'absolute'}}
                            prevButton={<Previous width='8' height='14' fill='#FFFFFF' left={windowWidth * 0.06}/>}
                            nextButton={<Next width='8' height='14' fill='#FFFFFF' right={windowWidth * 0.06}/>}
                            >

                            {info.images.map((element, key) => (
                                    <SwipeItem key={key}>
                                        {element.slice(-3) != 'svg' ?
                                            <Image source={{uri: `${element}`}}
                                                style={{
                                                    width: '80%', 
                                                    height: windowHeight * 0.33, 
                                                    resizeMode: "contain",
                                                }}
                                                />
                                            :
                                            <SvgUri width='80%'
                                                height= {windowHeight * 0.33}
                                                resizeMode ="contain"
                                                uri= {element}
                                            />

                                            }
                                    </SwipeItem>
                            ))}
                        </Swiper>
                    }

                    <DetailsArea color={info.color} marginTop={windowHeight * -0.1} >

                        {info.types && info.types.length > 0 &&
                            <TypesArea marginTop={(windowHeight * 0.12)}>
                                {info.types.map((element, key) => (
                                    <TypeBox key={key} color={info.color}>
                                        <TypeName key={key}> {upperCaseLetter(element)} </TypeName>
                                    </TypeBox>
                                ))}
                            </TypesArea>
                        }

                        <AboutTitle color={info.color}> Sobre </AboutTitle>

                        <AboutArea>
                            {info.weight && 
                                <WeightArea>
                                        <WeightRow>
                                            <WeightBalance height="16" width="16" />
                                            <WeightNumber> {addCommaZero(info.weight)} </WeightNumber>
                                        </WeightRow>
                                    <WeightName> Peso </WeightName>
                                </WeightArea>
                            }

                            <DivisorLine height={48} margin={24}>
                            </DivisorLine>

                            {info.height &&
                                <HeightArea>
                                        <HeightRow>
                                            <Ruler height="16" width="8" />
                                            <HeightNumber> {info.height.toString() + ' m'} </HeightNumber>
                                        </HeightRow>
                                    <HeightName> Altura </HeightName>
                                </HeightArea>
                            }

                            <DivisorLine height={48} margin={24}>
                            </DivisorLine>

                            {info.abilities && info.abilities.length > 0 &&
                                <AbilitiesArea>
                                    {info.abilities.map((element, key) => (
                                        <AbilityName key={key}> {upperCaseLetter(element)} </AbilityName>
                                    ))}
                                    <AbilityTitle> Habilidades </AbilityTitle>
                                </AbilitiesArea>
                            }

                        </AboutArea>

                        <StatusTitle color={info.color}> Status Base </StatusTitle>
                        {info.statusBase && info.statusBase.length > 0 && 
                            <StatusArea>
                                <StatusTypesArea>
                                    {info.statusBase.map((element, key) => (
                                        <StatusTypeName key={key} color={info.color}> {element.split(':')[0]} </StatusTypeName>
                                    ))}
                                </StatusTypesArea>

                                <DivisorLine height={100} margin={8}>
                                </DivisorLine>

                                <StatusNumbersArea>
                                    {info.statusBase.map((element, key) => (
                                        <StatusNumber key={key}> {addZeros(element.split(':')[1])} </StatusNumber>
                                    ))}
                                </StatusNumbersArea>
                                
                                <StatusBarsArea>
                                    {info.statusBase.map((element, key) => (
                                        <StatusBarsRow key={key}>
                                            <StatusBar key={key+6} color={info.color} opacity={1}
                                                        width={parseInt(element.split(':')[1])} />
                                            <StatusBar key={key+7} color={info.color} opacity={0.2}
                                                        width={248-parseInt(element.split(':')[1])} />
                                        </StatusBarsRow>
                                    ))}
                                </StatusBarsArea>

                            </StatusArea>
                        }
                
                    </DetailsArea>
                </Scroller>
                :
                <LoadingIcon size="large" color="#FFFFFF" top={windowHeight * 0.5}/>
            }
        </Container>
    );
}
