import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";
import ContentContainer from "./ContentContainer";

export default function Body(props){
    return (
        <$Body>
            <HeaderContainer title={props.title}/>
            <ContentContainer />
        </$Body>
    );
};

const $Body = styled.div`
    display: grid;
    grid-template-rows:9rem 1fr;

    width:100%;
    height:100%;
`;