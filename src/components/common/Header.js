// Import libraries for maing a component
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

// make a component
const Header = ({ headerText }) => (
  <HeaderStyle>
    <HeaderText>{headerText}</HeaderText>
  </HeaderStyle>
);

const HeaderStyle = styled.View`
    background-color:ghostwhite;
    height:50px;
    display:flex;
    
    shadow-color:black;
    shadow-offset: {width:3,height:2};
    shadow-radius: 5;
    shadow-opacity: 1;
    elevation: 2;
    position: relative;
`;
const HeaderText = styled.Text`
    text-align:center;
    font-size: 20px;
    margin: 20px;
    font-weight:bold;
`;

export { Header };

// make componet avalible to other parts of the app
