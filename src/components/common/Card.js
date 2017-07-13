import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Card = props => (
  <StyledCard>{props.children}</StyledCard>
    );


const StyledCard = styled.View`
border-width: 1px;
border-radius: 2px;
border-color: #ddd;
border-bottom-width: 0;
shadow-color: #000;
shadow-offset: {width: 0, height: 2};
shadow-opacity: .1;
shadow-radius: 2px;
elevation: 1px;
margin-left: 5px;
margin-right: 5px;
margin-top: 10px;
`;


export { Card };
