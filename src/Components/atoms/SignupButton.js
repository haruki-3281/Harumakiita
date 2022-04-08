import React,{ useState,useEffect } from "react";
import styled from "styled-components";

export default function SignupButton(props){
    return(
        <$SignupButton href="https://www.yahoo.co.jp">
            {"ユーザー登録"}
        </$SignupButton>
    );
}

const $SignupButton = styled.a`
    color:white;
    text-decoration:none;

    border:2px solid white;
    padding:0.5rem;

    :hover{
        background:white;
        color:#8858FF;
    }
`;