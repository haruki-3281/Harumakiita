import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import HeaderTitle from "../atoms/HeaderTitle";
import SearchInput from "../atoms/SearchInput";
import LoginButton from "../atoms/LoginButton";
import SignupButton from "../atoms/SignupButton";

export default function Header(props){
    return(
        <$Header>
            <$HeaderItemsContainer>
                <$HeaderTitle 
                    title={props.title} 
                    href="http://localhost:8080"
                />

                <$HeaderItems>
                    <$SearchInput />
                    <$LoginButton 
                        href="https://www.yahoo.co.jp"
                    />
                    <$SignupButton
                        href="https://www.yahoo.co.jp"
                    />
                </$HeaderItems>
            </$HeaderItemsContainer>
        </$Header>
    );
};

const $HeaderTitle = styled(HeaderTitle)`
    font-size:2rem;
    a {
        color:white;
    }
`;

const $SearchInput = styled(SearchInput)`
    width:20rem;
    height:2.5rem;

    .searchIcon {
        font-size:0.75rem;
        height:fit-content;
        left:0.75rem;
    }
`;

const $LoginButton = styled(LoginButton)`
    color:white;
`;

const $SignupButton = styled(SignupButton)`
    padding:0.5rem;
    color:white;
`;

const $Header = styled.div`
    position:relative;
    height:fit-conetnt;
    padding-top:0.5rem;
    grid-row: 1;

    display:flex;
    justify-content:center;

    background:#8858FF;
`;

const $HeaderItemsContainer = styled.div`
    display:flex;

    align-items:center;
    justify-content:space-between;

    width:95%;
    height:fit-content;
`;

const $HeaderItems = styled.div`
    display:flex;
    align-items:center;

    > * {
        margin-right:1rem;
    }

    > a {
        font-size:0.9rem;
        font-weight:bold;
    }
`;