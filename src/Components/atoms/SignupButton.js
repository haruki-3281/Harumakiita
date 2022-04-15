import React,{ useState,useEffect } from "react";
import styled from "styled-components";

export default function SignupButton(props){
    return(
        <$SignupButton 
            className={props.className}
            href={props.href}
        >
            {"ユーザー登録"}
        </$SignupButton>
    );
};

const $SignupButton = styled.a`
    text-decoration:none;
    border:2px solid white;

    :hover{
        background:white;
        color:#8858FF;
    }
`;