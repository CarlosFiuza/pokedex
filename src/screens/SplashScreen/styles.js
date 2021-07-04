import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:	#FFD700;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 200px;
    height: 150px;
    border-radius: 22px;
`;

export const Title = styled.Text`
    margin-top: 20px;
    font-size: 30px;
    color: #000000;
    font-weight: bold;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 20px;
`;