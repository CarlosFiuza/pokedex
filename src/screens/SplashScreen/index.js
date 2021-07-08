import React , {useEffect} from 'react';
import { Container, Logo, Title, LoadingIcon} from './styles';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';

export default () => {

    const navigation = useNavigation();

    const factoryObjects = (name, url, id, color, image) => {
            return { name, url, id, color, image};
    };

    const upperCaseLetter = (string) => {
        return string.slice(0,1).toUpperCase() + string.substring(1);
    };
    
    useEffect(async() => {
        let data = await Api.getPokedex();
        let list = [{}];
        data['pokemon_species'].map((element, key) => {
            let id = element.url.substring(42);
            id = id.slice(0, -1);
            id = Number(id);
            list.push(factoryObjects(
                upperCaseLetter(element.name),
                element.url,
                id,
                null,
                null
            )); 
        });
        list.shift();
        list.sort((a, b) => {
                return a.id > b.id;
        });

        setTimeout(() => { navigation.replace('Home', {data: list})} , 3500)

    }, []);

    return (
        <Container>
            <Logo source={require('../../assets/pokedex_logo.png')}/>
            <Title> POKEDEX </Title>
            <LoadingIcon size="large" color="#000000"/>
        </Container>
    );
}