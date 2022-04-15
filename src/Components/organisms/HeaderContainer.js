import React from "react";
import styled from "styled-components";
import Navigator from "./Navigator";
import Header from "./Header";

export default function HeaderContainer(props){
    return (
        <$HeaderContainer>
            <Header title={props.title} />
            <Navigator />
        </$HeaderContainer>
    );
};

const $HeaderContainer = styled.div`
    position:relative;

    width:100%;
    grid-row: 1 / 2;

    display:grid;
    grid-template-rows:6rem 1fr;

    color:white;
`;


