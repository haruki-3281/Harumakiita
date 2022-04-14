import React from "react";
import styled from "styled-components";
import Article from "./Article";
import { useGetArticle } from "../../hooks";

const api = "dummy.json";

export default function ArticleList(){
    const list = useGetArticle();

    return (
        <$ArticleList>
            {list.map((item,index) => {
                return <Article key={index} data={item}/>;
            })}
        </$ArticleList>
    );
};

const $ArticleList = styled.div`
    position:relative;

    width:100%;
    grid-column: 2;

    display:flex;
    flex-direction:column;
`;