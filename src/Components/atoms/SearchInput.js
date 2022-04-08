import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchInput(props){
    return(
        <$SearchInput>
            <$SearchIcon>
                <FontAwesomeIcon icon={faSearch} />
            </$SearchIcon>
            <input placeholder="キーワードを入力" />
        </$SearchInput>
    );
};

const $SearchIcon = styled.div`
    position:absolute;
    color:black;

    top:0;
    bottom:0;
    margin:auto;

    left:0.75rem;
    
    font-size:0.75rem;
    height:fit-content;

`;

const $SearchInput = styled.div`
    position:relative;

    width:20rem;
    height:2.5rem;

    > input {
        width:100%;
        height:100%;
        padding-left:2rem;

        box-sizing:border-box;
    }
`;