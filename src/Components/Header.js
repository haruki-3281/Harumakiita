import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import HeaderTitle from "./HeaderTitle";
import SearchInput from "./SearchInput";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";

export default function Header(props){
    return(
        <$Header>
            <$HeaderItemsContainer>
                <HeaderTitle title={props.title} />

                <$HeaderItems>
                    <SearchInput />
                    <LoginButton />
                    <SignupButton />
                </$HeaderItems>
            </$HeaderItemsContainer>
        </$Header>
    );
};

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