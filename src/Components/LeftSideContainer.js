import React,{ useState,useEffect } from "react";
import styled from "styled-components";

export default function LeftSideContainer(props){
    return (
        <$LeftSideContainer>

        </$LeftSideContainer>    
    );
};

const $LeftSideContainer = styled.div`
    grid-column: 1;
`;