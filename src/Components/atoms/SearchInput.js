import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchInput(props){
    return(
        <$SearchInput className={props.className}>
            <$SearchIcon className="searchIcon">
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
`;

const $SearchInput = styled.div`
    position:relative;

    > input {
        width:100%;
        height:100%;
        padding-left:2rem;

        box-sizing:border-box;
    }
`;