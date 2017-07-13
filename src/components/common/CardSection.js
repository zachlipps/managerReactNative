import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native'; 

const CardSection = (props) => (
        <CardSecSty>{props.children}</CardSecSty>
    );


const CardSecSty = styled.View`
    border-bottomWidth: 1;
    padding:5px;
    background-color: #fff;
    justify-content: flex-start;
    flex-direction: row;
    border-color: #ddd;
    position: relative;
  `


export { CardSection }