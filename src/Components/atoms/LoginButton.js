import React,{ useState,useEffect } from "react";
import styled from "styled-components";

export default function LoginButton(props){
    return(
        <$LoginButton href="https://www.yahoo.co.jp">
            {"ログイン"}
        </$LoginButton>
    );
};

const $LoginButton = styled.a`
    color:white;
    text-decoration:none;

    :hover{
        text-decoration:underline;
    }
`;