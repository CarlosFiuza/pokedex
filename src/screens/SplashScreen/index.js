import React , {useEffect} from 'react';
import { Container, Logo, Title, LoadingIcon} from './styles';
import { useNavigation } from '@react-navigation/native';

export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        return (
            setTimeout(() => { navigation.navigate('Home') }, 3000)
        );
    }, []);

    return (
        <Container>
            <Logo source={require('../../assets/pokedex_logo.png')}/>
            <Title> POKEDEX </Title>
            <LoadingIcon size="large" color="#000000"/>
        </Container>
    );
}