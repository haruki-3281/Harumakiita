import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import LeftSideContainer from "./LeftSideContainer";
import ArticleList from "./ArticleList";
import RightSideContainer from "./RightSideContainer";

export default function ContentContainer(props){
    return (
        <$ContentContainer>
            <LeftSideContainer />
            <ArticleList />
            <RightSideContainer />
        </$ContentContainer>
    );
};

const $ContentContainer = styled.div`
    display:grid;
    grid-template-columns: 250px 1fr 300px;

    grid-row: 2 / 3;
    height:100%;
`;

